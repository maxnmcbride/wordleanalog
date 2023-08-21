import { useSelector } from "react-redux/es/hooks/useSelector"
import LetterBox from "./LetterBox"

const Row = (guessIndex) => {
    const guesses = useSelector(state => state.guesses)

    const tempLetters = ["", "", "", "", ""]
    
    let letterBoxes = tempLetters.map((letter, index) => <LetterBox key={index} letter={letter} />)

    if (guesses.hasOwnProperty(guessIndex.guessIndex)) {
        const guess = guesses[guessIndex.guessIndex].letterVals
        letterBoxes = guess.map((letter, index) => <LetterBox key={index} letter={letter} />)
    }

    return (
        <div className="letter-row">
            {letterBoxes}
        </div>
    )
}

export default Row