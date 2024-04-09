// slices/yourSlice.js
import { createSlice } from '@reduxjs/toolkit';

const yourSlice = createSlice({
  name: 'yourSlice',
  initialState: {
    errorMessage: null
  },
  reducers: {
    changeErrorMessage: (state, action) => {
      // Handle action and return new state
      return { ...state, errorMessage:action.payload.errorMessage};
    },
  },
});

export const YourReducer = yourSlice.reducer;

export const {  changeErrorMessage} = yourSlice.actions;

