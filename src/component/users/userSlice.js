import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CREATE_USER = 'http://localhost:8383/api/user/create'
const GET_USER = 'http://localhost:8383/api/user/all'

export const createUser = createAsyncThunk('users/createUser', async (user)=>{
    const response = await axios.post(CREATE_USER,user)
    return response.data
})
export const fetchUser = createAsyncThunk('users/fetchUser',async()=>{
    const response = await axios.get(GET_USER)
    return response.data
})

const initialState = {
    user:{},
    status:'active',
    error:null
}

export const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        prepare(fname,lname,email,phoneNumber){
            return{payload:{
                fname:fname,
                lname:lname,
                email:email,
                phoneNumber:phoneNumber,
            }
            }}
    },
    extraReducers(builder){
        builder
            .addCase(createUser.fulfilled,(state,actions)=>{
                console.log(actions.payload)
                const user = actions.payload
                state.user = user
            })
            .addCase(fetchUser.pending,(state,actions) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled,(state,actions)=>{
                state.status = 'succeeded';
                state.projects = actions.payload;
            })
            .addCase(fetchUser.rejected,(state,actions)=>{
                state.status = 'failed';
    
                state.error = actions.error.message;
            })
    }
        
})
export const getUserStatus = (state)=>state.user.status;
export const selectAllUser = (state)=>state.user.user;
export const getUserError = (state)=> state.user.error;

export const selectUserByEmail = (state,email) => state.user.user.find(user => user.email === email);

export default userSlice.reducer