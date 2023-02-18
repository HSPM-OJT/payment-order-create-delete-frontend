import { configureStore } from "@reduxjs/toolkit";
import orderReducer from '../component/order/orderSlice'
import paymentReducer from '../component/payment/paymentSlice'


export const store = configureStore({
    reducer:{
        orders:orderReducer,
        payments:paymentReducer,
        
    }
})