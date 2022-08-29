import React, { useEffect, useState } from 'react'
import typesound from '../static/typesound.mp3'

const Keyboard = () => {
  const [key, setKey] = useState('')
  const [audio, setAudio] = useState(new Audio(typesound))

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown)
  }, [])

  let keyPressed

  const detectKeyDown = (e) => {
    keyPressed = e.code
    setKey(keyPressed)
    setAudio(audio.play())
    setTimeout(() => {
      setKey('')
    }, 300)
  }

  return (
    <div className="container bg-gradient-to-r from-zinc-600 to-zinc-900 flex flex-col border-4 border-black shadow-xl rounded-lg w-[40rem] my-5">
      <div id="row1" className="flex justify-center">
        <div
          className={key === 'Backquote' ? 'normalkeysPressed' : 'normalkeys'}
        >
          `
        </div>
        <div className={key === 'Digit1' ? 'normalkeysPressed' : 'normalkeys'}>
          1
        </div>
        <div className={key === 'Digit2' ? 'normalkeysPressed' : 'normalkeys'}>
          2
        </div>
        <div className={key === 'Digit3' ? 'normalkeysPressed' : 'normalkeys'}>
          3
        </div>
        <div className={key === 'Digit4' ? 'normalkeysPressed' : 'normalkeys'}>
          4
        </div>
        <div className={key === 'Digit5' ? 'normalkeysPressed' : 'normalkeys'}>
          5
        </div>
        <div className={key === 'Digit6' ? 'normalkeysPressed' : 'normalkeys'}>
          6
        </div>
        <div className={key === 'Digit7' ? 'normalkeysPressed' : 'normalkeys'}>
          7
        </div>
        <div className={key === 'Digit8' ? 'normalkeysPressed' : 'normalkeys'}>
          8
        </div>
        <div className={key === 'Digit9' ? 'normalkeysPressed' : 'normalkeys'}>
          9
        </div>
        <div className={key === 'Digit0' ? 'normalkeysPressed' : 'normalkeys'}>
          0
        </div>
        <div className={key === 'Minus' ? 'normalkeysPressed' : 'normalkeys'}>
          -
        </div>
        <div className={key === 'Equal' ? 'normalkeysPressed' : 'normalkeys'}>
          =
        </div>
        <div
          className={key === 'Backspace' ? 'normalkeysPressed' : 'normalkeys'}
        >
          Backspace
        </div>
      </div>
      <div id="row2" className="flex justify-center">
        <div className={key === 'Tab' ? 'normalkeysPressed' : 'normalkeys'}>
          Tab
        </div>
        <div className={key === 'KeyQ' ? 'normalkeysPressed' : 'normalkeys'}>
          Q
        </div>
        <div className={key === 'KeyW' ? 'normalkeysPressed' : 'normalkeys'}>
          W
        </div>
        <div className={key === 'KeyE' ? 'normalkeysPressed' : 'normalkeys'}>
          E
        </div>
        <div className={key === 'KeyR' ? 'normalkeysPressed' : 'normalkeys'}>
          R
        </div>
        <div className={key === 'KeyT' ? 'normalkeysPressed' : 'normalkeys'}>
          T
        </div>
        <div className={key === 'KeyY' ? 'normalkeysPressed' : 'normalkeys'}>
          Y
        </div>
        <div className={key === 'KeyU' ? 'normalkeysPressed' : 'normalkeys'}>
          U
        </div>
        <div className={key === 'KeyI' ? 'normalkeysPressed' : 'normalkeys'}>
          I
        </div>
        <div className={key === 'KeyO' ? 'normalkeysPressed' : 'normalkeys'}>
          O
        </div>
        <div className={key === 'KeyP' ? 'normalkeysPressed' : 'normalkeys'}>
          P
        </div>
        <div
          className={key === 'BracketLeft' ? 'normalkeysPressed' : 'normalkeys'}
        >
          [
        </div>
        <div
          className={
            key === 'BracketRight' ? 'normalkeysPressed' : 'normalkeys'
          }
        >
          ]
        </div>
        <div
          className={key === 'Backslash' ? 'normalkeysPressed' : 'normalkeys'}
        >
          \
        </div>
      </div>
      <div id="row3" className="flex justify-center">
        <div
          className={key === 'CapsLock' ? 'normalkeysPressed' : 'normalkeys'}
        >
          CapsLk
        </div>
        <div className={key === 'KeyA' ? 'normalkeysPressed' : 'normalkeys'}>
          A
        </div>
        <div className={key === 'KeyS' ? 'normalkeysPressed' : 'normalkeys'}>
          S
        </div>
        <div className={key === 'KeyD' ? 'normalkeysPressed' : 'normalkeys'}>
          D
        </div>
        <div className={key === 'KeyF' ? 'normalkeysPressed' : 'normalkeys'}>
          F
        </div>
        <div className={key === 'KeyG' ? 'normalkeysPressed' : 'normalkeys'}>
          G
        </div>
        <div className={key === 'KeyH' ? 'normalkeysPressed' : 'normalkeys'}>
          H
        </div>
        <div className={key === 'KeyJ' ? 'normalkeysPressed' : 'normalkeys'}>
          J
        </div>
        <div className={key === 'KeyK' ? 'normalkeysPressed' : 'normalkeys'}>
          K
        </div>
        <div className={key === 'KeyL' ? 'normalkeysPressed' : 'normalkeys'}>
          L
        </div>
        <div
          className={key === 'Semicolon' ? 'normalkeysPressed' : 'normalkeys'}
        >
          ;
        </div>
        <div className={key === 'Quote' ? 'normalkeysPressed' : 'normalkeys'}>
          '
        </div>
        <div className={key === 'Enter' ? 'normalkeysPressed' : 'enter'}>
          Enter
        </div>
      </div>
      <div id="row4" className="flex justify-center">
        <div
          className={key === 'ShiftLeft' ? 'normalkeysPressed' : 'normalkeys'}
        >
          Shift
        </div>
        <div className={key === 'KeyZ' ? 'normalkeysPressed' : 'normalkeys'}>
          Z
        </div>
        <div className={key === 'KeyX' ? 'normalkeysPressed' : 'normalkeys'}>
          X
        </div>
        <div className={key === 'KeyC' ? 'normalkeysPressed' : 'normalkeys'}>
          C
        </div>
        <div className={key === 'KeyV' ? 'normalkeysPressed' : 'normalkeys'}>
          V
        </div>
        <div className={key === 'KeyB' ? 'normalkeysPressed' : 'normalkeys'}>
          B
        </div>
        <div className={key === 'KeyN' ? 'normalkeysPressed' : 'normalkeys'}>
          N
        </div>
        <div className={key === 'KeyM' ? 'normalkeysPressed' : 'normalkeys'}>
          M
        </div>
        <div className={key === 'Comma' ? 'normalkeysPressed' : 'normalkeys'}>
          ,
        </div>
        <div className={key === 'Period' ? 'normalkeysPressed' : 'normalkeys'}>
          .
        </div>
        <div className={key === 'Slash' ? 'normalkeysPressed' : 'normalkeys'}>
          /
        </div>
        <div
          className={key === 'ShiftRight' ? 'normalkeysPressed' : 'normalkeys'}
        >
          Shift
        </div>
      </div>
      <div id="row5" className="flex justify-center">
        <div
          className={key === 'ControlLeft' ? 'normalkeysPressed' : 'normalkeys'}
        >
          Ctrl
        </div>
        <div className={key === 'AltLeft' ? 'normalkeysPressed' : 'normalkeys'}>
          Alt
        </div>
        <div className={key === 'Space' ? 'spacePressed' : 'space'}>Space</div>
        <div
          className={key === 'AltRight' ? 'normalkeysPressed' : 'normalkeys'}
        >
          Alt
        </div>
        <div
          className={
            key === 'ControlRight' ? 'normalkeysPressed' : 'normalkeys'
          }
        >
          Ctrl
        </div>
      </div>
    </div>
  )
}

export default Keyboard
