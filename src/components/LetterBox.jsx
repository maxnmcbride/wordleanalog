import { useSelector } from "react-redux/es/hooks/useSelector"

const LetterBox = ({letter, letterIndex}) => {
    const wordData = useSelector(state => state.words[state.words.length - 1])
    const word = wordData.word
    const letterCount = wordData.letterCount

    let bgColor = ""

    if (letter !== "" && !word.includes(letter)) bgColor = "grey"

    if (letter !== "" && word.includes(letter)) {
        if (letterIndex !== letterCount[letter]) {
            bgColor = "goldenrod" // #B59F3B <-- Official Wordle™ color
        }
        if (word[letterIndex] === letter) {
            bgColor = "green"
        }
    }

    return (
        <div className="letter-box" style={{backgroundColor: `${bgColor}`}}>
            <p className="display-letter">
                {letter}
            </p>
        </div>
    )
}

export default LetterBox