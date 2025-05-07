import { Calendar, Menu, X, Sun, Moon } from "lucide-react";
import {type ReactNode, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import useThemeContext from "../hooks/useThemeContext.tsx";


function Layout({children}: { children: ReactNode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuVariants = {
        closed: { opacity: 0, x: "-100%" },
        open: { opacity: 1, x: 0 }
    };

    const pageTransition = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.3 }
    };

    const { darkMode } = useThemeContext();

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <header className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-100">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-6 w-6 text-black" />
                        <span className="text-xl font-light tracking-tight">MM Produções</span>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 focus:outline-none"
                        >
                            {menuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={darkMode ? 'dark' : 'light'}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {darkMode ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </motion.div>
                    </AnimatePresence>

                    <nav className="hidden md:flex items-center gap-8">
                        <div
                            className={`text-sm hover:text-black transition-colors text-gray-500}`}
                        >
                            Início
                        </div>
                        <div
                            className={`text-sm hover:text-black transition-colors text-gray-500}`}
                        >
                            Eventos
                        </div>
                        <div
                            className={`text-sm hover:text-black transition-colors text-gray-500}`}
                        >
                            Detalhes
                        </div>
                    </nav>
                </div>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed top-[69px] inset-0 z-10 bg-white"
                    >
                        <div className="flex flex-col p-8 space-y-6">
                            <div
                                className="text-2xl font-light"
                                onClick={() => setMenuOpen(false)}
                            >
                                Início
                            </div>
                            <div
                                className="text-2xl font-light"
                                onClick={() => setMenuOpen(false)}
                            >
                                Eventos
                            </div>
                            <div
                                className="text-2xl font-light"
                                onClick={() => setMenuOpen(false)}
                            >
                                Detalhes
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="pt-[70px] min-h-screen">
                <motion.div
                    key={window.location.pathname}
                    initial={pageTransition.initial}
                    animate={pageTransition.animate}
                    exit={pageTransition.exit}
                    transition={pageTransition.transition}
                >
                    {children}
                </motion.div>
            </main>
        </div>
    );
}

export default Layout
// const [glowEffect, setGlowEffect] = useState(false)
//
// // Efeito pulsante para elementos de destaque
// useEffect(() => {
//     const interval = setInterval(() => {
//         setGlowEffect(prev => !prev)
//     }, 2000)
//     return () => clearInterval(interval)
// }, [])
//
//
// return (
//     <div className="w-screen h-screen flex-column items-center justify-center bg-gray-800">
//         <Header/>
//         <Banner glowEffect={glowEffect} />
//     </div>
// )
