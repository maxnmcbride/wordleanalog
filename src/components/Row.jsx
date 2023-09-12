import { useState } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import LetterBox from "./letterBox"

const Row = ({guessIndex, handleReset}) => {
    const guesses = useSelector(state => state.guesses)

    const [correctBoxes, setCorrectBoxes] = useState(new Set())
    const addCorrect = (index) => {
        setTimeout(() => {
            const updatedBoxes = correctBoxes.add(index)
            setCorrectBoxes(updatedBoxes)
            if (correctBoxes.size === 5) alert("You won!", handleReset())
        }, 500)
    }

    // const guessCount = {}

    const tempLetters = ["", "", "", "", ""]

    let letterBoxes = tempLetters.map((letter, index) =>    
        <LetterBox 
            key={index} 
            letter={letter}
            letterIndex={index}
        />
    )

    if (guesses.hasOwnProperty(guessIndex)) {
        const guess = guesses[guessIndex].letterVals

        // for (let i = 0; i < guess.length; i++) {
        //     if (guess[i] in guessCount) guessCount[guess[i]] += 1
        //     else guessCount[guess[i]] = 1
        // }
        
        letterBoxes = guess.map((letter, index) =>         
            <LetterBox 
                key={index} 
                letter={letter}
                letterIndex={index}
                addCorrect={addCorrect}
            />
        )
    }

    return (
        <div className="letter-row">
            {letterBoxes}
        </div>
    )
}

export default Row