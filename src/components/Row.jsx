import { useSelector } from "react-redux/es/hooks/useSelector"
import LetterBox from "./letterBox"

const Row = ({guessIndex}) => {
    const guesses = useSelector(state => state.guesses)

    const tempLetters = ["", "", "", "", ""]

    let letterBoxes = tempLetters.map((letter, index) =>    
        <LetterBox 
            key={index} 
            letter={letter}
            letterIndex={index}
        />
    )

    if (guesses.hasOwnProperty(guessIndex)) {
        letterBoxes = guesses[guessIndex].letterVals.map((letter, index) =>         
            <LetterBox 
                key={index} 
                letter={letter}
                letterIndex={index}
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