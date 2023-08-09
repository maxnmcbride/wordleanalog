import { useState } from 'react'
import "./App.css"
import Row from "./components/Row"

function App() {
  const [inputWord, setInputWord] = useState("")

  const rows = [1, 2, 3, 4, 5, 6] // <-- Data from state
  const renderedRows = rows.map(row => <Row key={row} />) // State passed as props or accessed in each Row component?
  
  return (
    <>
      <div className="main-container">
        <h2>Main Container</h2>
        {renderedRows}
      </div>
      <input
        id="main-input"
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value)}
      />
    </>
  )
}

export default App
