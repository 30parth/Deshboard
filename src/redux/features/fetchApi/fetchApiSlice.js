import { applyStyles } from "@popperjs/core";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"

export const fetchData = createAsyncThunk('fetchData',
     async() =>{
        const res = await axios.get("https://fakestoreapi.com/products");
        return res.data
     })
export const postData = createAsyncThunk("postData", 
    async(data) => {
        const res = await axios.post("https://fakestoreapi.com/products",data)
        return res
    }
)
export const fetchApiSlice = createSlice({
    name:"fetchApi",
    initialState : {
        res: "",
        data : [],
        isError : false,
    },
    reducers:{
        addProduct:(state,action) => {
            state.data.push(action.payload);
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchData.fulfilled , (state, action) => {
            state.data = action.payload;
            state.isError = false;
        }) 
        builder.addCase(postData.fulfilled ,(state,action) =>{
            state.res = action.payload
        })
    }
})

export const { addProduct } = fetchApiSlice.actions;
 
export default fetchApiSlice.reducer