import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      console.log("increment called ")
      state.value += 1
    },
    decremented: state => {
      console.log("decrement called")
      state.value -= 1
    },
    multipliedBy: (state, action) => {
      const { number } = action.payload;
      state.value *= number;
    }
  }
})

export const { incremented, decremented, multipliedBy } = counterSlice.actions
export default counterSlice
