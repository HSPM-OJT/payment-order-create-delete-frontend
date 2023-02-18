import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_SHIPPINGADDRESSES = "http://localhost:8383/api/shippingAddress/all"
const POST_NEW_SHIPPINGADDRESSES = "http://localhost:8383/api/shippingAddress/create"

export const fetchShippingAddresses = createAsyncThunk('shippingAddresses/fetchShippingAddresses ',async ()=> {
    const response = await axios.get(GET_ALL_SHIPPINGADDRESSES)
    return response.data
})

export const addNewShippingAddresses = createAsyncThunk('shippingAddresses/addNewShippingAddresses',)


const initialState ={
    shippingAddresses:[],
    status:'idle',
    error:null
}