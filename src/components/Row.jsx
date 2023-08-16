import { useSelector } from "react-redux/es/hooks/useSelector"
import LetterBox from "./LetterBox"

const Row = () => {
    const guess = useSelector(state => state.guesses[0])

    const tempLetters = ["", "", "", "", ""]
    
    let letterBoxes = guess.letterVals.map((letter, index) => <LetterBox key={index} letter={letter} />)

    // if (guess.guess) {
    //     letterBoxes = guess.guess.map((letter, index) => <LetterBox key={index} letter={letter} />)
    // }

    return (
        <div className="letter-row">
            {letterBoxes}
        </div>
    )
}

export default Row