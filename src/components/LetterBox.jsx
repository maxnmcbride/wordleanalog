const LetterBox = (letter) => {
    return (
        <div className="letter-box">
            <p className="display-letter">
                {letter.letter}
            </p>
        </div>
    )
}

export default LetterBox