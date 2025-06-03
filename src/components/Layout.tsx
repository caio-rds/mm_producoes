import { Menu, X, Sun, Moon } from "lucide-react";
import {type ReactNode, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import useThemeContext from "../hooks/useThemeContext.tsx";
import whiteLogo from "../assets/whiteLogo.png";
import darkLogo from "../assets/darkLogo.png";


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

    const sections: { name: string, path: string }[] = [
        {name: "Início", path: "home"},
        {name: "Eventos", path: "events"},
        {name: "Detalhes", path: "details"}
    ]

    const { darkMode, toggleDarkMode } = useThemeContext();

    const goTo = (path: string) => {
        window.location.href = `/${path}`;
    }

    return (
        <div className={`min-h-screen ${ darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} font-sans text-gray-900`}>
            <header className={`fixed top-0 left-0 right-0 z-10 ${ darkMode ? 'bg-gray-900 text-gray-100 border-gray-900 ' : 'bg-white border-gray-100 text-gray-900' } bg-opacity-95 backdrop-blur-sm border-b`}>
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img src={darkMode ? whiteLogo : darkLogo} alt="Logo" className="h-10 w-10"/>
                        <span className="text-xl font-light tracking-tight">MM Produções</span>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 focus:outline-none">
                            {menuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            onClick={() => toggleDarkMode(!darkMode)}
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
                        {sections.map((section) => (
                            <div
                                key={section.path}
                                className={`text-sm hover:text-black transition-colors text-gray-500}`}
                                onClick={() => goTo(section.path)}
                                role={"button"}
                                >
                                {section.name}
                            </div>
                        ))}
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
                            {sections.map((section) => (
                                <div
                                    key={section.path}
                                    className="text-2xl font-light"
                                    onClick={() => {
                                        setMenuOpen(false);
                                        goTo(section.path);
                                    }}
                                >
                                    {section.name}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="pt-[70px] min-h-screen">
                <motion.div
                    className={`container mx-auto px-4 py-8 ${ darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900' }`}
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

export default Layout;