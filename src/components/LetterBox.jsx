const LetterBox = (letter) => {
    // TODO: state variable to control box color
    return (
        <div className="letter-box">
            <p className="display-letter">
                {letter.letter}
            </p>
        </div>
    )
}

export default LetterBox