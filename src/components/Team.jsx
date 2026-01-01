import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTerminal, FaHeart } from 'react-icons/fa'

const Team = () => {
    const teamMembers = [
        {
            name: 'Babin Bid',
            role: 'Full Stack Developer',
            degree: 'B.Tech CSE (3rd Year)',
            university: 'Adamas University, India',
            bio: 'Problem solver and midnight idea-generator. Loves Python; works mostly on frontend projects, researches new approaches while enjoying a cup of chai, and fixes bugs late-night.',
            image: '/Babin_Profile.jpg',
            github: 'https://github.com/KGFCH2',
            linkedin: 'https://www.linkedin.com/in/babin-bid-853728293/',
            skills: ['React', 'Vite', 'TailwindCSS', 'Framer Motion', 'Python'],
            handle: '@babin_dev',
            projects: [
                'AI Powered ChatBot',
                'CareerGo',
                'CargoConnect',
                'CropAI India',
                'Heart Disease Prediction',
                'SkyCast AI'
            ],
        },
        {
            name: 'Debasmita Bose',
            role: 'Frontend Developer',
            degree: 'B.Tech CSE (3rd Year)',
            university: 'Adamas University, India',
            bio: 'Builds logic-driven interfaces, solves problems, crafts ideas and scripts, and contributes as a junior researcher focused on frontend reliability.',
            image: '/Debasmita_Profile.png',
            github: 'https://github.com/DebasmitaBose0',
            linkedin: 'https://www.linkedin.com/in/debasmita-bose-0002b329a/',
            skills: ['JavaScript', 'React', 'CSS', 'TailwindCSS', 'Testing'],
            handle: '@debasmita_dev',
            projects: [
                'Automated Resume Parser',
                'Beauty Spot',
                'DebAI',
                'Fake News Detection'
            ],
        }
    ]

    return (
        <section id="team" className="py-16 lg:py-24 bg-black relative overflow-hidden font-mono">
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
                        <span>$ ./list_operatives.sh --active</span>
                    </div>
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-white">CORE</span>
                        <span className="text-green-400">_OPERATIVES</span>
                    </motion.h1>
                    <p className="text-green-500/60 max-w-2xl mx-auto text-sm leading-relaxed">
                        {"// Accessing personnel database... Two high-level entities identified."}
                        <br />
                        {"// Specializing in full-stack architecture and system optimization."}
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className="relative bg-black border border-green-500/20 rounded overflow-hidden hover:border-green-500/50 transition-all duration-500">
                                {/* Terminal Header */}
                                <div className="bg-green-500/5 border-b border-green-500/20 px-4 py-2 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500/40" />
                                        <span className="text-[10px] text-green-500/60 font-bold tracking-widest uppercase">
                                            PROFILE_ID: {member.handle}
                                        </span>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-green-500/20" />
                                        <div className="w-2 h-2 rounded-full bg-green-500/20" />
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        {/* Profile Image Area */}
                                        <div className="relative flex-shrink-0 mx-auto md:mx-0">
                                            <div className="w-32 h-32 rounded-full border border-green-500/30 overflow-hidden relative group-hover:border-green-500/60 transition-colors">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                                />
                                                <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay" />
                                            </div>
                                            {/* Status Indicator */}
                                            <div className="absolute -bottom-2 -right-2 bg-black border border-green-500/30 px-2 py-1 rounded flex items-center gap-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                <span className="text-[8px] text-green-500 font-bold uppercase tracking-tighter">ACTIVE</span>
                                            </div>
                                        </div>

                                        {/* Info Area */}
                                        <div className="flex-grow space-y-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white tracking-tight mb-1 uppercase">
                                                    {member.name}
                                                </h3>
                                                <p className="text-green-500 text-xs font-bold tracking-[0.2em] uppercase">
                                                    {member.role}
                                                </p>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-[10px] text-green-500/40">
                                                    <span className="text-green-500/20">DEGREE:</span>
                                                    <span className="text-green-500/60">{member.degree}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-[10px] text-green-500/40">
                                                    <span className="text-green-500/20">LOC:</span>
                                                    <a href="https://maps.app.goo.gl/4u2hxVRkhdRrwuuC8" target="_blank" rel="noopener noreferrer" className="text-green-500/60 hover:underline">{member.university}</a>
                                                </div>
                                            </div>

                                            <p className="text-green-500/60 text-xs leading-relaxed italic">
                                                {`"${member.bio}"`}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Skills & Socials */}
                                    <div className="mt-8 pt-6 border-t border-green-500/10 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <span className="text-[9px] text-green-500/30 uppercase tracking-widest block mb-3">TECHNICAL_ARSENAL</span>
                                            <div className="flex flex-wrap gap-2">
                                                {member.skills.map((skill, idx) => (
                                                    <span key={`${skill}-${idx}`} className="px-2 py-1 bg-green-500/5 border border-green-500/20 rounded text-[9px] text-green-500/60 uppercase tracking-tighter">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Projects list (badges) */}
                                            {member.projects && member.projects.length > 0 && (
                                                <div className="mt-3">
                                                    <span className="text-[9px] text-green-500/30 uppercase tracking-widest block mb-2">PROJECTS</span>
                                                    <div className="flex flex-wrap gap-2">
                                                        {member.projects.map((proj, i) => (
                                                            <span key={`proj-${i}`} className="px-2 py-1 bg-green-500/5 border border-green-500/10 rounded text-[9px] text-green-500/60">
                                                                {proj}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col justify-end items-end gap-4">
                                            <div className="flex gap-4">
                                                <motion.a
                                                    href={member.github}
                                                    whileHover={{
                                                        scale: [1, 1.4, 1.1, 1],
                                                        rotate: [0, 15, -15, 30, -30, 0],
                                                        color: "#6b7280",
                                                        y: [0, -8, 0]
                                                    }}
                                                    transition={{ duration: 1.0, type: "spring" }}
                                                    className="text-green-500/40 transition-colors"
                                                >
                                                    <FaGithub size={20} />
                                                </motion.a>
                                                <motion.a
                                                    href={member.linkedin}
                                                    whileHover={{
                                                        scale: [1, 1.5, 1.2, 1],
                                                        rotate: [0, 90, 180, 270, 360],
                                                        color: "#0077b5",
                                                        x: [0, 5, -5, 0]
                                                    }}
                                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                                    className="text-green-500/40 transition-colors"
                                                >
                                                    <FaLinkedin size={20} />
                                                </motion.a>
                                            </div>
                                            <span className="text-[9px] text-green-500/20 font-mono uppercase tracking-[0.3em]">
                                                SECURE_HANDSHAKE_READY
                                            </span>
                                        </div>
                                    </div>

                                    {/* Research line */}
                                    {member.research && (
                                        <div className="mt-4 text-[10px] text-green-500/50 italic">RESEARCH: {member.research}</div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team
