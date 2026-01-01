import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Loader({ loadingText = '', loadingProgress = 0 }) {
    const isHalfway = loadingProgress >= 50
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Replace the current history entry to always show `#home` in the URL bar
            try {
                if (window.location.hash !== '#home') {
                    history.replaceState(null, '', '#home')
                }
            } catch (e) {
                // noop - browsers without history support will ignore
            }
        }
    }, [])

    return (
        <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden"
        >
            {/* Matrix Rain Effect - falling 0s and 1s */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => {
                    const matrixChars = '0101001011'
                    return (
                        <motion.div
                            key={i}
                            className="absolute text-green-500 text-xs font-mono opacity-30"
                            style={{ left: `${i * 5}%` }}
                            initial={{ y: -100 }}
                            animate={{ y: '100vh' }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "linear"
                            }}
                        >
                            {[...Array(20)].map((_, j) => (
                                <div key={j} className="my-2">
                                    {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
                                </div>
                            ))}
                        </motion.div>
                    )
                })}
            </div>

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-8">
                {/* Danger warning with animated icons */}
                <div className="flex flex-col items-center gap-4">
                    <motion.div
                        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        className="text-5xl"
                    >
                        ⚠️
                    </motion.div>
                    <motion.h1
                        className="text-3xl font-mono font-bold"
                        animate={{
                            color: isHalfway ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)',
                            textShadow: isHalfway
                                ? '0 0 20px rgba(34, 197, 94, 0.8)'
                                : '0 0 20px rgba(255, 0, 0, 0.8)'
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        {isHalfway ? '✓ SYSTEM UNLOCKED' : 'DANGER AHEAD !'}
                    </motion.h1>
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="text-2xl"
                        style={{ color: isHalfway ? 'rgb(34, 197, 94)' : 'rgb(248, 113, 113)' }}
                    >
                        {isHalfway ? '✓✓✓' : '???'}
                    </motion.div>
                </div>

                {/* MacBook-style Terminal box */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.45 }}
                    className="bg-black/90 rounded-xl overflow-hidden w-full max-w-2xl mx-auto shadow-2xl"
                    style={{
                        borderColor: isHalfway ? 'rgb(34, 197, 94)' : 'rgb(185, 28, 28)',
                        borderWidth: '1px',
                        boxShadow: isHalfway
                            ? '0 20px 50px rgba(34, 197, 94, 0.2)'
                            : '0 20px 50px rgba(255, 0, 0, 0.2)'
                    }}
                >
                    {/* MacBook top bar */}
                    <motion.div
                        className="px-4 py-3 flex items-center gap-3"
                        animate={{
                            backgroundColor: isHalfway
                                ? 'rgba(5, 150, 105, 0.2)'
                                : 'rgba(127, 29, 29, 0.3)',
                            borderBottomColor: isHalfway ? 'rgb(34, 197, 94)' : 'rgb(185, 28, 28)'
                        }}
                        transition={{ duration: 0.6 }}
                        style={{ borderBottomWidth: '1px' }}
                    >
                        {/* Red button */}
                        <motion.div
                            className="w-4 h-4 rounded-full shadow-md hover:scale-110 transition-transform"
                            animate={{
                                backgroundColor: isHalfway ? 'rgb(255, 59, 48)' : 'rgb(255, 59, 48)',
                                boxShadow: isHalfway
                                    ? 'inset 0 1px 2px rgba(0,0,0,0.4), 0 2px 4px rgba(255,59,48,0.4)'
                                    : 'inset 0 1px 2px rgba(0,0,0,0.4), 0 2px 4px rgba(255,59,48,0.4)'
                            }}
                            transition={{ duration: 0.6 }}
                        />
                        {/* Yellow button */}
                        <motion.div
                            className="w-4 h-4 rounded-full shadow-md hover:scale-110 transition-transform"
                            animate={{
                                backgroundColor: isHalfway ? 'rgb(255, 204, 0)' : 'rgb(255, 204, 0)',
                                boxShadow: isHalfway
                                    ? 'inset 0 1px 2px rgba(0,0,0,0.4), 0 2px 4px rgba(255,204,0,0.4)'
                                    : 'inset 0 1px 2px rgba(0,0,0,0.4), 0 2px 4px rgba(255,204,0,0.4)'
                            }}
                            transition={{ duration: 0.6 }}
                        />
                        {/* Green button */}
                        <motion.div
                            className="w-4 h-4 rounded-full shadow-md hover:scale-110 transition-transform"
                            animate={{
                                backgroundColor: isHalfway ? 'rgb(52, 211, 153)' : 'rgb(52, 211, 153)',
                                boxShadow: isHalfway
                                    ? 'inset 0 1px 2px rgba(0,0,0,0.4), 0 2px 4px rgba(52,211,153,0.4)'
                                    : 'inset 0 1px 2px rgba(0,0,0,0.4), 0 2px 4px rgba(52,211,153,0.4)'
                            }}
                            transition={{ duration: 0.6 }}
                        />
                        <motion.div
                            className="ml-2 font-mono text-xs font-semibold tracking-wider"
                            animate={{
                                color: isHalfway ? 'rgb(34, 197, 94)' : 'rgb(248, 113, 113)'
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            {isHalfway ? '✓ SYSTEM UNLOCKED' : '⚠️ SYSTEM ALERT'}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="p-6 text-left font-mono text-sm min-h-[200px] max-h-[320px] overflow-y-auto bg-black/80"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        animate={{
                            color: isHalfway ? 'rgb(34, 197, 94)' : 'rgb(248, 113, 113)'
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            style={{ color: isHalfway ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)' }}
                            className="mb-2"
                        >
                            {isHalfway ? '[✓] SYSTEM UNLOCKED' : '[!] UNAUTHORIZED ACCESS DETECTED'}
                        </motion.div>
                        <pre className="whitespace-pre-wrap leading-relaxed">{loadingText}<motion.span animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 0.8, repeat: Infinity }} style={{ color: isHalfway ? 'rgb(74, 222, 128)' : 'rgb(252, 165, 165)' }} className="font-bold">▌</motion.span></pre>
                    </motion.div>

                    <motion.div
                        className="px-6 py-4 bg-black/70"
                        style={{ borderTopWidth: '1px' }}
                        animate={{
                            borderTopColor: isHalfway ? 'rgba(34, 197, 94, 0.3)' : 'rgba(185, 28, 28, 0.3)'
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="flex justify-between items-center text-xs mb-2 font-mono"
                            animate={{
                                color: isHalfway ? 'rgb(34, 197, 94)' : 'rgb(248, 113, 113)'
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <div>{isHalfway ? 'SYSTEM STATUS' : 'THREAT LEVEL'}</div>
                            <motion.div
                                className="font-bold"
                                animate={{
                                    color: isHalfway ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'
                                }}
                                transition={{ duration: 0.6 }}
                            >
                                {Math.round(loadingProgress)}% {isHalfway ? '🔓' : '🔐'}
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="h-1.5 rounded-full overflow-hidden"
                            animate={{
                                backgroundColor: isHalfway ? 'rgba(34, 197, 94, 0.2)' : 'rgba(185, 28, 28, 0.2)',
                                borderColor: isHalfway ? 'rgba(34, 197, 94, 0.4)' : 'rgba(185, 28, 28, 0.4)'
                            }}
                            transition={{ duration: 0.6 }}
                            style={{ borderWidth: '1px' }}
                        >
                            <motion.div
                                className="h-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.max(0, Math.min(100, loadingProgress))}%` }}
                                transition={{ duration: 0.45, ease: 'easeOut' }}
                                style={{
                                    backgroundImage: isHalfway
                                        ? 'linear-gradient(to right, rgb(34, 197, 94), rgb(34, 197, 94), rgb(74, 222, 128))'
                                        : 'linear-gradient(to right, rgb(239, 68, 68), rgb(249, 115, 22), rgb(239, 68, 68))',
                                    boxShadow: isHalfway
                                        ? '0 0 12px rgba(34, 197, 94, 0.8)'
                                        : '0 0 12px rgba(239, 68, 68, 0.8)'
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}
