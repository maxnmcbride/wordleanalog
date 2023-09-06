import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {id: '1', word: "TESTY", letterCount: {"T": 2, "E": 1, "S": 1, "Y": 1}}
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