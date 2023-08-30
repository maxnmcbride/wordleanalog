import { useSelector } from "react-redux/es/hooks/useSelector"

const LetterBox = ({letter, letterIndex}) => {
    const word = useSelector(state => state.words[0].word)

    let bgColor = ""

    if (letter !== "") bgColor = "grey"

    if (letter !== "" && word.includes(letter)) {
        bgColor = "goldenrod" // #B59F3B <-- Official Wordle™ color
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