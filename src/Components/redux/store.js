// store.js
import { configureStore } from '@reduxjs/toolkit';

import {YourReducer} from "./slice"


const store = configureStore({
  reducer: {
    errorReducer: YourReducer,
    // Add more reducers as needed
  },
});

export default store;
