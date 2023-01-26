import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../auth/authSlice'
import authReducer from '../users/userSlice'

export const store = configureStore({
    reducer:{
        users:userReducer,
        auths:authReducer,
    }
})