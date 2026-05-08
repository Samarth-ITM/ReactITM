import { useLocalStorage } from "./Hook";

export function Theme() {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <div>
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default Theme;