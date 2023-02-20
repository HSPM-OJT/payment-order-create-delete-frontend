import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_SHIPPINGADDRESSES = "http://localhost:8383/api/shippingAddress/all"
const POST_NEW_SHIPPINGADDRESSES = "http://localhost:8383/api/shippingAddress/create"
const DELETE_SHIPPINGADDRESSES = "http://localhost:8383/api/shippingAddress/delete"


export const fetchShippingAddresses = createAsyncThunk('shippingAddresses/fetchShippingAddresses ',async ()=> {
    const response = await axios.get(GET_ALL_SHIPPINGADDRESSES)
    return response.data
})

export const addNewShippingAddress = createAsyncThunk('shippingAddresses/addNewShippingAddress',async (initialShippingAddress)=>{
    const response = await axios.get(POST_NEW_SHIPPINGADDRESSES,initialShippingAddress)
    return response.data

})

export const updateShippingAddress = createAsyncThunk('shippingAddresses/updateShippingAddress',async(data)=>{
    const response = await axios.post(POST_NEW_SHIPPINGADDRESSES,data)
    return response.data
})
export const deleteShippingAddress = createAsyncThunk('shippingAddresses/deleteShippingAddress',async (id)=>{
    const response = await axios.delete(`${DELETE_SHIPPINGADDRESSES}${id}`)
    return response.data
})


const initialState ={
    shippingAddresses:[],
    status:'idle',
    error:null
}

export const shippingAddressSlice = createSlice(
    {

        name:'shippingAddresses',
        initialState,
        reducers:{
            addShippingAddress:{
                reducer(state,action){
                    state.push(action.payload)
                },
            
                prepare(street,township,city,postalCode){
                    return{
                        payload:{
                            street,
                            township,
                            city,
                            postalCode
                    }
                }
            }
        }
    },
        extraReducers(builder){
            builder
            .addCase(fetchShippingAddresses.pending,(state,action)=>{
                state.status = 'loading'
            })
            .addCase(fetchShippingAddresses.fulfilled,(state,action)=>{
                state.status = 'succeeded'

                state.shippingAddresses = action.payload
            })
            .addCase(fetchShippingAddresses.rejected,(state,action)=>{
                state.status = 'failed'

                state.error = action.error.message;
            })
            .addCase(addNewShippingAddress.fulfilled,(state,action)=>{

                state.shippingAddresses.push(action.payload)
            })
            .addCase(updateShippingAddress.fulfilled,(state,action)=>{
                const shippingAddress = action.payload
                const shippingAddresses = state.shippingAddresses.filter(p => p.id !== shippingAddress.shippingAddressId)
                state.shippingAddresses = [shippingAddress,...shippingAddresses]
            })
            .addCase(deleteShippingAddress.fulfilled,(state,action)=>{
                const shippingAddresses = state.shippingAddresses.filter(p => p.id !== Number(action.payload))
                    state.shippingAddresses= shippingAddresses
            })
            
        

    }
}
  
);


export const selectAllShippingAddresses = (state) => state.shippingAddresses.shippingAddresses
export const getShippingAddressStatus = (state) => state.shippingAddresses.status
export const getShippingAddressError = (state) => state.shippingAddresses.error
export const selectShippingAddressById = (state,id) => state.shippingAddresses.shippingAddresses.find(shippingAddress =>shippingAddress.shippingAddressId === id)

export const { addShippingAddress } = shippingAddressSlice.actions
export default shippingAddressSlice.reducer
