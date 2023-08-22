import { configureStore } from "@reduxjs/toolkit"
import guessesReducer from '../features/guessesSlice'
import wordsReducer from '../features/wordsSlice'

export default configureStore({
    reducer: {
        guesses: guessesReducer,
        words: wordsReducer,
    }
})