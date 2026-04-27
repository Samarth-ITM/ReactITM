import { createContext, useState } from "react";

export const ThemeContext= createContext();

export const ThemeContextProvider=({children})=> {
    const [theme, setTheme] = useState("light");
    const ToggleTheme= () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return(
        <ThemeContext.Provider value={{theme, ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};