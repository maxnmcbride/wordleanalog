// Redux logic for guess feature
import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id: '1', letterVals: ["", "", "", "", ""]}
]

const guessesSlice = createSlice({
    name: 'guesses',
    initialState,
    reducers: {}
})

export default guessesSlice.reducer