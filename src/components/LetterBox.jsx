import { useSelector } from "react-redux/es/hooks/useSelector"

const LetterBox = ({letter, letterIndex}) => {
    const word = useSelector(state => state.words[0].word)

    return (
        <div className="letter-box">
            <p className="display-letter">
                {letter}
            </p>
        </div>
    )
}

export default LetterBox