import { motion } from 'framer-motion'
import { FaRocket, FaHandshake, FaTerminal, FaCode, FaHeart } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [typedText, setTypedText] = useState('')
    const fullText = '> Initializing BinaryBond...'

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index))
                index++
            } else {
                clearInterval(timer)
            }
        }, 100)
        return () => clearInterval(timer)
    }, [])

    // Matrix rain effect - Binary code
    const matrixChars = '0101001011'

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center transition-all duration-500 overflow-hidden bg-black font-mono"
        >
            {/* CRT Flicker Effect */}
            <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

            {/* Animated Scanline */}
            <motion.div
                className="absolute inset-0 pointer-events-none z-40 opacity-[0.05]"
                style={{
                    background: 'linear-gradient(transparent 0%, rgba(0, 255, 100, 0.2) 50%, transparent 100%)',
                    backgroundSize: '100% 4px'
                }}
                animate={{ backgroundPositionY: ['0%', '100%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />

            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(0, 255, 100, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 100, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }} />
            </div>

            {/* Matrix Rain Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-green-500 text-[10px] font-mono"
                        style={{ left: `${i * 7}%` }}
                        initial={{ y: -100 }}
                        animate={{ y: '100vh' }}
                        transition={{
                            duration: Math.random() * 15 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    >
                        {[...Array(30)].map((_, j) => (
                            <div key={j} className="my-1">
                                {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>

            {/* Entrance overlay for dramatic "crazy" animation */}
            <motion.div
                className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center"
                initial={{ scaleX: 0, opacity: 0, rotate: -6 }}
                animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 1, 1, 0], rotate: [-6, 8, -3, 0] }}
                transition={{ duration: 1.2, ease: 'easeInOut', times: [0, 0.35, 0.85, 1], delay: 0.08 }}
                style={{ transformOrigin: 'center' }}
            >
                <div className="w-full h-full bg-gradient-to-r from-green-500/10 via-cyan-400/6 to-pink-400/8" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' }}
                className="relative z-10 max-w-7xl mx-auto px-4 w-full"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Side - System Status */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-4 hidden lg:block space-y-6"
                    >
                        <div className="border border-green-500/20 bg-green-500/5 p-4 rounded-lg">
                            <div className="flex items-center gap-2 text-green-500 text-xs mb-4 border-b border-green-500/20 pb-2">
                                <FaTerminal size={10} /> SYSTEM_DIAGNOSTICS
                            </div>
                            <div className="space-y-2">
                                {[
                                    { label: 'CORE_ENGINE', status: 'STABLE', val: '98%' },
                                    { label: 'NEURAL_LINK', status: 'ACTIVE', val: '100%' },
                                    { label: 'DATA_STREAM', status: 'SYNCED', val: '1.2GB/s' },
                                    { label: 'SECURITY_LVL', status: 'ROOT', val: 'MAX' }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between text-[10px]">
                                        <span className="text-green-500/40">{item.label}</span>
                                        <span className="text-green-500">{item.status}</span>
                                        <span className="text-cyan-500">{item.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border border-green-500/20 bg-green-500/5 p-4 rounded-lg">
                            <div className="flex items-center gap-2 text-green-500 text-xs mb-4 border-b border-green-500/20 pb-2">
                                <FaCode size={10} /> ACTIVE_PROCESSES
                            </div>
                            <div className="space-y-1">
                                {['React_v18.exe', 'Tailwind_Engine.bin', 'Framer_Motion.lib', 'Vite_Server.sh'].map((proc, i) => (
                                    <div key={i} className="text-[10px] text-green-500/60 flex items-center gap-2">
                                        <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                                        {proc}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Center - Main Content */}
                    <motion.div
                        className="lg:col-span-8 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded text-green-500 text-[10px] uppercase tracking-widest">
                                <FaTerminal className="animate-pulse" />
                                <span>{typedText}</span>
                                <span className="animate-pulse">_</span>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.06, y: -10, rotate: 0 }}
                            transition={{ type: 'spring', stiffness: 320, damping: 14 }}
                            className="cursor-pointer"
                        >
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.8, rotate: -8, skewX: 8 }}
                                animate={{
                                    opacity: [0, 1, 1],
                                    scale: [0.8, 1.18, 1],
                                    rotate: [-8, 12, 0],
                                    skewX: [8, -6, 0],
                                    filter: ['blur(6px)', 'blur(0px)', 'blur(0px)']
                                }}
                                transition={{ duration: 1.1, ease: 'circOut', times: [0, 0.6, 1], delay: 0.18 }}
                                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tighter transition-all duration-300 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-pink-500"
                                style={{ fontFamily: 'Cambria Math, serif' }}
                            >
                                BinaryBond V1.0
                            </motion.h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-sm sm:text-base md:text-lg max-w-2x2 mb-8 sm:mb-10 leading-loose px-2 sm:px-0"
                        >
                            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent block">{"// A collaborative digital ecosystem where innovation meets execution."}</span>
                            <span className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent block">{"// Computer Science students from Adamas University, Kolkata, India."}</span>
                            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent block">{"// Architecting the future of web and AI, one line at a time."}</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0"
                        >
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-black font-bold rounded border border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all text-center"
                            >
                                [INITIALIZE_EXPLORATION]
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-green-500 font-bold rounded border border-green-500/30 hover:bg-green-500/10 transition-all text-center"
                            >
                                [ESTABLISH_LINK]
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
