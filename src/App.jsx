// import { useState } from 'react'
import "./App.css"
import Row from "./components/Row"

function App() {
  const rows = [1, 2, 3, 4, 5, 6] // <-- Data from state
  const renderedRows = rows.map(row => <Row key={row} />) // State passed as props or accessed in each Row component?
  
  return (
    <div className="main-container">
      <h2>Main Container</h2>
      {renderedRows}
    </div>
  )
}

export default App
