import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }

    return context;
};

export default useThemeContext;