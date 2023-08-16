import { configureStore } from "@reduxjs/toolkit"
import guessesReducer from '../features/guessesSlice'

export default configureStore({
    reducer: {
        guesses: guessesReducer
    }
})