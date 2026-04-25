import { useState } from "react"


const Theme = () => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <div className={`app ${theme}`}>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </>
    )
}

export default Theme
