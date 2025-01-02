import { createSlice } from '@reduxjs/toolkit'

export const displaySlice = createSlice({
  name: 'display',
  initialState: {
    value: 0,
  },
  reducers: {
    displayLog: (state, action) => {
      console.log(action.payload)
    },
  },
})

export const { displayLog } = displaySlice.actions

export default displaySlice.reducer