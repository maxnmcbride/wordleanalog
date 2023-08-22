import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {id: '1', word: "TESTY"}
]

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
      addWord(state, action) {
          state.push(action.payload)
      }
  }
})

export const { addWord } = wordsSlice.actions
export default wordsSlice.reducer