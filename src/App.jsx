import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addGuess } from './features/guessesSlice'
import { addWord } from './features/wordsSlice'
import "./App.css"
import Row from "./components/Row"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?length=5")
    .then(r => r.json())
    .then(word => dispatch(
      addWord({
        id: nanoid(),
        word
      })
    ))
  }, [])

  const [inputWord, setInputWord] = useState("")

  const rows = [1, 2, 3, 4, 5, 6] // <-- Data from state?
  const renderedRows = rows.map(row => <Row key={row} guessIndex={row} />)
  
  const submitGuess = (e) => {
    e.preventDefault()
    let letterVals = []
    for (let i in inputWord) letterVals.push(inputWord[i].toUpperCase())
    dispatch(
      addGuess({
        id: nanoid(),
        letterVals
      })
    )
    setInputWord("")
  }

  return (
    <>
      <div className="main-container">
        <h2>Main Container</h2>
        <div className="form-container">
          <label>Type your guess...</label>
          <form onSubmit={submitGuess}>
            <input
              id="main-input"
              type="text"
              minLength="5"
              maxLength="5"
              value={inputWord}
              onChange={e => setInputWord(e.target.value)}
              />
          </form>
        </div>
        {renderedRows}
      </div>
    </>
  )
}

export default App
