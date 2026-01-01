import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaTerminal, FaRocket, FaLayerGroup, FaChevronRight, FaTimes, FaLock, FaMicrochip } from 'react-icons/fa'
import { useState, useMemo } from 'react'

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedDebasmitaCategory, setSelectedDebasmitaCategory] = useState('all')
    const [selectedBabbinProject, setSelectedBabbinProject] = useState(null)
    const [selectedDebasmitaProject, setSelectedDebasmitaProject] = useState(null)

    const babbinProjects = useMemo(() => [
        {
            title: "AI Powered ChatBot",
            description: "FastAPI-based chatbot with Gemini integration and streaming responses.",
            fullDescription: "AI chatbot with Gemini integration, optional DuckDuckGo web-search context, light/dark theme support, and polished UI with micro-interactions.",
            tech: ["Python", "FastAPI", "JavaScript", "Gemini API"],
            category: "ai",
            domain: "Conversational AI",
            github: "https://github.com/KGFCH2/AI_Powered_ChatBot",
            status: "completed",
            image: "/AI_Powered_ChatBot.png",
            stats: { responses: "Streaming", modes: "Dark & Light" },
            accent: "from-green-500 to-cyan-400"
        },
        {
            title: "CareerGo",
            description: "AI-driven career guidance platform with intelligent chat assistant and skill-based matching across 700+ career paths.",
            fullDescription: "Analyzes user skills to provide personalized career recommendations with real-time AI chat assistance, curated learning resources, and secure authentication.",
            tech: ["Python", "Flask", "JavaScript", "Groq API"],
            category: "ai",
            domain: "EdTech",
            github: "https://github.com/KGFCH2/Career_Go",
            status: "completed",
            image: "/Career_Go.png",
            stats: { features: "8+", models: "LLaMA" },
            accent: "from-green-500 to-emerald-400"
        },
        {
            title: "CargoConnect",
            description: "Responsive web app for booking vehicles for transporting luggage and cargo. Features vehicle selection, fare estimation, and mobile-first responsive UI.",
            fullDescription: "CargoConnect simplifies logistics by offering vehicle selection, address input, and transparent fare estimation through an intuitive UI. Supports Mini Tempo, Large Tempo, and Cargo Truck options.",
            tech: ["TypeScript", "React", "Vite", "Tailwind CSS"],
            category: "fullstack",
            domain: "Logistics",
            github: "https://github.com/KGFCH2/CargoConnect",
            live: "https://cargo-connect-two.vercel.app/",
            status: "completed",
            image: "/CargoConnect.png",
            stats: { users: "500+", launch: "2024" },
            accent: "from-cyan-500 to-blue-400"
        },
        {
            title: "CropAI India",
            description: "AI-ready agricultural intelligence platform with crop analytics and market insights.",
            fullDescription: "AI-ready agritech platform providing pan-India crop analytics, market intelligence, and scalable architecture for ML integrations.",
            tech: ["React", "TypeScript", "Vite", "JSON"],
            category: "fullstack",
            domain: "AgriTech",
            github: "https://github.com/KGFCH2/CropAI_India",
            live: "https://crop-ai-india.vercel.app/",
            status: "completed",
            image: "/CropAI.png",
            stats: { regions: "Pan-India", crops: "500+" },
            accent: "from-green-500 to-emerald-400"
        },
        {
            title: "Heart Disease Prediction",
            description: "Production-ready ML system using XGBoost for heart disease risk prediction with 78.65% accuracy.",
            fullDescription: "XGBoost-based prediction model for heart disease risk with 78.65% accuracy, 0.34ms prediction speed, and GUI interface.",
            tech: ["Python", "XGBoost", "scikit-learn"],
            category: "ml",
            domain: "Healthcare AI",
            github: "https://github.com/KGFCH2/Heart_Disease_Prediction_System",
            status: "completed",
            image: "/Heart_Disease_Prediction_System.png",
            stats: { accuracy: "78.65%", speed: "0.34ms" },
            accent: "from-green-500 to-cyan-400"
        },
        {
            title: "SkyCast AI",
            description: "Intelligent real-time weather dashboard with live data, interactive forecasts, and AI-driven insights.",
            fullDescription: "Provides live weather data, interactive Plotly charts, auto-location detection, and AI-driven alerts with multi-provider API support.",
            tech: ["Python", "Streamlit", "Plotly", "AI/ML"],
            category: "ai",
            domain: "Weather Intelligence",
            github: "https://github.com/KGFCH2/SkyCast_AI",
            live: "https://sky-cast-ai-new.streamlit.app/",
            status: "completed",
            image: "/SkyCast_AI.png",
            stats: { updates: "Real-time", accuracy: "95%+" },
            accent: "from-cyan-500 to-blue-400"
        },
    ].sort((a, b) => a.title.localeCompare(b.title)), [])


    const debasmitaProjects = useMemo(() => [
        {
            title: "Automated Resume Parser",
            description: "AI-powered system extracting human-readable structured data from resumes with extensible skill dictionaries.",
            fullDescription: "Human-readable structured output for resumes including names, contacts, skills, experience, and education. Features extensible skill dictionaries, pattern-based extractors, and is lightweight and easy to run locally or in a container.",
            tech: ["Python", "spaCy", "PDF Processing", "PostgreSQL", "Bootstrap", "REST API"],
            category: "fullstack",
            domain: "Career Tech",
            github: "https://github.com/DebasmitaBose0/Automated-Resume-Parser",
            status: "completed",
            image: "/Automated_Resume_Parser.png",
            stats: { extraction: "AI-powered", storage: "PostgreSQL", interface: "Web UI" },
            accent: "from-green-500 to-emerald-400"
        },
        {
            title: "Beauty Spot",
            description: "Modern, elegant beauty and makeup e-commerce website featuring product showcases, tutorials, and customer reviews.",
            fullDescription: "A modern, elegant beauty and makeup e-commerce website featuring product showcases, video tutorials, and customer reviews with responsive design and interactive functionality.",
            tech: ["HTML5", "CSS3", "JavaScript", "Font Awesome 5.15.4", "YouTube Embed API"],
            category: "frontend",
            domain: "E-Commerce",
            github: "https://github.com/DebasmitaBose0/BeautySpot",
            live: "https://beautyspot-beta.vercel.app/",
            status: "completed",
            image: "/Beauty_Spot.png",
            stats: { layouts: "Grid & Flexbox", animations: "Advanced", responsiveness: "Mobile-first" },
            accent: "from-green-500 to-cyan-400"
        },
        {
            title: "DebAI",
            description: "Lightweight, cyberpunk-styled Streamlit chat assistant with OCR capabilities for images and PDFs.",
            fullDescription: "DebAI is a lightweight, cyberpunk-styled Streamlit chat assistant that extracts text from images and PDFs using OCR and chats using an Ollama-backed model. Built for fast testing and local experimentation.",
            tech: ["Python", "Streamlit", "Ollama", "OCR", "Local LLMs"],
            category: "ai",
            domain: "Conversational AI",
            github: "https://github.com/DebasmitaBose0/DebAI",
            status: "in-progress",
            image: "/DebAI.png",
            stats: { framework: "Streamlit", style: "Cyberpunk", mode: "Local" },
            accent: "from-green-500 to-emerald-400"
        },
        {
            title: "Fake News Detection",
            description: "AI-driven web application detecting and analyzing fake or misleading news in Indian context.",
            fullDescription: "Fake News Verifier is an AI-driven web application built using Streamlit and Google Gemini AI, designed to detect and analyze fake or misleading news in the Indian context. Intelligently evaluates news articles, gives verification confidence, and recommends trusted Indian sources.",
            tech: ["Python", "Streamlit", "Google Gemini AI", "BeautifulSoup", "Python Dotenv"],
            category: "ai",
            domain: "Social Good",
            github: "https://github.com/DebasmitaBose0/Fake-News-Detection",
            status: "completed",
            image: "/Fake_News_Detection.png",
            stats: { ai: "Gemini AI", focus: "Indian News", feature: "Verification" },
            accent: "from-cyan-500 to-blue-400"
        },
    ].sort((a, b) => a.title.localeCompare(b.title)), [])

    const categories = ['all', ...new Set(babbinProjects.map(p => p.category))]
    const debasmitaCategories = ['all', ...new Set(debasmitaProjects.map(p => p.category))]

    const filteredBabbinProjects = selectedCategory === 'all'
        ? babbinProjects
        : babbinProjects.filter(p => p.category === selectedCategory)

    const filteredDebasmitaProjects = selectedDebasmitaCategory === 'all'
        ? debasmitaProjects
        : debasmitaProjects.filter(p => p.category === selectedDebasmitaCategory)

    const ProjectCard = ({ project, onClick, isSelected }) => (
        <motion.div
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: 5 }}
            onClick={onClick}
            className={`relative group cursor-pointer p-4 rounded border font-mono transition-all duration-300 ${isSelected
                ? 'bg-green-500/10 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.15)]'
                : 'bg-black/40 hover:bg-green-500/5 border-green-500/20 hover:border-green-500/40'
                }`}
        >
            <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded border border-green-500/20 overflow-hidden bg-black shrink-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-green-500/5 mix-blend-overlay" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-xs truncate tracking-tight ${isSelected ? 'text-green-400' : 'text-green-500/60'} group-hover:text-green-400 transition-colors`}>
                        <span className="text-green-500/30 mr-1">$</span>{project.title.toUpperCase()}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[8px] px-1.5 py-0.5 rounded bg-green-500/5 text-green-500/40 border border-green-500/10 uppercase tracking-tighter">
                            {project.category}
                        </span>
                        {project.status === 'in-progress' && (
                            <span className="flex items-center gap-1 text-[8px] text-yellow-500/60 uppercase tracking-tighter">
                                <div className="w-1 h-1 rounded-full bg-yellow-500 animate-pulse" />
                                DEV
                            </span>
                        )}
                    </div>
                </div>
                <div className={`text-[10px] font-bold ${isSelected ? 'text-green-400' : 'text-green-500/20'} group-hover:text-green-500 transition-colors`}>
                    {isSelected ? '[ACTIVE]' : '[READ]'}
                </div>
            </div>
        </motion.div>
    )

    const DetailedProjectView = ({ project, onClose }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="sticky top-24 bg-black border border-green-500/30 rounded overflow-hidden shadow-[0_0_40px_rgba(0,255,100,0.05)] font-mono"
        >
            {/* Terminal Header */}
            <div className="bg-green-500/5 border-b border-green-500/20 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-green-500/20" />
                        <div className="w-2 h-2 rounded-full bg-green-500/20" />
                    </div>
                    <span className="text-[10px] text-green-500/60 font-bold tracking-widest uppercase">
                        FILE_INSPECTOR: {project.title.replace(/\s+/g, '_')}.dat
                    </span>
                </div>
                <button
                    onClick={onClose}
                    className="text-green-500/40 hover:text-green-400 transition-colors p-1"
                >
                    <FaTimes size={12} />
                </button>
            </div>

            <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8 mb-10">
                    <div className="relative w-full md:w-48 h-48 rounded border border-green-500/20 overflow-hidden bg-black shrink-0 group">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                        />
                        <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
                    </div>

                    <div className="flex-1 space-y-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2 tracking-tighter uppercase">
                                    {project.title}
                                </h2>
                                <div className="flex items-center gap-3">
                                    <span className="text-green-500 text-[10px] font-bold tracking-widest uppercase">
                                        {project.domain}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-green-500/30" />
                                    <span className="text-green-500/40 text-[10px] uppercase tracking-widest">
                                        STATUS: {project.status.toUpperCase()}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        scale: [1, 1.3, 1.1, 1],
                                        rotate: [0, -10, 10, -5, 5, 0],
                                        color: "#6b7280"
                                    }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="p-2.5 bg-green-500/5 hover:bg-green-500/10 rounded border border-green-500/20 text-green-500 transition-all"
                                    title="View Source"
                                >
                                    <FaGithub size={18} />
                                </motion.a>
                                {project.live && (
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{
                                            scale: [1, 1.4, 1.2, 1],
                                            rotate: [0, 180, 360, 180, 0],
                                            color: ["#00ffff", "#0088ff", "#8800ff", "#ff0088", "#00ffff"]
                                        }}
                                        transition={{ duration: 1.2, ease: "easeInOut" }}
                                        className="p-2.5 bg-green-500/5 hover:bg-green-500/10 rounded border border-green-500/20 text-green-500 transition-all"
                                        title="Live Demo"
                                    >
                                        <FaExternalLinkAlt size={16} />
                                    </motion.a>
                                )}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-green-500/20" />
                            <p className="text-green-500/70 text-sm leading-relaxed italic">
                                {`"${project.fullDescription}"`}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {project.stats && Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="bg-green-500/[0.02] border border-green-500/10 rounded p-4 group hover:border-green-500/30 transition-colors">
                            <p className="text-[9px] text-green-500/30 uppercase tracking-widest mb-2">{key}</p>
                            <p className="text-green-500 text-xs font-bold tracking-tight">{value}</p>
                        </div>
                    ))}
                </div>

                <div className="pt-6 border-t border-green-500/10">
                    <h4 className="text-[10px] font-bold text-green-500/30 uppercase tracking-[0.3em] mb-5 flex items-center gap-2">
                        <FaCode className="text-green-500/20" /> SYSTEM_DEPENDENCIES
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 bg-green-500/5 border border-green-500/10 rounded text-[10px] text-green-500/60 uppercase tracking-tighter hover:border-green-500/40 hover:text-green-400 transition-all cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* CRT Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%]" />
        </motion.div>
    )

    return (
        <section id="projects" className="py-16 lg:py-24 bg-black relative overflow-hidden font-mono">
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
                        <span>$ ./access_vault.sh --all-nodes</span>
                    </div>
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-white">PROJECT</span>
                        <span className="text-green-400">_REPOSITORY</span>
                    </motion.h1>
                    <p className="text-green-500/60 max-w-2xl mx-auto text-sm leading-relaxed">
                        {"// Decrypting secure storage... Multiple high-impact nodes identified."}
                        <br />
                        {"// Select a repository to initialize data stream."}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                    {/* Left Column - Babin */}
                    <div className="lg:col-span-3 space-y-4 lg:space-y-8 order-2 lg:order-1">
                        <div className="flex items-center justify-between border-b border-green-500/10 pb-4">
                            <h3 className="text-xs font-bold text-green-500/40 tracking-[0.3em] uppercase flex items-center gap-2">
                                <FaMicrochip className="text-[10px]" /> BABIN_VAULT
                            </h3>
                            <span className="text-[8px] text-green-500/20 font-bold">V1.0</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-2 py-1 rounded text-[9px] font-bold transition-all border uppercase tracking-tighter ${selectedCategory === cat
                                        ? 'bg-green-500/10 border-green-500 text-green-400'
                                        : 'bg-black border-green-500/10 text-green-500/30 hover:border-green-500/30 hover:text-green-500/60'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="space-y-3 max-h-[300px] lg:max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {filteredBabbinProjects.map((proj) => (
                                <ProjectCard
                                    key={proj.title}
                                    project={proj}
                                    isSelected={selectedBabbinProject?.title === proj.title}
                                    onClick={() => {
                                        setSelectedBabbinProject(proj)
                                        setSelectedDebasmitaProject(null)
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Middle Column - Detailed View */}
                    <div className="lg:col-span-6 order-1 lg:order-none">
                        <AnimatePresence mode="wait">
                            {selectedBabbinProject ? (
                                <DetailedProjectView
                                    key="babin-detail"
                                    project={selectedBabbinProject}
                                    onClose={() => setSelectedBabbinProject(null)}
                                />
                            ) : selectedDebasmitaProject ? (
                                <DetailedProjectView
                                    key="debasmita-detail"
                                    project={selectedDebasmitaProject}
                                    onClose={() => setSelectedDebasmitaProject(null)}
                                />
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="h-full min-h-[400px] lg:min-h-[500px] flex flex-col items-center justify-center text-center p-6 lg:p-12 border border-green-500/10 rounded bg-green-500/[0.01] relative group"
                                >
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,100,0.03)_0%,transparent_70%)]" />
                                    <div className="w-16 lg:w-20 h-16 lg:h-20 bg-green-500/5 rounded-full flex items-center justify-center mb-6 lg:mb-8 border border-green-500/10 group-hover:border-green-500/30 transition-colors duration-500">
                                        <FaLock className="text-green-500/20 text-2xl lg:text-3xl animate-pulse" />
                                    </div>
                                    <h4 className="text-xs lg:text-sm font-bold text-green-500/40 mb-3 tracking-[0.4em] uppercase">AWAITING_UPLINK</h4>
                                    <p className="text-green-500/20 text-[9px] lg:text-[10px] max-w-[250px] lg:max-w-[200px] leading-relaxed uppercase tracking-widest px-4 lg:px-0">
                                        Select a project node from the side vaults to initialize data stream
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Column - Debasmita */}
                    <div className="lg:col-span-3 space-y-4 lg:space-y-8 order-3">
                        <div className="flex items-center justify-between border-b border-green-500/10 pb-4">
                            <span className="text-[8px] text-green-500/20 font-bold">V1.0</span>
                            <h3 className="text-xs font-bold text-green-500/40 tracking-[0.3em] uppercase flex items-center gap-2">
                                DEBASMITA_VAULT <FaMicrochip className="text-[10px]" />
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-end">
                            {debasmitaCategories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedDebasmitaCategory(cat)}
                                    className={`px-2 py-1 rounded text-[9px] font-bold transition-all border uppercase tracking-tighter ${selectedDebasmitaCategory === cat
                                        ? 'bg-green-500/10 border-green-500 text-green-400'
                                        : 'bg-black border-green-500/10 text-green-500/30 hover:border-green-500/30 hover:text-green-500/60'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="space-y-3 max-h-[300px] lg:max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {filteredDebasmitaProjects.map((proj) => (
                                <ProjectCard
                                    key={proj.title}
                                    project={proj}
                                    isSelected={selectedDebasmitaProject?.title === proj.title}
                                    onClick={() => {
                                        setSelectedDebasmitaProject(proj)
                                        setSelectedBabbinProject(null)
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects


