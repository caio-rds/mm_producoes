import {type ReactNode, type FC, useState} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";


export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [darkMode, setDarkMode] = useState<boolean>(false)


    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>{children}</ThemeContext.Provider>
    );
};