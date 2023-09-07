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
        },
        resetGuesses(state) {
            return state.filter(guess => guess.id === '1')
        }
    }
})

export const { addGuess, resetGuesses } = guessesSlice.actions
export default guessesSlice.reducer