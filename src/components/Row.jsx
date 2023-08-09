import LetterBox from "./letterBox"

const Row = (guess) => {
    // const letterVals = ["A", "B", "C", "D", "E"] // <-- State data
    const letterVals = ["", "", "", "", ""]
    const testWord = "testy"
//  console.log(guess)
    for (let i = 0; i < guess.length; i++) {
        letterVals[i] = guess[i].toUpperCase()
    }

    const letterBoxes = letterVals.map((letter, index) => <LetterBox key={index} letter={letter} />)

    return (
        <div className="letter-row">
            {letterBoxes}
        </div>
    )
}

export default Row