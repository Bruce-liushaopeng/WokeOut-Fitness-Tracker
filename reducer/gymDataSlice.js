import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../dummy";

const gymDataSlice = createSlice({
  name: "gymData",
  initialState,
  reducers: {
    incremented: (state) => {
      console.log("increment called ");
      state.value += 1;
    },
    decremented: (state) => {
      console.log("decrement called");
      state.value -= 1;
    },
    multipliedBy: (state, action) => {
      const { number } = action.payload;
      state.value *= number;
    },
    addNewWorkOut: (state, action) => {
      const { workout } = action.payload;
      state.workOutData.push(workout);
      console.log(state.workOutData)
    },
  },
});

export const { incremented, decremented, multipliedBy, addNewWorkOut } = gymDataSlice.actions;
export default gymDataSlice;
