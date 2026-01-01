import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme()

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-3 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 group"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: isDarkMode ? 0 : 180,
                    scale: isDarkMode ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <FaMoon className="text-yellow-400 text-lg" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    rotate: isDarkMode ? -180 : 0,
                    scale: isDarkMode ? 0 : 1
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <FaSun className="text-orange-500 text-lg" />
            </motion.div>

            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDarkMode
                    ? 'bg-gradient-to-br from-yellow-400/20 to-orange-500/20'
                    : 'bg-gradient-to-br from-blue-400/20 to-purple-500/20'
                }`} />
        </motion.button>
    )
}

export default ThemeToggle