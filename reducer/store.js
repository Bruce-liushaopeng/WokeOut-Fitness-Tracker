import { configureStore } from '@reduxjs/toolkit';
import gymDataSlice from './gymDataSlice';

const store = configureStore({
  reducer: {
    gymData: gymDataSlice.reducer
  },
});

export default store;
