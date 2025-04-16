import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    query: '',
    data: [],
    filteredData:[],
}

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
      setData: (state, action) => {
        state.data = action.payload;
        state.filteredData = action.payload;
      },
      setQuery: (state, action) => {
        state.query = action.payload;
        state.filteredData = state.data.filter(item =>
          item.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      },
    },
  });
  

export const { setData, setQuery } = inputSlice.actions;
export default inputSlice.reducer