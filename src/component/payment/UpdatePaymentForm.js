import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { updatePayment,  selectPaymentById } from "./paymentSlice";
import { useParams } from "react-router-dom";


function UpdatePaymentForm(props){

    const { id }  = useParams() //{key = App.js ka param key}
    const payment = useSelector((state)=>selectPaymentById(state,Number(id)))

    console.log(id);
    console.log(payment)


    const [paymentId,setPaymentId] = useState(payment?.paymentId)
    const [cardNumber,setCardNumber] = useState(payment?.cardNumber)
    const [cvc,setCVC] = useState(payment?.cvc)
    const [holderName,setHolderName] = useState(payment?.holderName)
    const [cardType,setCardType] = useState(payment?.cardType)
    const [expireDate,setExpireDate] = useState(payment?.expireDate)
    const [addRequestStatus,setAddRequestStatus] = useState('idle') //can't repeadly click the save button (initialize 'idle')

    const onPaymentIdChange = e => setPaymentId(e.target.value)
    const onCardNumberChange = e => setCardNumber(e.target.value)
    const onCVCChange = e => setCVC(e.target.value)
    const onHolderNameChange = e => setHolderName(e.target.value)
    const onCardTypeChange = e => setCardType(e.target.value)
    const onExpireDateChange = e => setExpireDate(e.target.value)

    const canSave = [paymentId,cardNumber,cvc,holderName,cardType,expireDate].every(Boolean) && addRequestStatus === 'idle'
    const isEdit = props.mode === 'edit'

    const dispatch = useDispatch()

    const onSubmit = (event)=>{
        event.preventDefault()

        if(canSave){
            try {
                setAddRequestStatus('pending')
                console.log('In the save ')

                dispatch(
                    updatePayment({ //{ object}
                            paymentId,
                            cardNumber,
                            cvc,
                            holderName,
                            cardType,
                            expireDate
                        
                }),
            );
                
            } catch (error) {
                console.log(error)
                
            }finally{
                setAddRequestStatus('idle')
            }

            
        

        //form clean 
        setPaymentId('')
        setCardNumber('')
        setCVC('')
        setHolderName('')
        setCardType('')
        setExpireDate('')
    }
    console.log(canSave)

    }
   

    

    return(

 <main>
    <div className="container">
        <div className="row">

            <div className="col-md-4 payment-md-1">
            </div>
        
            <div className="col-md-7 payment-md-1">
                <h4 className="col-md-6 mb-3 text-center">Update Payment Form</h4>
                <form onSubmit={onSubmit} >

                
                <div className="col-md-6 mb-3">
                    <label htmlFor="cardNumber">ID</label>
                    <input type="text" className="form-control" required 
                        value={paymentId}
                        onChange={onPaymentIdChange}
                        /*disabled={props.mode === 'update'} //no need because of separate update form and create form */
                        disabled={isEdit}
                        >
                    </input>
                    <div className="invalid-feedback">
                        Card Number is required
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="holderName">Holder Name</label>
                    <input type="text" className="form-control" required 
                        value={holderName}
                        onChange={onHolderNameChange}>
                    </input>
                    <small class="text-muted">Full name as displayed on card</small>
                    <div className="invalid-feedback">
                        Holder Name is required
                    </div>
                </div>
          
                <div className="col-md-6 mb-3">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" className="form-control" required 
                        value={cardNumber}
                        onChange={onCardNumberChange}>
                    </input>
                    <div className="invalid-feedback">
                        Card Number is required
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="cvc">CVC</label>
                    <input type="text" className="form-control" required 
                        value={cvc}
                        onChange={onCVCChange}>
                    </input>
                    <div className="invalid-feedback">
                        CVC Number is required
                    </div>
                </div>

                

                <div className="col-md-6 mb-3">
                    <label htmlFor="holderName">Card Type</label>
                    <input type="text" className="form-control" required 
                        value={cardType}
                        onChange={onCardTypeChange}>
                    </input>
                    
                    <div className="invalid-feedback">
                        Card Type is required
                    </div>
                </div>

                
                
                <div className="col-md-6 mb-3">
                    <label htmlFor="expireDate">Expire Date</label>
                    <input type="date" className="form-control" required 
                        value={expireDate}
                        onChange={onExpireDateChange}
                        disabled={isEdit}>
                    </input>
                </div>

               

                
             
                <div className="text-center col-md-6 mb-3">
                    <button class="btn btn-primary btn-lg btn-block text-center" type="submit" disabled={!canSave}>Update Payment</button>
                </div>
                

                </form>
            
            </div>
        </div>
    </div>
    <br />
</main> 

    );

    }


export default UpdatePaymentForm






 