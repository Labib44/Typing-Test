import React, { useEffect, useRef, useState } from 'react';
import randomWords from 'random-words'
import './TypingSkill.css';

const NUMB_OF_WORDS = 200
const SECONDS = 60



const TypingSkill = () => {
    const [words, setWords] = useState([])
    const [countDown, setCountDown] = useState(SECONDS)
    const [currInput, setCurrInput] = useState("")
    const [currWordIndex, setCurrWordIndex] = useState(0)
    const [currCharIndex, setCurrCharIndex] = useState(-1)
    const [currChar, setCurrChar] = useState("")
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)
    const [status, setStatus] = useState("waiting")
    const textInput = useRef(null)

    useEffect(() => {
        setWords(generateWords())
    }, [])

    useEffect(() => {
        if (status === 'started') {
            textInput.current.focus()
        }
    }, [status])

    function generateWords() {
        return new Array(NUMB_OF_WORDS).fill(null).map(() => randomWords())
    }

    function start() {

        if (status === 'finished') {
            setWords(generateWords())
            setCurrWordIndex(0)
            setCorrect(0)
            setIncorrect(0)
            setCurrCharIndex(-1)
            setCurrChar("")
        }

        if (status !== 'started') {
            setStatus('started')
            let interval = setInterval(() => {
                setCountDown((prevCountdown) => {
                    if (prevCountdown === 0) {
                        clearInterval(interval)
                        setStatus('finished')
                        setCurrInput("")
                        return SECONDS
                    } else {
                        return prevCountdown - 1
                    }
                })
            }, 1000)
        }

    }

    function handleKeyDown({ keyCode, key }) {
        // space bar 
        if (keyCode === 32) {
            checkMatch()
            setCurrInput("")
            setCurrWordIndex(currWordIndex + 1)
            setCurrCharIndex(-1)
            // backspace
        } else if (keyCode === 8) {
            setCurrCharIndex(currCharIndex - 1)
            setCurrChar("")
        } else {
            setCurrCharIndex(currCharIndex + 1)
            setCurrChar(key)
        }
    }

    function checkMatch() {
        const wordToCompare = words[currWordIndex]
        const doesItMatch = wordToCompare === currInput.trim()
        if (doesItMatch) {
            setCorrect(correct + 1)
        } else {
            setIncorrect(incorrect + 1)
        }
    }

    function getCharClass(wordIdx, charIdx, char) {
        if (wordIdx === currWordIndex && charIdx === currCharIndex && currChar && status !== 'finished') {
            if (char === currChar) {
                return 'bg-green-500'
            } else {
                return 'bg-red-500'
            }
        } else if (wordIdx === currWordIndex && currCharIndex >= words[currWordIndex].length) {
            return 'bg-red-500'
        } else {
            return ''
        }
    }

    return (
        <div className='w-full h-auto p-5 img-pro'>

            <h1 className='text-center text-4xl font-serif font-bold p-5'>Test your typing skills.</h1>
            <div className='mx-auto max-w-7xl p-5 rounded-box shadow-2xl bg-base-100'>
                <div className="grid grid-cols-2 gap-5">
                    <div className=" p-2 ring ring-primary rounded-full text-gray-600 w-32 m-3 text-center ">
                        <span className=" font-serif text-5xl">
                            {countDown}
                        </span>

                    </div>

                    {status === 'finished' && (
                        <div className="">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="">
                                    <p className="text-2xl font-serif">Words per minute</p>
                                    <p className="p-2 text-center ring ring-primary rounded-full text-gray-500 font-serif w-20 ml-14 m-3">
                                        {correct}
                                    </p>
                                </div>
                                <div className="">
                                    <p className="text-2xl font-serif ">Accuracy</p>
                                    {correct !== 0 ? (
                                        <p className="p-2 text-center ring ring-primary rounded-full text-gray-500 font-serif w-20 m-3">
                                            {Math.round((correct / (correct + incorrect)) * 100)}%
                                        </p>
                                    ) : (
                                        <p className="p-2 text-center ring ring-primary rounded-full text-gray-500 font-serif w-20 m-3">0%</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                </div>
                <div className="max-w-7xl">
                    <input className="input input-bordered input-primary w-full p-5 " ref={textInput} disabled={status !== "started"} type="text" onKeyDown={handleKeyDown} value={currInput} onChange={(e) => setCurrInput(e.target.value)} />
                </div>
                <div className="p-5 text-center">
                    <button className="btn text-black btn-outline btn-primary w-60" onClick={start}>
                        Start
                    </button>
                </div>
                {status === 'started' && (
                    <div className="">
                        <div className="text-xl font-serif">
                            {words.map((word, i) => (
                                <span className='' key={i}>
                                    <span className=''>
                                        {word.split("").map((char, idx) => (
                                            <span className={getCharClass(i, idx, char)} key={idx}>{char}</span>
                                        ))}
                                    </span>
                                    <span> </span>
                                </span>
                            ))}
                        </div>
                    </div>
                )}


            </div>

        </div>
    );
};

export default TypingSkill;