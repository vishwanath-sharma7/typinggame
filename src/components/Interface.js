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
    setTimeRemaining(60)
    props.textBoxRef.current.disabled = false
    props.textBoxRef.current.focus()
  }
  const endGame = () => {
    props.setIsTimeRunning(false)
    setWordCount(props.wordCount)
  }

  const showWordCount = () => {
    if (props.isTimeRunning) {
      return <div className=" py-3 my-10  bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600"> Time Remaining: {timeRemaining}</div>
    } else if (timeRemaining === 0) {
      return (

        <div className="py-3 my-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600">You type at a speed of {wordCount} words per minute. </div>


      )
    }
  }
  return (
    <>
      <div className="flex flex-col font-semibold items-center justify-center h-screen w-96 mr-10 text-4xl">
        <button
          // className="btn border border-cyan-500  py-5 px-10 rounded-lg hover:shadow-lg shadow-sm hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-600 text-cyan-500 hover:text-black bg-transparent hover:bg-cyan-500"

          // className='btn border border-cyan-500 py-5 px-10 rounded-lg hover:bg-cyan-500 text-cyan-500 group '
          className={` btn border border-cyan-500 py-5 px-10 rounded-lg hover:bg-cyan-500 text-cyan-500 group ${props.isTimeRunning && "hidden"}`}

          onClick={startGame}
          disabled={props.isTimeRunning}
        >

          <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-500 group-hover:from-black group-hover:to-gray-800  '>
            Start
          </span>
        </button>
        {showWordCount()}
      </div>
    </>
  )
}

export default Interface
