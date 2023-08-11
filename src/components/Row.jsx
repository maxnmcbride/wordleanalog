import LetterBox from "./LetterBox"

const Row = (guess) => {
    // const letterVals = ["A", "B", "C", "D", "E"] // <-- State data
    const letterVals = ["", "", "", "", ""]
    
    let letterBoxes = letterVals.map((letter, index) => <LetterBox key={index} letter={letter} />)

    if (guess.guess) {
        letterBoxes = guess.guess.map((letter, index) => <LetterBox key={index} letter={letter} />)
    }

    return (
        <div className="letter-row">
            {letterBoxes}
        </div>
    )
}

export default Row