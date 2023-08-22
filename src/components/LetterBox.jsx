import { useSelector } from "react-redux/es/hooks/useSelector"

const LetterBox = (letter, letterIndex) => {
    // TODO: state variable to control box color

    const word = useSelector(state => state.words[0].word)
    // console.log(word.includes(letter.letter))
    // console.log(letter, 'letter')
    // console.log(letterIndex)


    return (
        <div className="letter-box">
            <p className="display-letter">
                {letter ? letter.letter : null}
            </p>
        </div>
    )
}

export default LetterBox