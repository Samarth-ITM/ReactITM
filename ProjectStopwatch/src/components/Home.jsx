import { useEffect, useRef, useState } from "react"
import './home.css'


const BREAK_SECONDS = 300

const Home = () => {
    const [workMinutes, setWorkMinutes] = useState(25)
    const [secondsLeft, setSecondsLeft] = useState(25 * 60)
    const [isRunning, setIsRunning] = useState(false)
    const [isBreak, setIsBreak] = useState(false)
    const [breaksTaken, setBreaksTaken] = useState(0)
    const pausedtime = useRef(0)
    const maxBreaks = Math.floor(workMinutes / 20)
    const breaksLeft = Math.max(0, maxBreaks - breaksTaken)

    function handleReset() {
        setIsRunning(false)
        setIsBreak(false)
        setSecondsLeft(workMinutes * 60)
        setBreaksTaken(0)
        pausedtime.current = 0
    }

    function handleWork() {
        setIsBreak(false)
        setSecondsLeft(workMinutes * 60)
        setIsRunning(true)
    }

    function handleBreak() {
        if (breaksLeft <= 0) {
            return
        }

        if (!isBreak) {
            pausedtime.current = secondsLeft
        }
        setIsBreak(true)
        setSecondsLeft(BREAK_SECONDS)
        setBreaksTaken(prev => prev + 1)
        setIsRunning(true)
    }

    useEffect(() => {
        if (!isRunning) {
            return
        }

        const interval = setInterval(() => {
            setSecondsLeft(prevSeconds => {
                if (prevSeconds <= 1) {
                    if (isBreak) {
                        setIsBreak(false)
                        return pausedtime.current || workMinutes * 60
                    }

                    setIsRunning(false)
                    return 0
                }

                return prevSeconds - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [isRunning, isBreak, workMinutes])


    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60)
        const seconds = totalSeconds % 60

        const minutesString = String(minutes).padStart(2, '0')
        const secondsString = String(seconds).padStart(2, '0')

        return `${minutesString}:${secondsString}`
    }

    return (
        <div className={`page ${isRunning ? 'running' : ''}`}>
            <div className="home">
                <h1 className="H" style={{ display: isBreak || isRunning ? 'none' : 'block' }}>POMODORO</h1>
                <h2 className="S" style={{ display: isBreak || isRunning ? 'none' : 'block' }}>-Samarth
                </h2>
            </div>

            <h1 className="mode"
                style={{ display: !isRunning ? 'none' : 'block' }}

            >{isBreak ? 'Chill Time' : 'Work Time'}</h1>

            <div className="input-row">
                <label className="input-label" style={{ display: isRunning ? 'none' : 'block' }}>SetTime:</label>
                <input
                    style={{ display: isRunning ? 'none' : 'block' }}
                    id="work-minutes"
                    className="time-input"
                    type="number"
                    value={workMinutes}
                    onChange={(event) => {
                        const nextValue = Number(event.target.value)
                        if (!Number.isNaN(nextValue) && nextValue >= 25) {
                            setWorkMinutes(nextValue)
                            setBreaksTaken(0)
                            if (!isRunning && !isBreak) {
                                setSecondsLeft(nextValue * 60)
                            }
                        }
                    }}
                />

                <span className="breaks-left" style={{ display: isBreak || breaksLeft <= 0 ? 'none' : 'block' }}>Breaks: {breaksLeft}</span>
            </div>

            <div className="stopwatch">

                <h2>{formatTime(secondsLeft)}</h2>

            </div>

            <div className="buttons">

                <button
                    className="reset-btn"
                    onClick={handleReset}
                    style={{ display: isBreak || !isRunning ? 'none' : 'block' }}
                >
                    Reset
                </button>
                <button
                    className="work-btn"
                    onClick={() => { handleWork() }}
                    style={{ display: isRunning ? 'none' : 'block' }}
                >
                    Work
                </button>


                <button
                    className="break-btn"
                    onClick={handleBreak}
                    style={{ display: isBreak || !isRunning || breaksLeft <= 0 ? 'none' : 'block' }}
                >
                    5 min Break
                </button>

            </div >
        </div >
    )
}


export default Home
