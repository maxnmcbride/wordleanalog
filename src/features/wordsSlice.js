import { createSlice } from "@reduxjs/toolkit"

const initialWord = [
  {id: '1', word: "TESTY"}
]

const wordsSlice = createSlice({
  name: 'words',
  initialWord,
  reducers: {
      addWord(state, action) {
          state.push(action.payload)
      }
  }
})

export const { addWord } = wordsSlice.actions
export default wordsSlice.reducer