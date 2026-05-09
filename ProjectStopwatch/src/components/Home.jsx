/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { useContext } from "react"
import { useEffect } from "react"
import React, { useState } from 'react'
import './home.css'




const Home = () => {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [laps, setLaps] = useState([])


    function handleStart() {
        setIsRunning(true)
    }

    function handlePause() {
        setIsRunning(false)
    }


    function handleLap() {
        setLaps(prevLaps => [time, ...prevLaps])
    }

    useEffect(() => {
        let interval = null

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [isRunning])


    function formatTime(time) {
        const hours = Math.floor(time / 360000)
        const minutes = Math.floor((time % 360000) / 6000)
        const seconds = Math.floor((time % 6000) / 100)

        const hoursString = String(hours).padStart(2, '0')
        const minutesString = String(minutes).padStart(2, '0')
        const secondsString = String(seconds).padStart(2, '0')

        return `${hoursString}:${minutesString}:${secondsString}`
    }

    return (
        <>
            <div className="home">
                <h1 className="H">StopWatch</h1>
                <h2 className="S">By Samarth</h2>
            </div>

            <div className="stopwatch">
                <h2>{formatTime(time)}</h2>
            </div>

            <div className="buttons">

                <button
                    className={isRunning ? 'pause-btn' : 'start-btn'}
                    onClick={() => {
                        setIsRunning(!isRunning);
                        isRunning ? handlePause : handleStart
                    }}
                >
                    {isRunning ? 'Pause' : 'Start'}
                </button>

                <button className="lap-btn" onClick={handleLap}>
                    Lap
                </button>

                <button
                    className="reset-btn"
                    onClick={() => {
                        setIsRunning(false)
                        setTime(0)
                    }}
                >
                    reset
                </button>

            </div>

            <div className="laps">

                <button className="clear-btn" onClick={() => setLaps([])}>
                    {laps.length > 0 ? 'Clear Laps' : '-... .. --. / -.-- .- .... ..-'}
                </button>

                {laps.map((lap, index) => (
                    <p className="lap-item" key={index}>
                        {index + 1}. {formatTime(lap)}
                    </p>
                ))}
            </div>
        </>
    )
}


export default Home
