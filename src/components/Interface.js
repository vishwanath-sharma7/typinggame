import React, { useState, useEffect } from 'react'

const Interface = (props) => {
  const [timeRemaining, setTimeRemaining] = useState(15)
  const [wordCount, setWordCount] = useState(0)

  useEffect(() => {
    if (props.isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prev) => prev - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, props.isTimeRunning])

  const startGame = () => {
    props.setText('')
    props.setIsTimeRunning(true)
    setTimeRemaining(15)
    props.textBoxRef.current.disabled = false
    props.textBoxRef.current.focus()
  }
  const endGame = () => {
    props.setIsTimeRunning(false)
    setWordCount(props.wordCount)
  }
  return (
    <>
      <div className="flex flex-col font-semibold items-center justify-center h-screen w-96 mr-10 text-4xl">
        <div
          className="btn border border-black py-5 px-10 "
          onClick={startGame}
        >
          Start
        </div>
        {props.isTimeRunning ? (
          <div className="my-10"> Time Remaining: {timeRemaining}</div>
        ) : (
          <div className="my-10">Word Count: {wordCount} </div>
        )}
      </div>
    </>
  )
}

export default Interface
