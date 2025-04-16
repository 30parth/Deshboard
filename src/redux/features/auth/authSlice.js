import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: true,
    userName : 'Company Name',
  },
  reducers: {
    setAuthValue : (state,action) =>{
        state.isLogin = action.payload
    },    
    setUserName :(state , action) => {
        state.userName = action.payload
    }
  }
})

export const { setAuthValue ,setUserName } = authSlice.actions

export default authSlice.reducer