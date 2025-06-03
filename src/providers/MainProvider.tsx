import {type ReactNode, type FC, useState, useEffect} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";


export const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [darkMode, setDarkMode] = useState<boolean>(false)

    const toggleDarkMode = (mode: boolean) => {
        setDarkMode(mode);
        const root = document.documentElement;
        if (mode) {
            root.classList.add('dark');
            root.style.setProperty('--bg-color', '#1a202c');
            root.style.setProperty('--text-color', '#f7fafc');
        } else {
            root.classList.remove('dark');
            root.style.setProperty('--bg-color', '#f7fafc');
            root.style.setProperty('--text-color', '#1a202c');
        }
    }

    useEffect(() => {

    }, []);


    return (
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>{children}</ThemeContext.Provider>
    );
};