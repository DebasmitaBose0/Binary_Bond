import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaHeart, FaTerminal } from 'react-icons/fa'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navLinks = [
        { name: 'Home', href: '#home', cmd: './home' },
        { name: 'Team', href: '#team', cmd: './team' },
        { name: 'Skills', href: '#skills', cmd: './skills' },
        { name: 'Projects', href: '#projects', cmd: './projects' },
        { name: 'Workflow', href: '#workflow', cmd: './workflow' },
        { name: 'Achievements', href: '#achievements', cmd: './achievements' },
        { name: 'Collaborate', href: '#collaborate', cmd: './collaborate' },
        { name: 'Contact', href: '#contact', cmd: './contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (!element) return

        const headerOffset = 80 // Account for fixed navbar height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = Math.max(0, Math.floor(elementPosition - headerOffset))

        // Primary smooth scroll using window.scrollTo
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })

        // After a short delay, try focusing the element (with temporary tabindex) then scrollIntoView as a strong fallback
        setTimeout(() => {
            try {
                const hadTab = element.hasAttribute('tabindex')
                const prevTab = element.getAttribute('tabindex')
                if (!hadTab) element.setAttribute('tabindex', '-1')
                element.focus({ preventScroll: true })
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                if (!hadTab) {
                    // remove temporary tabindex shortly after
                    setTimeout(() => {
                        element.removeAttribute('tabindex')
                    }, 500)
                } else if (prevTab !== null) {
                    element.setAttribute('tabindex', prevTab)
                }
            } catch (e) {
                // ignore errors in focus/scrollFallback
            }
        }, 380)

        // Final snap if still off-screen
        setTimeout(() => {
            const rect = element.getBoundingClientRect()
            const currentOffset = rect.top
            if (Math.abs(currentOffset - headerOffset) > 10) {
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
            }
        }, 900)
    }

    // Update URL hash without interrupting smooth scroll
    // Close mobile menu first, then scroll after a short delay to ensure layout stabilizes.
    // Use history.replaceState to update URL without triggering browser jump.
    const scrollToSectionAndUpdateHash = (href) => {
        const perform = () => {
            scrollToSection(href)
            try {
                history.replaceState(null, '', href)
            } catch (err) {
                try { window.location.hash = href } catch (e) { }
            }
        }

        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false)
            // wait a little longer for the menu collapse animation to finish, then perform scroll
            setTimeout(perform, 520)
        } else {
            perform()
        }
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-black/95 backdrop-blur-md border-b border-green-500/30'
                : 'bg-black/40 backdrop-blur-sm border-b border-green-500/10'
                }`}
        >
            {/* CRT Flicker Effect */}
            <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

            {/* Animated Scanline */}
            <motion.div
                className="absolute inset-0 pointer-events-none z-40 opacity-[0.03]"
                style={{
                    background: 'linear-gradient(transparent 0%, rgba(0, 255, 100, 0.2) 50%, transparent 100%)',
                    backgroundSize: '100% 4px'
                }}
                animate={{ backgroundPositionY: ['0%', '100%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => { e.preventDefault(); scrollToSectionAndUpdateHash('#home') }}
                        className="flex items-center gap-3 group"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="relative">
                            <motion.div
                                className="w-10 h-10 bg-green-500/10 border border-green-500/30 rounded flex items-center justify-center overflow-hidden"
                                whileHover={{ borderColor: "rgba(34, 197, 94, 0.6)" }}
                            >
                                <FaTerminal className="text-green-500 text-lg" />
                                <motion.div
                                    className="absolute inset-0 bg-green-500/5"
                                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white font-mono tracking-tighter">
                                BINARY_<span className="text-green-500">BOND</span>
                            </span>
                            <span className="text-[8px] text-green-500/40 font-mono uppercase tracking-[0.2em]">
                                system_V1.0
                            </span>
                        </div>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.name}
                                onClick={() => scrollToSectionAndUpdateHash(link.href)}
                                className="relative px-4 py-2 text-green-500/60 hover:text-green-400 font-mono text-[11px] uppercase tracking-widest transition-all duration-200 group"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-1 text-green-500/40">$</span>
                                {link.name}
                                <motion.span
                                    className="absolute bottom-0 left-0 w-full h-[1px] bg-green-500/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                                />
                            </motion.button>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <motion.button
                            onClick={() => { scrollToSection('#contact'); try { window.location.hash = '#sym:contact' } catch (e) { } }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 255, 100, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-6 py-2 bg-green-500/10 border border-green-500/30 rounded font-mono text-green-500 text-[11px] uppercase tracking-widest transition-all duration-200 overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <FaTerminal className="text-[10px]" />
                                ./connect.sh
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded border border-green-500/30 text-green-500 hover:bg-green-500/10 transition-colors"
                            whileHover={{ boxShadow: "0 0 15px rgba(0, 255, 100, 0.3)" }}
                        >
                            {isMobileMenuOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-black border-t border-green-500/20"
                        >
                            <div className="px-4 py-6 space-y-2">
                                {navLinks.map((link, index) => (
                                    <motion.button
                                        key={link.name}
                                        onClick={() => scrollToSectionAndUpdateHash(link.href)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="block w-full text-left px-4 py-3 text-green-500/60 hover:text-green-400 hover:bg-green-500/5 rounded font-mono text-[10px] uppercase tracking-widest transition-all"
                                    >
                                        <span className="text-green-500/30 mr-2">$</span> {link.cmd}
                                    </motion.button>
                                ))}
                                <motion.button
                                    onClick={() => {
                                        scrollToSectionAndUpdateHash('#contact')
                                        try { history.replaceState(null, '', '#sym:contact') } catch (e) { }
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 }}
                                    className="block w-full text-center px-4 py-3 bg-green-500 text-black rounded font-mono text-[10px] font-bold uppercase tracking-widest mt-4"
                                >
                                    ./connect.sh
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}

export default Navbar
