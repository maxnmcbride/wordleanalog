import { useSelector } from "react-redux/es/hooks/useSelector"
import LetterBox from "./LetterBox"

const Row = (guessIndex) => {
    const guesses = useSelector(state => state.guesses)

    const tempLetters = ["", "", "", "", ""]
    let count = 0

    let letterBoxes = tempLetters.map((letter, index) => 
        <LetterBox 
            key={index} 
            letter={letter}
            letterIndex={count}
        />,
        count++
    )

    console.log(count)

    if (guesses.hasOwnProperty(guessIndex.guessIndex)) {
        const guess = guesses[guessIndex.guessIndex].letterVals
        letterBoxes = guess.map((letter, index) =>         
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