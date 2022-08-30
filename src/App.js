import './App.css'
import Keyboard from './components/Keyboard'
import { useState, useRef } from 'react'
import Interface from './components/Interface'

function App() {
  const [text, setText] = useState('')
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const textBoxRef = useRef(null)

  const calculateWordCount = () => {
    const wordsArr = text.trim().split(' ')
    return wordsArr.filter((word) => word !== '').length
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div className="flex  h-screen w-screen overflow-hidden">
      <div className="ml-64 flex flex-col items-center justify-center mr-20">
        <h1 className="text-4xl font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600 mt-2"> How fast can you type? </h1>
        <form className="my-2  ">
          <textarea
            ref={textBoxRef}
            disabled={!isTimeRunning}
            className={`w-[40rem] h-[20rem] p-5 text-lg text-slate-100 font-semibold border-2 placeholder-white placeholder-opacity-30 ${!isTimeRunning ? "border-black" : "border-cyan-500/80"} rounded-lg ${isTimeRunning ? "bg-gray-800" : "bg-zinc-800"}`}
            value={text}
            onChange={handleChange}
            placeholder="I can't recall the initial impulse behind wanting to create this. I do remember that I was playing around with tailwindcss and at some point decided that I wanted to create a cool looking virtual keyboard. "
          />
        </form>
        <Keyboard />
      </div>
      <div>
        <Interface
          isTimeRunning={isTimeRunning}
          setIsTimeRunning={setIsTimeRunning}
          wordCount={calculateWordCount}
          textBoxRef={textBoxRef}
          setText={setText}
        />
      </div>
    </div>
  )
}

export default App
