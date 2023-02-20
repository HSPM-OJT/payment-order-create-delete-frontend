import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import PaymentItem from "./PaymentItem";
import { selectAllPayments , getPaymentError,getPaymentStatus, fetchPayments} from "./paymentSlice";

function PaymentList(){

    const dispatch = useDispatch();

    const payments = useSelector(selectAllPayments);
    const paymentStatus = useSelector(getPaymentStatus);
    const error = useSelector(getPaymentError);

    useEffect(()=>{
        if(paymentStatus === 'idle'){
            dispatch(fetchPayments())
        }
    },[paymentStatus,dispatch]);


    let content;

    if(paymentStatus === 'loading'){ 
        content = (<p>Loading........</p>)
    }

    if(paymentStatus === 'succeeded'){
        console.log()
        content = payments.map(
            (payment)=>(
                <PaymentItem
                paymentId={payment.paymentId}
                cardNumber={payment.cardNumber}
                cvc={payment.cvc}
                holderName={payment.holderName}
                cardType={payment.cardType}
                expireDate={payment.expireDate}
                    
                />)
          
            );
    }

    if(paymentStatus === 'failed'){
        content = (<p>{error}</p>);
    }

    return content;
}
export default PaymentList;