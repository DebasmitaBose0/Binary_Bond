import { motion, AnimatePresence } from 'framer-motion'
import { FaTrophy, FaMedal, FaCertificate, FaAward, FaStar, FaTerminal, FaHeart, FaCode, FaUsers, FaGraduationCap, FaBrain, FaLock, FaLockOpen } from 'react-icons/fa'
import { useState } from 'react'

const Achievements = () => {
    const [decrypted, setDecrypted] = useState({ babin: false, debasmita: false })

    const babbinAchievements = [
        {
            title: "Research & Awards",
            icon: FaGraduationCap,
            achievements: [
                { title: "SSWC'25 Best Paper Award", position: "Winner (from ML Category)", year: "2025" },
                { title: "SSWC'25 Best Paper Certificate", position: "Recipient", year: "2025" },
                { title: "SSWC'25 Presenter Certificate", position: "Presenter", year: "2025" },
                { title: "Merit Scholarship Award (University)", position: "Recipient (3rd Place)", year: "2023" },
            ]
        },
        {
            title: "Hackathons & Competitions",
            icon: FaTrophy,
            achievements: [
                { title: "Google Solution Challenge", position: "Participant", year: "2024" },
                { title: "GDG on Campus Solution Challenge", position: "Certified", year: "2025" },
                { title: "NSHM Hackathon (Durgapur)", position: "Participation Certificate", year: "2025" },
                { title: "GDSC Cloud Campaign", position: "Participant", year: "2024" },
                { title: "Smart India Hackathon", position: "Participant", year: "2024_|_2025" },
            ]
        },
        {
            title: "Elite Certifications",
            icon: FaCertificate,
            achievements: [
                { title: "Google Gemini Certified Student", position: "Certified", year: "2025" },
                { title: "Microsoft Azure AI Fundamentals", position: "Certified", year: "2025" },
                { title: "Microsoft Generative AI / Copilot / ML", position: "Digital Trophies Earned", year: "2025" },
                { title: "Microsoft SC-900 Security Fundamentals", position: "Certified", year: "2025" },
                { title: "AWS Fundamentals of ML & AI", position: "Certified", year: "2025" },
            ]
        },
        {
            title: "AI Bootcamps",
            icon: FaBrain,
            achievements: [
                { title: "Kaggle 5-Day AI Agents Intensive", position: "Certified (with Google)", year: "2025" },
                { title: "Generative AI (Infosys Springboard)", position: "Certified", year: "2025" },
                { title: "Introduction to Deep Learning (Infosys Springboard)", position: "Certified", year: "2025" },
                { title: "Principles of Generative AI (Infosys Springboard)", position: "Certified", year: "2025" },
                { title: "Pantech e-Learning FDP on AI/ML", position: "Certified", year: "2025" },
            ]
        },
        {
            title: "Internships",
            icon: FaUsers,
            achievements: [
                { title: "Python Developer Intern (1 Month) - Codec Technologies", position: "Completed & Certified", year: "2025" },
                { title: "Internship 6.0 - ImpactSense AI Project", position: "Completed & Certified", year: "2025" },
                { title: "Python Programming Intern - Oasis Infobyte", position: "Completed & Certified", year: "2025" },
            ]
        },
        {
            title: "Badges & Trophies",
            icon: FaStar,
            achievements: [
                { title: "Google Badge - Gemini Certified Student", position: "Earned", year: "2025" },
                { title: "Microsoft Cloud & AI Bootcamp", position: "Earned (Silver | Gold | Platinum)", year: "2025" },
                { title: "Microsoft Azure AI / Copilot / ML Trophies", position: "Earned", year: "2025" },
            ]
        },
    ]

    const debasmitaAchievements = [
        {
            title: "Certifications",
            icon: FaCertificate,
            achievements: [
                { title: "Global Employability Test", position: "Certified", year: "2025" },
                { title: "Microsoft Cloud and AI Bootcamp", position: "Badges Earned", year: "2025" },
                { title: "Python Programming Fundamentals – Part 1", position: "Infosys Certified", year: "2024" },
                { title: "NASA Guest Lecture", position: "Participant", year: "2024" },
                { title: "GDSC Cloud Campaign", position: "Certified", year: "2024" },
            ]
        },
        {
            title: "Hackathons & Competitions",
            icon: FaTrophy,
            achievements: [
                { title: "Google Developer Solutions Challenge", position: "Participant", year: "2024" },
                { title: "Adinova Model Making Competition", position: "Participant", year: "2024" },
                { title: "Smart India Hackathon", position: "Participant", year: "2023" },
                { title: "Smart India Hackathon", position: "Participant", year: "2025" },

            ]
        },
    ]

    const AchievementCard = ({ category, achievements, index }) => (
        <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative h-full"
        >
            <div className="relative bg-black border border-green-500/20 rounded overflow-hidden h-full flex flex-col hover:border-green-500/50 transition-colors">
                {/* Terminal Header */}
                <div className="bg-green-500/5 border-b border-green-500/20 px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex items-center gap-2 text-green-500/80">
                        <category.icon className="text-[10px]" />
                        <span className="text-[10px] font-bold tracking-widest uppercase">{category.title}</span>
                    </div>
                </div>

                {/* Achievements List */}
                <div className="p-4 space-y-3 flex-grow">
                    {achievements.map((achievement, achIndex) => (
                        <motion.div
                            key={achievement.title}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: achIndex * 0.1 }}
                            className="flex items-center justify-between p-3 bg-green-500/5 border border-green-500/10 rounded hover:border-green-500/30 transition-all group/item"
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    whileHover={{
                                        scale: [1, 1.5, 1.2, 1],
                                        rotate: [0, 20, -20, 10, -10, 0],
                                        color: ["#00ff00", "#ffff00", "#ff8800", "#00ff00"]
                                    }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                >
                                    <FaStar className="text-green-500 text-[10px]" />
                                </motion.div>
                                <div>
                                    <h4 className="text-green-400 text-xs font-bold uppercase tracking-tight">
                                        {achievement.title}
                                    </h4>
                                    <p className="text-cyan-500/60 text-[10px] uppercase">
                                        {achievement.position}
                                    </p>
                                </div>
                            </div>
                            <span className="text-green-500/40 text-[10px] border border-green-500/20 px-2 py-0.5 rounded">
                                {achievement.year}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )

    return (
        <section id="achievements" className="py-16 lg:py-24 bg-black relative overflow-hidden font-mono">
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
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
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
                        <span>$ ./fetch_hall_of_fame.sh --filter=top_tier</span>
                    </div>
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-white">HALL</span>
                        <span className="text-green-400">_OF_FAME</span>
                    </motion.h1>
                    <p className="text-green-500/60 max-w-2xl mx-auto text-sm leading-relaxed">
                        {"// Querying achievement database... Records found."}
                        <br />
                        {"// Displaying verified technical milestones and accolades."}
                    </p>
                </motion.div>

                {/* Two Person Achievement Vaults */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Babin Achievements */}
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
                                <h3 className="text-2xl font-bold text-green-400 mb-2 tracking-tighter">BABIN_VAULT</h3>
                                <p className="text-green-500/40 text-[10px] uppercase tracking-[0.3em] mb-6">Frontend & Full Stack Milestones</p>
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
                                    [CLICK_TO_{decrypted.babin ? 'LOCK' : 'UNLOCK'}_VAULT]
                                </p>
                            </div>
                        </motion.button>
                        <AnimatePresence>
                            {decrypted.babin && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    {babbinAchievements.map((cat, idx) => (
                                        <AchievementCard key={cat.title} category={cat} achievements={cat.achievements} index={idx} />
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Debasmita Achievements */}
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
                                <h3 className="text-2xl font-bold text-green-400 mb-2 tracking-tighter">DEBASMITA_VAULT</h3>
                                <p className="text-green-500/40 text-[10px] uppercase tracking-[0.3em] mb-6">AI/ML & Backend Milestones</p>
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
                                    [CLICK_TO_{decrypted.debasmita ? 'LOCK' : 'UNLOCK'}_VAULT]
                                </p>
                            </div>
                        </motion.button>
                        <AnimatePresence>
                            {decrypted.debasmita && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    {debasmitaAchievements.map((cat, idx) => (
                                        <AchievementCard key={cat.title} category={cat} achievements={cat.achievements} index={idx} />
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Achievements
