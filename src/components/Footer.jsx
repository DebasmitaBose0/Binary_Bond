import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHeart, FaCode, FaTerminal, FaArrowUp, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Team', href: '#team' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Workflow', href: '#workflow' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Contact', href: '#contact' }
    ]

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const [modalOpen, setModalOpen] = useState(false)
    const [modalKey, setModalKey] = useState('')

    const legalContent = {
        privacy: {
            title: 'PRIVACY_POLICY.EXE',
            body: `Last updated: December 31, 2025

BinaryBond ("we", "our", "us") takes privacy and security seriously. This Privacy Policy explains how we collect, use, store, and protect information you voluntarily provide or which is collected automatically when you visit this site.

1) Scope & Sensitive Data
- The Site is a public portfolio and does not request, collect, or store Sensitive Personal Data (e.g., government IDs, financial account numbers, or health data). Do not submit sensitive personal information through contact forms or comments.

2) Information We Collect
- Contact data you provide directly (name, email, message) when you contact the team.
- Technical data collected automatically (IP address, browser, device, referrer, and timestamps) for analytics, debugging and security monitoring.

3) Purpose & Use
- We use contact information to respond to messages and inquiries only.
- Technical data is used to monitor site health, detect abuse, and improve performance/security.
- We do not sell or trade personal information.

4) Data Retention & Minimization
- We retain contact messages for as long as necessary to respond and for legitimate business purposes, and we minimize collection to what is required to operate the Site.

5) Security Measures
- We employ industry-standard safeguards (HTTPS, access controls, dependency updates). However, no system is infallible. If you discover a security issue, contact us immediately at babinbid05@gmail.com (cc dbose272@gmail.com) and include details to reproduce the issue.

6) Intellectual Property & Copying
- The Site's code, assets, and content are the property of BinaryBond unless otherwise noted. This repository is published for demonstration; reuse of assets, duplication, or republication without explicit written permission is prohibited. If you wish to reuse code or content, contact the authors for licensing terms.

7) Third Parties
- We may use third-party services (hosting, analytics). These services have their own privacy practices; we recommend reviewing their policies.

8) Contact
- Questions or requests about your data or privacy: babinbid05@gmail.com and dbose272@gmail.com.`
        },
        terms: {
            title: 'TERMS_OF_SERVICE.EXE',
            body: `Effective date: December 31, 2025

Welcome to BinaryBond. By using this Site you agree to these Terms of Service. If you do not agree, do not use the Site.

1) Use & Restrictions
- Use the Site only for lawful, non-commercial, and non-harmful purposes.
- You must not attempt unauthorized access, interference, or disruption of Site operations or infrastructure.

2) Content Ownership & License
- All content (text, images, code, media) is owned by BinaryBond or licensed to BinaryBond. The public repository is for review and demonstration. You are not permitted to copy, redistribute, or republish content without express written consent.

3) Contributions
- Any contributions (pull requests, patches) submitted may be accepted with the understanding that you grant BinaryBond a non-exclusive license to use them as part of the project.

4) Security & Reporting
- If you discover a vulnerability, do NOT exploit it. Report it immediately to babinbid05@gmail.com (cc: dbose272@gmail.com) with reproduction steps. We will acknowledge and coordinate remediation.

5) Disclaimers & Limitation of Liability
- The Site is provided "as is" without warranties. BinaryBond is not liable for damages arising from use of the Site to the maximum extent permitted by law.

6) Governing Law
- These Terms are governed by the applicable laws where the project maintainers reside. Contact the team for jurisdictional details.

Contact: babinbid05@gmail.com and dbose272@gmail.com.`
        },
        faqs: {
            title: 'FAQS.EXE',
            body: `Last updated: December 31, 2025

Q: What is BinaryBond?
A: BinaryBond is a public portfolio and demonstration site created by Computer Science students at Adamas University. It showcases projects, skills, and achievements.

Q: Can I copy code or assets from this site?
A: Not without permission. The repository is provided for review and learning; copying, redistributing, or republishing code or assets without prior written consent is prohibited.

Q: How do I report a security issue?
A: Email a clear, reproducible report to babinbid05@gmail.com (cc dbose272@gmail.com). Do not publicly disclose vulnerabilities before the team can address them.

Q: What personal data does the site store?
A: Only contact messages you voluntarily send and minimal technical logs. Do not submit sensitive personal data via contact forms.

Q: Who do I contact for reuse or licensing?
A: Contact babinbid05@gmail.com and dbose272@gmail.com to request permission or licensing information.`
        }
    }

    const openLegal = (key) => {
        setModalKey(key)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
        setModalKey('')
    }

    const renderLegalBody = (key) => {
        const raw = legalContent[key]?.body || ''
        const emailRegex = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g
        return raw.split('\n').map((line, i) => {
            const cls = i % 3 === 0 ? 'text-white' : i % 3 === 1 ? 'text-green-500' : 'text-green-100'
            // split line by emails and render mailto links
            const parts = line.split(emailRegex).filter(Boolean)
            return (
                <div key={i} className={`${cls} text-sm leading-relaxed`}>
                    {parts.map((part, idx) => (
                        emailRegex.test(part) ? (
                            <a key={idx} href={`mailto:${part}`} className="text-green-300 hover:underline">
                                {part}
                            </a>
                        ) : (
                            <span key={idx}>{part}</span>
                        )
                    ))}
                </div>
            )
        })
    }

    return (
        <footer className="bg-black relative overflow-hidden font-mono py-20 border-t border-green-500/20">
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

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(0, 255, 100, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 100, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-6">
                            <div className="w-10 h-10 bg-green-500/10 border border-green-500/30 rounded flex items-center justify-center flex-shrink-0">
                                <FaTerminal className="text-white hover:text-green-500 transition-colors" />
                            </div>
                            <span className="text-xl sm:text-2xl font-bold text-white tracking-tighter text-center sm:text-left">
                                BinaryBond V1.0
                            </span>
                        </div>
                        <p className="text-green-500/60 text-xs leading-relaxed max-w-sm mb-8">
                            {"// ARCHITECTING DIGITAL FRONTIERS"}
                            <br />
                            {"// A SYNERGY OF CODE, DESIGN, AND INNOVATION"}
                            <br />
                            {"// BASED AT ADAMAS UNIVERSITY"}
                            <br />
                            {"// CRAFTING TOMORROW'S SOLUTIONS TODAY"}
                            <br />
                            {"// WHERE VISION MEETS EXECUTION"}
                            <br />
                            {"// INNOVATION THROUGH COLLABORATION"}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-green-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">./navigation</h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-green-500/40 hover:text-green-400 text-[10px] uppercase tracking-widest transition-colors flex items-center gap-2"
                                    >
                                        <span className="text-green-500/20">{">"}</span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* System Info */}
                    <div>
                        <h4 className="text-green-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">./system_info</h4>
                        <div className="space-y-4">
                            <div className="p-3 bg-green-500/5 border border-green-500/10 rounded">
                                <div className="flex justify-between text-[9px] mb-1">
                                    <span className="text-green-500/30 uppercase">Status</span>
                                    <span className="text-green-500 animate-pulse">OPERATIONAL</span>
                                </div>
                                <div className="flex justify-between text-[9px]">
                                    <span className="text-green-500/30 uppercase">Version</span>
                                    <span className="text-green-500">1.0-STABLE</span>
                                </div>
                            </div>
                            <button
                                onClick={scrollToTop}
                                className="w-full py-2 border border-green-500/20 text-white hover:text-green-500 hover:border-green-500/50 text-[9px] uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                            >
                                <FaArrowUp size={10} className="text-white hover:text-green-500 transition-colors" />
                                RETURN_TO_TOP
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-green-500/10 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-green-500/20 text-[9px] uppercase tracking-[0.2em]">
                        © {currentYear} BINARYBOND_SYSTEMS. ALL_RIGHTS_RESERVED.
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-4">
                        <div className="flex items-center gap-2 text-green-500/20 text-[9px] uppercase tracking-[0.2em]">
                            <span>ENCRYPTED_CONNECTION</span>
                            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                            <button onClick={() => openLegal('privacy')} className="text-white hover:text-green-500 active:text-green-100 text-[11px] uppercase tracking-wider transition-colors">[PRIVACY_POLICY]</button>
                            <button onClick={() => openLegal('terms')} className="text-white hover:text-green-500 active:text-green-100 text-[11px] uppercase tracking-wider transition-colors">[TERMS_OF_SERVICE]</button>
                            <button onClick={() => openLegal('faqs')} className="text-white hover:text-green-500 active:text-green-100 text-[11px] uppercase tracking-wider transition-colors">[FAQS]</button>
                        </div>
                    </div>
                </div>
            </div>
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div onClick={closeModal} className="absolute inset-0 bg-black/80" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative max-w-4xl w-full mx-4 bg-black border border-green-500/30 rounded-lg p-6 z-60 font-mono"
                    >
                        <button onClick={closeModal} className="absolute right-3 top-3 text-green-100 hover:text-white transition-colors">
                            <FaTimes size={16} className="text-green-100 hover:text-white transition-colors" />
                        </button>
                        <div className="mb-4 flex items-center gap-2">
                            <FaTerminal className="text-green-500" />
                            <h2 className="text-lg font-semibold text-green-500 hover:text-green-100 transition-colors uppercase tracking-wider">{legalContent[modalKey]?.title}</h2>
                        </div>
                        <div className="max-h-96 overflow-y-auto space-y-1">
                            {renderLegalBody(modalKey)}
                        </div>
                        <div className="mt-4 text-right">
                            <button onClick={closeModal} className="px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-100 hover:bg-green-500/20 transition-colors text-xs uppercase tracking-wider">
                                [CLOSE]
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </footer>
    )
}

export default Footer
