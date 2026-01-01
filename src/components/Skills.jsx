import { motion, AnimatePresence } from 'framer-motion'
import { FaCode, FaReact, FaPython, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaLinux, FaAws, FaTerminal, FaHeart, FaLock, FaLockOpen } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiTensorflow, SiPytorch } from 'react-icons/si'
import { BsShieldCheck, BsGraphUp } from 'react-icons/bs'
import { useState } from 'react'

const Skills = () => {
    const [decrypted, setDecrypted] = useState({ babin: false, debasmita: false })

    const babbinSkills = [
        {
            title: 'Programming Languages',
            icon: FaCode,
            skills: [
                { name: 'Python', icon: FaPython, level: 92 },
                { name: 'JavaScript', icon: SiJavascript, level: 88 },
                { name: 'TypeScript', icon: SiTypescript, level: 85 },
            ],
        },
        {
            title: 'Web Development',
            icon: FaReact,
            skills: [
                { name: 'React', icon: FaReact, level: 95 },
                { name: 'Node.js', icon: FaNodeJs, level: 90 },
                { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92 },
            ],
        },
        {
            title: 'Full Stack',
            icon: FaCode,
            skills: [
                { name: 'MongoDB', icon: SiMongodb, level: 88 },
                { name: 'AWS', icon: FaAws, level: 80 },
                { name: 'Docker', icon: FaDocker, level: 85 },
            ],
        },
    ]

    const debasmitaSkills = [
        {
            title: 'AI & Machine Learning',
            icon: BsGraphUp,
            skills: [
                { name: 'TensorFlow', icon: SiTensorflow, level: 90 },
                { name: 'PyTorch', icon: SiPytorch, level: 88 },
                { name: 'Data Science', icon: FaPython, level: 92 },
            ],
        },
        {
            title: 'Backend Systems',
            icon: FaNodeJs,
            skills: [
                { name: 'Node.js', icon: FaNodeJs, level: 87 },
                { name: 'PostgreSQL', icon: FaDatabase, level: 85 },
                { name: 'Redis', icon: FaDatabase, level: 82 },
            ],
        },
        {
            title: 'DevOps & Security',
            icon: BsShieldCheck,
            skills: [
                { name: 'Kubernetes', icon: FaDocker, level: 86 },
                { name: 'Security', icon: BsShieldCheck, level: 88 },
                { name: 'Linux', icon: FaLinux, level: 89 },
            ],
        },
    ]

    const SkillCard = ({ person, skills, isDecrypted }) => (
        <div className="space-y-6">
            {/* Encryption Banner */}
            <motion.div
                className="relative"
                animate={{ scale: isDecrypted ? 1 : 0.98, opacity: isDecrypted ? 1 : 0.8 }}
                transition={{ duration: 0.4 }}
            >
                <div className={`border rounded p-4 font-mono ${isDecrypted
                    ? 'border-green-500 bg-green-500/5 shadow-[0_0_15px_rgba(34,197,94,0.1)]'
                    : 'border-red-500/40 bg-red-500/5'
                    }`}>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            {isDecrypted ? <FaLockOpen className="text-green-400 text-sm" /> : <FaLock className="text-red-400 text-sm" />}
                            <span className={`text-[10px] tracking-widest ${isDecrypted ? 'text-green-400' : 'text-red-400'}`}>
                                {isDecrypted ? 'ACCESS_GRANTED' : 'ACCESS_RESTRICTED'}
                            </span>
                        </div>
                        <motion.span
                            className="text-[10px]"
                            animate={{ opacity: [0.4, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            style={{ color: isDecrypted ? '#4ade80' : '#f87171' }}
                        >
                            {isDecrypted ? '✓ SECURE' : '⚠ ENCRYPTED'}
                        </motion.span>
                    </div>
                    <p className="text-[10px] text-white/40 uppercase">
                        Node: {person.toUpperCase()}_ARSENAL_V1.0
                    </p>
                </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
                key={`${person}-skills`}
                initial={false}
                animate={isDecrypted ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, height: 'auto' },
                    hidden: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 gap-4 overflow-hidden"
            >
                {skills.map((category, catIndex) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: catIndex * 0.1 }}
                        className="group relative"
                    >
                        <div className="relative bg-black border border-green-500/20 rounded p-4 hover:border-green-500/50 transition-colors">
                            <div className="flex items-center gap-3 mb-4 border-b border-green-500/10 pb-2">
                                <motion.div
                                    whileHover={{
                                        scale: [1, 1.4, 1.1, 1],
                                        rotate: [0, 180, 360, 180, 0],
                                        color: ["#00ff00", "#0088ff", "#ff0088", "#ffff00", "#00ff00"]
                                    }}
                                    transition={{ duration: 1.0, ease: "easeInOut" }}
                                >
                                    <category.icon className="text-green-500 text-xs" />
                                </motion.div>
                                <h4 className="text-xs font-bold text-green-400 uppercase tracking-wider">{category.title}</h4>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {category.skills.map((skill, idx) => (
                                    <div key={skill.name} className="space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <motion.div
                                                    whileHover={{
                                                        scale: [1, 1.5, 1.2, 1],
                                                        rotate: [0, 15, -15, 30, -30, 0],
                                                        y: [0, -8, 4, 0]
                                                    }}
                                                    transition={{ duration: 0.8, type: "spring" }}
                                                >
                                                    <skill.icon className="text-cyan-500 text-[10px]" />
                                                </motion.div>
                                                <span className="text-green-500/80 text-[10px] uppercase">{skill.name}</span>
                                            </div>
                                            <span className="text-green-500 text-[10px]">{skill.level}%</span>
                                        </div>
                                        <div className="h-1 bg-green-900/20 rounded-full overflow-hidden border border-green-500/10">
                                            <motion.div
                                                className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )

    return (
        <section id="skills" className="py-16 lg:py-24 bg-black relative overflow-hidden font-mono">
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
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(0, 255, 100, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 100, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded text-green-500 text-[10px] mb-6 uppercase tracking-widest animate-pulse">
                        <FaTerminal />
                        <span>$ ./decrypt_arsenal.sh --access-level=root</span>
                    </div>
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-green-400">ENCRYPTED</span>
                        <span className="text-white">_ARSENAL</span>
                    </motion.h1>
                    <p className="text-green-500/60 max-w-2xl mx-auto text-sm leading-relaxed">
                        {"// Analyzing skill vectors... Multiple high-level proficiencies detected."}
                        <br />
                        {"// Toggle encryption keys to reveal technical specifications."}
                    </p>
                </motion.div>

                {/* Two Person Slots */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Babin Bid Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.button
                            onClick={() => setDecrypted({ ...decrypted, babin: !decrypted.babin })}
                            whileHover={{ scale: 1.01 }}
                            className="w-full relative group"
                        >
                            <div className={`relative bg-black border rounded-lg p-8 text-center transition-all duration-500 ${decrypted.babin ? 'border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.2)]' : 'border-green-500/20 hover:border-green-500/40'}`}>
                                <h3 className="text-2xl font-bold text-green-400 mb-2 tracking-tighter">BABIN_BID</h3>
                                <p className="text-green-500/40 text-[10px] uppercase tracking-[0.3em] mb-6">Frontend & Full Stack Architect</p>
                                <div className="flex justify-center">
                                    <motion.div
                                        animate={{
                                            rotate: decrypted.babin ? 0 : [0, 10, -10, 0],
                                            scale: decrypted.babin ? 1.2 : 1
                                        }}
                                        transition={{ duration: 0.5, repeat: decrypted.babin ? 0 : Infinity, repeatDelay: 3 }}
                                        className={`text-4xl ${decrypted.babin ? 'text-green-400' : 'text-green-500/20'}`}
                                    >
                                        {decrypted.babin ? '🔓' : '🔐'}
                                    </motion.div>
                                </div>
                                <p className="text-[10px] text-green-500/60 mt-6 uppercase tracking-widest">
                                    [CLICK_TO_{decrypted.babin ? 'LOCK' : 'UNLOCK'}_DATA]
                                </p>
                            </div>
                        </motion.button>
                        <SkillCard person="babin" skills={babbinSkills} isDecrypted={decrypted.babin} />
                    </motion.div>

                    {/* Debasmita Bose Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.button
                            onClick={() => setDecrypted({ ...decrypted, debasmita: !decrypted.debasmita })}
                            whileHover={{ scale: 1.01 }}
                            className="w-full relative group"
                        >
                            <div className={`relative bg-black border rounded-lg p-8 text-center transition-all duration-500 ${decrypted.debasmita ? 'border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.2)]' : 'border-green-500/20 hover:border-green-500/40'}`}>
                                <h3 className="text-2xl font-bold text-green-400 mb-2 tracking-tighter">DEBASMITA_BOSE</h3>
                                <p className="text-green-500/40 text-[10px] uppercase tracking-[0.3em] mb-6">AI/ML & Backend Systems Engineer</p>
                                <div className="flex justify-center">
                                    <motion.div
                                        animate={{
                                            rotate: decrypted.debasmita ? 0 : [0, -10, 10, 0],
                                            scale: decrypted.debasmita ? 1.2 : 1
                                        }}
                                        transition={{ duration: 0.5, repeat: decrypted.debasmita ? 0 : Infinity, repeatDelay: 3 }}
                                        className={`text-4xl ${decrypted.debasmita ? 'text-green-400' : 'text-green-500/20'}`}
                                    >
                                        {decrypted.debasmita ? '🔓' : '🔐'}
                                    </motion.div>
                                </div>
                                <p className="text-[10px] text-green-500/60 mt-6 uppercase tracking-widest">
                                    [CLICK_TO_{decrypted.debasmita ? 'LOCK' : 'UNLOCK'}_DATA]
                                </p>
                            </div>
                        </motion.button>
                        <SkillCard person="debasmita" skills={debasmitaSkills} isDecrypted={decrypted.debasmita} />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


export default Skills
