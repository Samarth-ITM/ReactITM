import { useState} from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider= ({children})=> {
    const[theme, setTheme]= useState("light");

    const ToggleTheme= () => {
        setTheme(prev => (prev === "light"?"dark":"light"));
    };

    return(
        <ThemeContext.Provider value={{theme, ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
