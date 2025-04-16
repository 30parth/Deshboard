import { configureStore } from '@reduxjs/toolkit'
import { inputSlice } from './Input/inputSlice'
export const store = configureStore({
  reducer: {
    counter: inputSlice,
  },
})