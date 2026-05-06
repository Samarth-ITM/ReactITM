import { useState, useMemo } from "react"

export default function ExpensiveCalc() {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    const expensiveValue = useMemo(() => {
        console.log("Calculating...");
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += count * 2;
        }
        return result;
    }, [count]);

    const theme = {
        "backgroundColor": dark ? "#333" : "#fff",
        "color": dark ? "#fff" : "#333",
        "padding": "20px",
        "marginTop": "20px"
    };
    return (
        <div style={theme}>
            <h1>Expensive Calculation</h1>
            <p>Result: {expensiveValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setDark(!dark)}>Toggle Theme</button>
        </div>
    )
}