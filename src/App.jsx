import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Workflow from './components/Workflow'
import Achievements from './components/Achievements'
import Collaborate from './components/Collaborate'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'

function App() {
    const [loading, setLoading] = useState(true)
    const [showEntry, setShowEntry] = useState(false)
    const [loadingText, setLoadingText] = useState('')
    const [loadingProgress, setLoadingProgress] = useState(0)

    const hackingLines = [
        '',
        '',
        '> Accessing secured network...',
        '> ████████ ENCRYPTED ████████',
        '> Decrypting payload...',
        '> WARNING: Unknown entity detected',
        '> Analyzing threat level... SAFE',
        '> Something is awakening...',
        '> ▓▓▓▓▓▓▓▓ INCOMING ▓▓▓▓▓▓▓▓',
        '> Brace yourself...'
    ]

    useEffect(() => {
        let lineIndex = 0
        let charIndex = 0
        let currentText = ''
        let typedChars = 0
        const totalChars = hackingLines.join('').length || 1

        const typeInterval = setInterval(() => {
            if (lineIndex < hackingLines.length) {
                const line = hackingLines[lineIndex]
                if (charIndex < line.length) {
                    currentText += line[charIndex]
                    typedChars++
                    setLoadingText(currentText)
                    setLoadingProgress(Math.min(100, Math.round((typedChars / totalChars) * 100)))
                    charIndex++
                } else {
                    currentText += '\n'
                    lineIndex++
                    charIndex = 0
                }
            } else {
                clearInterval(typeInterval)
                setLoadingProgress(100)
                setTimeout(() => {
                    setLoading(false)
                    // trigger short "hacker-style" entry reveal
                    setShowEntry(true)
                    setTimeout(() => setShowEntry(false), 900)
                }, 700)
            }
        }, 30)

        return () => clearInterval(typeInterval)
    }, [])

    return (
        <ThemeProvider>
            {loading ? (
                <Loader loadingText={loadingText} loadingProgress={loadingProgress} />
            ) : (
                <>
                    {/* Hacker-style entry reveal overlay */}
                    {showEntry && (
                        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center pointer-events-none">
                            <div className="text-center text-green-400 font-mono text-3xl sm:text-5xl opacity-95 animate-pulse">
                                <div>ACCESS GRANTED</div>
                                <div className="text-sm mt-2 text-green-300">Initializing secure shell...</div>
                            </div>
                            <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(0deg,#000, #000 2px, rgba(0,255,0,0.03) 3px, rgba(0,255,0,0.03) 4px)]" />
                        </div>
                    )}

                    <div className="min-h-screen bg-black relative z-0">
                        <Navbar />
                        <Hero />
                        <Team />
                        <Skills />
                        <Projects />
                        <Workflow />
                        <Achievements />
                        <Collaborate />
                        <Contact />
                        <Footer />
                    </div>
                </>
            )}
        </ThemeProvider>
    )
}

export default App
