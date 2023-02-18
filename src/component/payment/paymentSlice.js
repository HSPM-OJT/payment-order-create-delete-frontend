import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const GET_ALL_PAYMENTS = 'http://localhost:8383/api/payment/all'
const POST_NEW_PAYMENTS = 'http://localhost:8383/api/payment/create'
const DELETE_PAYMENTS = 'http://localhost:8383/api/payment/delete/'


export const fetchPayments = createAsyncThunk('payments/fetchPayments',async ()=> {
    const response = await axios.get(GET_ALL_PAYMENTS)
    return response.data
})

export const addNewPayment = createAsyncThunk('payments/addNewPayment',async (initialPayment)=>{
    const response = await axios.post(POST_NEW_PAYMENTS,initialPayment)
    return response.data
})

export const updatePayment = createAsyncThunk('payments/updatePayment',async (data)=>{
    const response = await axios.post(POST_NEW_PAYMENTS,data)
    return response.data
})

export const deletePayment = createAsyncThunk('payments/deletePayment',async (id)=>{
    const response = await axios.delete(`${DELETE_PAYMENTS}${id}`)
    return response.data
})



const initialState ={//object

    payments:[],
    status:'idle',
    error:null

}

// [
//     { cardNumber: '1111111111111111',
//     cvc:'1111111111111111',
//     holderName:'Ba Ba',
//     cardType:'Credit',
//     expireDate:"2023-01-02"

// },
// {
//      cardNumber: '0000000000000000',
// cvc:'0000000000000000',
// holderName:'Ma Ma',
// cardType:'Visa',
// expireDate:"2020-05-12"

// }
// ]


export const paymentSlice = createSlice(
    {
        name:'payments',
        initialState,
        reducers:{
            addPayment:{
            reducer(state,action){
                state.push(action.payload);

            },
            prepare(cardNumber,cvc,holderName,cardType,expireDate){
                return {
                    payload:{
                    
                    cardNumber,
                    cvc,
                    holderName,
                    cardType,
                    expireDate
                    }

                }
            }
            
        }

        },
        extraReducers(builder){
            builder
                .addCase(fetchPayments.pending,(state,action)=>{
                    state.status = 'loading'
                })
                .addCase(fetchPayments.fulfilled,(state,action)=>{
                    state.status = "succeeded"

                    state.payments = action.payload
                })
                .addCase(fetchPayments.rejected,(state,action)=>{
                    state.status = 'failed'

                    state.error = action.error.message;
                })
                .addCase(addNewPayment.fulfilled,(state,action)=>{

                    state.payments.push(action.payload)
                })
                .addCase(addNewPayment.rejected,(state,action)=>{
                    state.status = 'failed'

                    state.error = action.error.message;
                })
                .addCase(updatePayment.fulfilled,(state,action)=>{
                    const payment = action.payload
                    const payments = state.payments.filter(p => p.id !== payment.paymentId)
                    state.payments = [payment,...payments]
                    
                })
                .addCase(deletePayment.fulfilled,(state,action)=>{
                    const payments = state.payments.filter(p => p.id !== Number(action.payload))
                    state.payments= payments
                })
                
                

        }
        
    }
);

export const selectAllPayments = (state) => state.payments.payments
export const getPaymentStatus = (state) => state.payments.status
export const getPaymentError = (state) => state.payments.error
export const selectPaymentById = (state,id) => state.payments.payments.find(project => project.paymentId === id)

export const { addPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
 
  

