import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './features/Input/inputSlice'
import authReducer from './features/auth/authSlice'

export default configureStore({
  reducer: {
    input: inputReducer,
    auth: authReducer,
  }
})