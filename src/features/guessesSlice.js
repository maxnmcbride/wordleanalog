// Redux logic for guess feature
import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id: '1', letterVals: ["", "", "", "", ""]}
]

const guessesSlice = createSlice({
    name: 'guesses',
    initialState,
    reducers: {
        addGuess(state, action) {
            state.push(action.payload)
        }
    }
})

export const { addGuess } = guessesSlice.actions
export default guessesSlice.reducer