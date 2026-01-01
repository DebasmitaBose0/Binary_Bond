import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaGithub, FaLinkedin, FaTerminal, FaHeart, FaCode } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Compose mailto links to send the message individually to both emails
        try {
            const subject = encodeURIComponent(formData.subject || 'No Subject')
            const body = encodeURIComponent(`From: ${formData.name || 'Anonymous'} (${formData.email || 'no-reply'})\n\n${formData.message || ''}`)
            // Send to both recipients in a single compose window (both in To:)
            const recipients = 'babinbid05@gmail.com,dbose272@gmail.com'
            const mailtoAll = `mailto:${recipients}?subject=${subject}&body=${body}`
            window.open(mailtoAll, '_blank')

            // Keep existing UI flow (simulate submission)
            await new Promise(resolve => setTimeout(resolve, 1200))
            setIsSubmitting(false)
            setSubmitted(true)
            setFormData({ name: '', email: '', subject: '', message: '' })
            setTimeout(() => setSubmitted(false), 5000)
        } catch (err) {
            setIsSubmitting(false)
            // fallback: still show submitted briefly
            setSubmitted(true)
            setTimeout(() => setSubmitted(false), 3000)
        }
    }

    const contactInfo = [
        {
            icon: FaEnvelope,
            label: "Email",
            value: "babinbid05@gmail.com | dbose272@gmail.com",
            link: "mailto:babinbid05@gmail.com,dbose272@gmail.com"
        },
        {
            icon: FaMapMarkerAlt,
            label: "Location",
            value: "Adamas University, Kolkata",
            link: "https://maps.app.goo.gl/4u2hxVRkhdRrwuuC8"
        },
        {
            icon: FaPhone,
            label: "Phone_1 (Babin)",
            value: "+91 9123777679",
            link: "tel:+919123777679"
        },
        {
            icon: FaPhone,
            label: "Phone_2 (Debasmita)",
            value: "+91 6289415265",
            link: "tel:+916289415265"
        }
    ]

    const teamSocials = [
        {
            name: "Babin Bid",
            github: "https://github.com/KGFCH2",
            linkedin: "https://www.linkedin.com/in/babin-bid-853728293/"
        },
        {
            name: "Debasmita Bose",
            github: "https://github.com/DebasmitaBose0",
            linkedin: "https://www.linkedin.com/in/debasmita-bose-0002b329a/"
        }
    ]

    return (
        <section id="contact" className="py-16 lg:py-24 bg-black relative overflow-hidden font-mono">
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
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 lg:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded text-green-500 text-[10px] mb-6 uppercase tracking-widest">
                        <FaTerminal className="animate-pulse" />
                        <span>$ ./establish_uplink.sh --secure</span>
                    </div>
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-white">SECURE</span>
                        <span className="text-green-400">_UPLINK</span>
                    </motion.h1>
                    <p className="text-green-500/60 max-w-2xl mx-auto text-sm leading-relaxed">
                        {"// Initializing encrypted communication channel..."}
                        <br />
                        {"// Ready for data transmission. Please provide your credentials."}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative bg-black border border-green-500/20 rounded overflow-hidden">
                            {/* Terminal Header */}
                            <div className="bg-green-500/5 border-b border-green-500/20 px-4 py-2.5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500/40" />
                                    <span className="text-[10px] text-green-500/60 font-bold tracking-widest uppercase">
                                        MESSAGE_COMPOSER.exe
                                    </span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-green-500/20" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/20" />
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="p-8 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] text-green-500/40 uppercase tracking-widest mb-2">SENDER_NAME</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-green-500/[0.02] border border-green-500/20 rounded px-4 py-3 text-green-500 text-sm focus:outline-none focus:border-green-500/50 transition-colors placeholder-green-500/10"
                                            placeholder="IDENTIFY_YOURSELF"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] text-green-500/40 uppercase tracking-widest mb-2">RETURN_ADDRESS</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-green-500/[0.02] border border-green-500/20 rounded px-4 py-3 text-green-500 text-sm focus:outline-none focus:border-green-500/50 transition-colors placeholder-green-500/10"
                                            placeholder="EMAIL@DOMAIN.COM"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] text-green-500/40 uppercase tracking-widest mb-2">SUBJECT_LINE</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-green-500/[0.02] border border-green-500/20 rounded px-4 py-3 text-green-500 text-sm focus:outline-none focus:border-green-500/50 transition-colors placeholder-green-500/10"
                                        placeholder="PURPOSE_OF_CONTACT"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] text-green-500/40 uppercase tracking-widest mb-2">DATA_PAYLOAD</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-green-500/[0.02] border border-green-500/20 rounded px-4 py-3 text-green-500 text-sm focus:outline-none focus:border-green-500/50 transition-colors placeholder-green-500/10 resize-none"
                                        placeholder="ENTER_YOUR_MESSAGE_HERE..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="w-full py-4 bg-green-500 text-black font-bold text-xs uppercase tracking-[0.2em] rounded hover:bg-green-400 transition-colors disabled:opacity-50 flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                            TRANSMITTING...
                                        </>
                                    ) : submitted ? (
                                        <>
                                            <FaCode />
                                            UPLINK_SUCCESSFUL
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            EXECUTE_TRANSMISSION
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-between py-4"
                    >
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-xs font-bold text-green-500/40 tracking-[0.3em] uppercase mb-8 flex items-center gap-2">
                                    <FaCode className="text-[10px]" /> DIRECT_CHANNELS
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {contactInfo.map((info, index) => (
                                        <motion.a
                                            key={info.label}
                                            href={info.link}
                                            target={info.label === 'Location' ? '_blank' : undefined}
                                            rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                                            whileHover={{ x: 10 }}
                                            className="flex items-center gap-4 group"
                                        >
                                            <div className="w-12 h-12 flex-shrink-0 rounded border border-green-500/20 flex items-center justify-center text-green-500/40 group-hover:border-green-500/50 group-hover:text-green-500 transition-all">
                                                <motion.div
                                                    whileHover={{
                                                        scale: [1, 1.3, 1.1, 1],
                                                        rotate: [0, 25, -25, 15, -15, 0],
                                                        color: ["#00ff00", "#00ffff", "#0088ff", "#8800ff", "#00ff00"],
                                                        y: [0, -8, 4, 0]
                                                    }}
                                                    transition={{ duration: 1.0, type: "spring" }}
                                                >
                                                    <info.icon size={20} />
                                                </motion.div>
                                            </div>
                                            <div>
                                                <p className="text-[9px] text-green-500/30 uppercase tracking-widest mb-1">{info.label}</p>
                                                <p className="text-sm text-green-500/80 font-bold group-hover:text-green-400 transition-colors">{info.value}</p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs font-bold text-green-500/40 tracking-[0.3em] uppercase mb-8 flex items-center gap-2">
                                    <FaTerminal className="text-[10px]" /> SOCIAL_NODES
                                </h3>
                                <div className="flex flex-row flex-wrap gap-8 items-start">
                                    {teamSocials.map((member) => (
                                        <div key={member.name} className="flex flex-col items-start min-w-[160px]">
                                            <h4 className="text-[10px] font-bold text-green-500/60 uppercase tracking-widest">
                                                {member.name.replace(' ', '_').toUpperCase()}
                                            </h4>
                                            <div className="flex flex-row gap-4 mt-2">
                                                <motion.a
                                                    href={member.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ y: -5, color: '#6b7280' }}
                                                    className="w-12 h-12 rounded border border-green-500/20 flex items-center justify-center text-green-500/40 hover:border-green-500/50 transition-all"
                                                    title={`${member.name} - GitHub`}
                                                >
                                                    <FaGithub size={22} />
                                                </motion.a>
                                                <motion.a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ y: -5, color: '#0077b5' }}
                                                    className="w-12 h-12 rounded border border-green-500/20 flex items-center justify-center text-green-500/40 hover:border-green-500/50 transition-all"
                                                    title={`${member.name} - LinkedIn`}
                                                >
                                                    <FaLinkedin size={22} />
                                                </motion.a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-green-500/10">
                            <div className="flex items-center gap-3 text-green-500/20 mb-4">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">SYSTEM_STATUS: OPERATIONAL</span>
                            </div>
                            <p className="text-[10px] text-green-500/40 leading-relaxed uppercase tracking-widest">
                                Average response latency {"<"} 24Hrs (Indian Standard Time)
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
