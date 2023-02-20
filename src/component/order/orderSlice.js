import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_ORDERS = 'http://localhost:8383/api/order/all'
const POST_NEW_ORDERS= 'http://localhost:8383/api/order/create'
const DELETE_ORDERS = 'http://localhost:8383/api/order/delete/'

export const fetchOrders = createAsyncThunk('orders/fetchOrders',async ()=>{
    const response = await axios.get(GET_ALL_ORDERS)
    return response.data
})

export const addNewOrder = createAsyncThunk('orders/addNewOrder',async (data)=>{
    const response = await axios.post(POST_NEW_ORDERS,data.order)
    return response.data
})

export const deleteOrder = createAsyncThunk('orders/deleteOrder',async (id)=>{
    const response = await axios.delete(`${DELETE_ORDERS}${id}`)
    return response.data
})

const initialState ={
    orders:[],
    status:'idle',
    error:null
}

export const orderSlice = createSlice(
    {
        name:'orders',
        initialState,
        reducers:{
            addOrder:{
                reducer(state,action){
                    state.push(action.payload)
                },
                prepare(customerName,productName,price,quantity,subTotal,shippingCost,grandTotal/*,orderDate,updateDate*/){
                    return{
                        payload:{
                            customerName,
                            productName,
                            price,
                            quantity,
                            subTotal,
                            shippingCost,
                            grandTotal,
                            // orderDate,
                            // updateDate
                        }
                    }
                }
            }
        },
        extraReducers(builder){
            builder
            .addCase(fetchOrders.pending,(state,action)=>{
                state.status = 'loading'
            })
            .addCase(fetchOrders.fulfilled,(state,action)=>{
                state.status = 'succeeded'

                state.orders = action.payload
            })
            .addCase(fetchOrders.rejected,(state,action)=>{
                
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewOrder.fulfilled,(state,action)=>{
                state.orders.push(action.payload)
            })
            .addCase(deleteOrder.fulfilled,(state,action)=>{
                const orders = state.orders.filter(p => p.id !== Number(action.payload))
                state.orders= orders
            })

        }
    }
);

export const selectAllOrders = (state) => state.orders.orders
export const getOrderStatus = (state) => state.orders.status
export const getOrderError = (state) => state.orders.error


export const { addOrder } = orderSlice.actions
export default orderSlice.reducer