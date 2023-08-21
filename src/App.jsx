import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addGuess } from './features/guessesSlice'
import "./App.css"
import Row from "./components/Row"

function App() {
  const dispatch = useDispatch()

  const [inputWord, setInputWord] = useState("")
  // const [guess, setGuess] = useState(null)

  const rows = [0, 1, 2, 3, 4, 5] // <-- Data from state
  const renderedRows = rows.map(row => <Row key={row} />) // State passed as props or accessed in each Row component?
  
  const submitGuess = (e) => {
    e.preventDefault()
    let newGuess = []
    for (let i in inputWord) newGuess.push(inputWord[i].toUpperCase())
    // setGuess(newGuess)
    dispatch(
      addGuess({
        id: nanoid(),
        newGuess
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
