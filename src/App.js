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
    <div className="flex p-5  bg-slate-500">
      <div className="ml-64 flex flex-col items-center justify-center mr-20">
        <form className="my-10 ">
          <textarea
            ref={textBoxRef}
            disabled={!isTimeRunning}
            className="w-[40rem] h-[20rem] p-5 text-lg font-semibold border-2 border-black bg-slate-400"
            value={text}
            onChange={handleChange}
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
