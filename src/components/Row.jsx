import LetterBox from "./letterBox"

const Row = () => {
    const letterVals = ["A", "B", "C", "D", "E"] // <-- State data
    const letterBoxes = letterVals.map(letter => <LetterBox key={letter} letter={letter} />)

    return (
        <div className="letter-row">
            {letterBoxes}
        </div>
    )
}

export default Row