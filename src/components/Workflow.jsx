import { motion } from 'framer-motion'
import { FaLightbulb, FaPencilRuler, FaCode, FaRocket, FaCogs, FaCheckCircle, FaTerminal, FaHeart, FaArrowRight } from 'react-icons/fa'

const Workflow = () => {
    const steps = [
        {
            icon: FaLightbulb,
            title: "Discovery",
            description: "Understanding requirements, analyzing problems, and researching optimal solutions.",
            command: "$ ./init_discovery.py",
            status: "analyzing..."
        },
        {
            icon: FaPencilRuler,
            title: "Design",
            description: "Creating wireframes, system architecture, and detailed technical specifications.",
            command: "$ ./design --blueprint",
            status: "designing..."
        },
        {
            icon: FaCode,
            title: "Development",
            description: "Writing clean, efficient code following best practices and design patterns.",
            command: "$ npm run build",
            status: "compiling..."
        },
        {
            icon: FaCogs,
            title: "Testing",
            description: "Rigorous testing including unit, integration, and performance testing.",
            command: "$ pytest --coverage",
            status: "testing..."
        },
        {
            icon: FaRocket,
            title: "Deployment",
            description: "Seamless CI/CD pipeline deployment with automated rollbacks.",
            command: "$ ./deploy.sh prod",
            status: "deploying..."
        },
        {
            icon: FaCheckCircle,
            title: "Maintenance",
            description: "Continuous monitoring, updates, and optimization for peak performance.",
            command: "$ ./monitor --realtime",
            status: "monitoring..."
        }
    ]

    return (
        <section id="workflow" className="py-16 lg:py-24 bg-black relative overflow-hidden font-mono">
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
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(0, 255, 100, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 100, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
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
                        <span>$ cat ./workflow/process.md</span>
                    </div>
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-green-400">DEVELOPMENT</span>
                        <span className="text-white">_PIPELINE</span>
                    </motion.h1>
                    <p className="text-green-500/60 max-w-2xl mx-auto text-sm leading-relaxed">
                        {"// Visualizing operational lifecycle... Pipeline active."}
                        <br />
                        {"// From initial discovery to continuous maintenance."}
                    </p>
                </motion.div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Progress Line - Hidden on mobile */}
                    <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 z-10 hidden lg:block">
                        <div className="relative h-full w-1 bg-green-500/20 rounded-full">
                            <motion.div
                                className="absolute top-0 left-0 w-full bg-gradient-to-b from-green-500 to-green-400 rounded-full"
                                initial={{ height: 0 }}
                                whileInView={{ height: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, delay: 1 }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-col">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.25, duration: 0.7 }}
                                className={`group relative mb-6 lg:mb-12 w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:ml-0 lg:mr-auto' : 'lg:mr-0 lg:ml-auto'} ${index % 2 === 0 ? 'text-left lg:text-left' : 'text-left lg:text-right'}`}
                            >
                                <div className={`relative bg-black border border-green-500/20 rounded-lg p-4 sm:p-6 hover:border-green-500/50 transition-all shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6`}>
                                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                                        <div className="p-3 sm:p-4 bg-green-500/5 border border-green-500/20 rounded group-hover:border-green-500/50 transition-colors">
                                            <motion.div
                                                whileHover={{
                                                    scale: [1, 1.2, 1],
                                                    rotate: [0, 360],
                                                    y: [0, -6, 0]
                                                }}
                                                animate={{
                                                    rotate: [0, 360]
                                                }}
                                                transition={{
                                                    hover: { duration: 0.6, ease: 'easeInOut' },
                                                    animate: { duration: 15, repeat: Infinity, ease: 'linear' }
                                                }}
                                                className="text-cyan-400 text-2xl sm:text-2xl cursor-pointer"
                                            >
                                                <step.icon />
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <div className={`flex items-center gap-2 sm:gap-4 mb-3 ${index % 2 === 0 ? 'justify-start' : 'justify-start'} flex-wrap`}>
                                            <span className="text-[10px] sm:text-[12px] text-green-500/30 font-bold">STEP_0{index + 1}</span>
                                            <h3 className="text-lg sm:text-xl font-bold text-green-400 uppercase tracking-tight">{step.title}</h3>
                                        </div>
                                        <p className="text-green-500/60 text-sm leading-relaxed mb-3 sm:mb-4">
                                            {step.description}
                                        </p>
                                        <div className={`flex items-center justify-between text-[11px] sm:text-[12px] font-mono`}>
                                            <span className="text-cyan-500/80 break-words">{step.command}</span>
                                            <motion.span
                                                animate={{ opacity: [0.4, 1] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                                className="text-green-500 ml-4"
                                            >
                                                {step.status}
                                            </motion.span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 sm:mt-20 px-4 sm:px-0"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-black font-bold rounded text-xs uppercase tracking-widest hover:bg-green-400 transition-colors"
                    >
                        <FaCode />
                        <span>[START_PROJECT_WITH_US]</span>
                        <FaArrowRight />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default Workflow
