import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Typing Effect Component
export const TypingEffect = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const word = texts[currentWordIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setCurrentText(word.substring(0, currentText.length + 1))

                if (currentText === word) {
                    setTimeout(() => setIsDeleting(true), pauseTime)
                }
            } else {
                setCurrentText(word.substring(0, currentText.length - 1))

                if (currentText === '') {
                    setIsDeleting(false)
                    setCurrentWordIndex((prev) => (prev + 1) % texts.length)
                }
            }
        }, isDeleting ? deleteSpeed : speed)

        return () => clearTimeout(timeout)
    }, [currentText, isDeleting, currentWordIndex, texts, speed, deleteSpeed, pauseTime])

    return (
        <span className="relative">
            {currentText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-cyber-blue ml-1"
            />
        </span>
    )
}

// Typewriter Heading Component
export const TypewriterHeading = ({ text, className = "", speed = 50, highlightText, highlightClass, partColors }) => {
    const [displayText, setDisplayText] = useState('')
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        if (isHovered) {
            let index = 0
            const timer = setInterval(() => {
                if (index <= text.length) {
                    setDisplayText(text.slice(0, index))
                    index++
                } else {
                    clearInterval(timer)
                }
            }, speed)
            return () => clearInterval(timer)
        } else {
            setDisplayText(text)
        }
    }, [isHovered, text, speed])

    const renderText = () => {
        const textToRender = displayText

        // Split into characters
        const characters = textToRender.split('')

        // Determine color for each character
        let colorIndex = 0
        let partIndex = 0
        const parts = text.split('_')
        const charColors = []

        for (let i = 0; i < characters.length; i++) {
            if (characters[i] === '_') {
                charColors.push(partColors ? partColors[partIndex % partColors.length] : className.split(' ')[0])
                partIndex++
            } else {
                charColors.push(partColors ? partColors[partIndex % partColors.length] : className.split(' ')[0])
            }
        }

        return characters.map((char, index) => (
            <motion.span
                key={index}
                className={charColors[index]}
                animate={isHovered ? {
                    y: [0, -3, 0],
                    rotate: [0, 1, -1, 0]
                } : {}}
                transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    repeat: isHovered ? Infinity : 0,
                    repeatType: "reverse"
                }}
                style={{ display: 'inline-block' }}
            >
                {char}
            </motion.span>
        ))
    }

    return (
        <h1
            className={className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {renderText()}
        </h1>
    )
}

// Mouse Trail Effect
export const MouseTrail = () => {
    const [trail, setTrail] = useState([])

    useEffect(() => {
        const handleMouseMove = (e) => {
            setTrail((prev) => [
                ...prev.slice(-15),
                { x: e.clientX, y: e.clientY, id: Date.now() }
            ])
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {trail.map((point, index) => (
                <motion.div
                    key={point.id}
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-cyber-blue to-neon-red"
                    style={{
                        left: point.x - 6,
                        top: point.y - 6,
                    }}
                />
            ))}
        </div>
    )
}

// Glitch Text Effect
export const GlitchText = ({ text, className = '' }) => {
    return (
        <span className={`relative inline-block ${className}`}>
            <span className="relative z-10">{text}</span>
            <span
                className="absolute top-0 left-0 text-cyber-blue opacity-70 animate-pulse"
                style={{ clipPath: 'inset(45% 0 35% 0)', transform: 'translate(-2px, 0)' }}
                aria-hidden
            >
                {text}
            </span>
            <span
                className="absolute top-0 left-0 text-neon-red opacity-70 animate-pulse"
                style={{ clipPath: 'inset(25% 0 55% 0)', transform: 'translate(2px, 0)' }}
                aria-hidden
            >
                {text}
            </span>
        </span>
    )
}

// Magnetic Button Effect
export const MagneticButton = ({ children, className = '', ...props }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        setPosition({ x: x * 0.2, y: y * 0.2 })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <motion.button
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            {...props}
        >
            {children}
        </motion.button>
    )
}

// Counter Animation
export const AnimatedCounter = ({ value, duration = 2 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const target = parseInt(value) || 0
        const increment = target / (duration * 60)
        let current = 0

        const timer = setInterval(() => {
            current += increment
            if (current >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, 1000 / 60)

        return () => clearInterval(timer)
    }, [value, duration])

    return <span>{count}+</span>
}

// Reveal on Scroll
export const RevealOnScroll = ({ children, direction = 'up' }) => {
    const directions = {
        up: { y: 50, x: 0 },
        down: { y: -50, x: 0 },
        left: { y: 0, x: 50 },
        right: { y: 0, x: -50 },
    }

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}

// Floating Element
export const FloatingElement = ({ children, delay = 0, duration = 3 }) => {
    return (
        <motion.div
            animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            {children}
        </motion.div>
    )
}

// Spotlight Effect
export const SpotlightCard = ({ children, className = '' }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }

    return (
        <div
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(0, 212, 255, 0.15), transparent 60%)`,
                        }}
                    />
                )}
            </AnimatePresence>
            {children}
        </div>
    )
}

export default {
    TypingEffect,
    MouseTrail,
    GlitchText,
    MagneticButton,
    AnimatedCounter,
    RevealOnScroll,
    FloatingElement,
    SpotlightCard,
}
