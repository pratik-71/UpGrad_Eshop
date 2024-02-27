// store.js
import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../reducer_functions/AuthSlice';


const Store = configureStore({
  reducer: {
    auth: AuthSlice
  },
});

export default Store

