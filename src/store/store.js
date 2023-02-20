import { configureStore } from "@reduxjs/toolkit";
import orderReducer from '../component/order/orderSlice'
import paymentReducer from '../component/payment/paymentSlice'
import shippingAddressReducer from '../component/shippingAddress/shippingAddressSlice'



export const store = configureStore({
    reducer:{
        orders:orderReducer,
        payments:paymentReducer,
        shippingAddresses:shippingAddressReducer
        
        
    }
})