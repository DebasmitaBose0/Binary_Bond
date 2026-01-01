import { motion } from 'framer-motion'
import { FaHandshake, FaEnvelope, FaUsers, FaRocket, FaLightbulb, FaCheckCircle, FaTerminal, FaHeart, FaCode } from 'react-icons/fa'

const Collaborate = () => {
    const benefits = [
        {
            icon: FaUsers,
            title: 'Expert Team',
            description: 'Work with skilled developers who bring diverse perspectives and technical expertise to every project.',
            command: './team --expertise'
        },
        {
            icon: FaRocket,
            title: 'Fast Delivery',
            description: 'Agile development process ensures quick turnaround without compromising on quality and innovation.',
            command: './deploy --fast'
        },
        {
            icon: FaLightbulb,
            title: 'Innovative Solutions',
            description: 'We combine cutting-edge technologies with creative problem-solving to deliver exceptional results.',
            command: './innovate --create'
        },
    ]

    const services = [
        { name: 'Study Focus', cmd: 'study.sh' },
        { name: 'Custom Web Applications', cmd: 'web.sh' },
        { name: 'Canva Design', cmd: 'canva.sh' },
        { name: 'AI/ML Model Training', cmd: 'ai-ml.sh' },
        { name: 'API Development', cmd: 'api.sh' },
        { name: 'Database Design', cmd: 'db.sh' },
        { name: 'UI/UX Design', cmd: 'design.sh' },
        { name: 'Quality Assurance', cmd: 'qa.sh' },
        { name: 'Technical Consulting', cmd: 'consult.sh' },
        { name: 'Frontend Development', cmd: 'frontend.sh' },
        { name: 'Backend Development', cmd: 'backend.sh' },
    ]

    return (
        <section id="collaborate" className="py-16 lg:py-24 bg-black relative overflow-hidden font-mono">
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
                        <span>$ ./init_collaboration.sh --partner-with-us</span>
                    </div>
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-green-400">PARTNER</span>
                        <span className="text-white">_WITH_US</span>
                    </motion.h1>
                    <p className="text-green-500/60 max-w-2xl mx-auto text-sm leading-relaxed">
                        {"// Establishing secure handshake... Connection ready."}
                        <br />
                        {"// Ready to bring your ideas to life? Let's build something exceptional."}
                    </p>
                </motion.div>

                {/* Interactive Collaboration Terminal */}
                <div className="relative">
                    {/* Central Terminal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-black border border-green-500/20 rounded-lg overflow-hidden mb-12"
                    >
                        <div className="bg-green-500/5 border-b border-green-500/20 px-6 py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <FaTerminal className="text-green-500" />
                                    <span className="text-green-500 font-bold text-sm uppercase tracking-widest">COLLABORATION_TERMINAL</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            {/* Command Line Interface */}
                            <div className="space-y-6">
                                <div className="font-mono text-sm">
                                    <div className="text-green-500/60 mb-2">$ collaboration --init</div>
                                    <div className="text-green-400">Initializing partnership protocols...</div>
                                    <div className="text-cyan-400">✓ Secure channel established</div>
                                    <div className="text-cyan-400">✓ Resource allocation confirmed</div>
                                    <div className="text-cyan-400">✓ Innovation pipeline active</div>
                                </div>

                                {/* Interactive Options */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                    {benefits.map((benefit, index) => (
                                        <motion.div
                                            key={benefit.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.02 }}
                                            className="group relative"
                                        >
                                            <div className="bg-green-500/5 border border-green-500/10 rounded p-6 hover:border-green-500/30 transition-all">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <motion.div
                                                        whileHover={{
                                                            scale: [1, 1.15, 1],
                                                            y: [0, -4, 0]
                                                        }}
                                                        transition={{
                                                            duration: 0.3,
                                                            ease: "easeOut",
                                                            repeat: 1,
                                                            repeatType: "reverse"
                                                        }}
                                                        className="p-2 bg-green-500/10 rounded"
                                                    >
                                                        <benefit.icon className="text-green-500 text-xl" />
                                                    </motion.div>
                                                    <h4 className="text-lg font-bold text-green-400 uppercase tracking-tight">{benefit.title}</h4>
                                                </div>
                                                <p className="text-green-500/60 text-sm leading-relaxed mb-4">
                                                    {benefit.description}
                                                </p>
                                                <div className="text-[10px] text-cyan-500/80 font-mono bg-green-500/5 border border-green-500/10 rounded px-3 py-2">
                                                    {benefit.command}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Service Commands */}
                                <div className="mt-8 p-6 bg-transparent border border-green-500/10 rounded">
                                    <h4 className="text-white font-bold mb-4 uppercase tracking-widest">AVAILABLE_COMMANDS</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                                        {services.map((service, index) => (
                                            <motion.div
                                                key={service.name}
                                                initial="rest"
                                                whileHover="hover"
                                                className="text-center p-3 md:p-4 border border-green-500/10 rounded hover:border-green-500/30 transition-all cursor-pointer min-h-[80px] md:min-h-[100px] flex flex-col justify-center"
                                            >
                                                <motion.div
                                                    variants={{ rest: { scale: 1, y: 0 }, hover: { scale: 1.25, y: -6 } }}
                                                    transition={{ duration: 0.25, ease: 'easeOut' }}
                                                    className="mb-2 flex items-center justify-center h-6 text-green-500/40 text-xl"
                                                >
                                                    <FaCode />
                                                </motion.div>
                                                <div className="text-[10px] text-green-500/60 font-mono mb-1">{service.cmd}</div>
                                                <div className="text-xs text-green-400 font-bold">{service.name}</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <motion.div initial="rest" whileHover="hover" className="inline-block bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-lg p-6 sm:p-8 mx-4 sm:mx-0">
                            <motion.a
                                href="#contact"
                                whileHover={{
                                    scale: 1.2,
                                    rotate: [0, -10, 10, 0],
                                    color: "#22c55e"
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeInOut",
                                    rotate: { duration: 0.4 }
                                }}
                                className="text-5xl sm:text-6xl text-green-500 mx-auto mb-4 sm:mb-6 flex justify-center cursor-pointer"
                            >
                                <FaHandshake />
                            </motion.a>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">READY_TO_COLLABORATE?</h3>
                            <p className="text-green-500/60 text-sm mb-4 sm:mb-6 max-w-lg mx-auto leading-relaxed">
                                Execute the partnership protocol and let's create something revolutionary together.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Collaborate
