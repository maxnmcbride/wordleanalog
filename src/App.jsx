import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addGuess, resetGuesses } from './features/guessesSlice'
import { addWord } from './features/wordsSlice'
import Row from "./components/Row"
import "./App.css"

function App() {
  const dispatch = useDispatch()

  const getWord = () => {
    fetch("https://random-word-api.herokuapp.com/word?length=5")
    .then(r => r.json())
    .then(arr => {
      const word = arr[0].toUpperCase()
      console.log(word)

      const letterCount = {}
      for (let i = 0; i < word.length; i++) {
        if (word[i] in letterCount) letterCount[word[i]] += 1
        else letterCount[word[i]] = 1
      }
      
      dispatch(
        addWord({
          id: nanoid(),
          word,
          letterCount
        })
      )}
  )}

  useEffect(getWord, [])

  const [inputWord, setInputWord] = useState("")

  const rows = [1, 2, 3, 4, 5, 6] // <-- Data from state?
  const renderedRows = rows.map(row => <Row key={row} guessIndex={row} />)
  
  const submitGuess = (e) => {
    e.preventDefault()

    const letterVals = []
    for (let i in inputWord) letterVals.push(inputWord[i].toUpperCase())

    dispatch(
      addGuess({
        id: nanoid(),
        letterVals
      })
    )

    setInputWord("")
  }

  const handleReset = () => {
    dispatch(resetGuesses())
    getWord()
  }

  return (
    <>
      <div className="main-container">
        <h2>Welcome to the Wordle Analog</h2>
        <div className="form-container">
          <form onSubmit={submitGuess}>
            <input
              id="main-input"
              type="text"
              minLength="5"
              maxLength="5"
              placeholder="Type your guess..."
              value={inputWord}
              onChange={e => setInputWord(e.target.value)}
              />
          </form>
        </div>
        {renderedRows}
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default App
