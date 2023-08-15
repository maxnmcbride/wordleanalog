const LetterBox = (letter) => {
    // TODO: state variable to control box color
    return (
        <div className="letter-box">
            <p className="display-letter">
                {letter ? letter.letter : null}
            </p>
        </div>
    )
}

export default LetterBox