import { useDispatch } from "react-redux"
import { useState } from "react";
import { addNewPayment } from "./paymentSlice";


function AddPaymentForm(){

    const [cardNumber,setCardNumber] = useState('')
    const [cvc,setCVC] = useState('')
    const [holderName,setHolderName] = useState('')
    const [cardType,setCardType] = useState('')
    const [expireDate,setExpireDate] = useState('')
    const [addRequestStatus,setAddRequestStatus] = useState('idle') //can't repeadly click the save button (initialize 'idle')

    
    const onCardNumberChange = e => setCardNumber(e.target.value)
    const onCVCChange = e => setCVC(e.target.value)
    const onHolderNameChange = e => setHolderName(e.target.value)
    const onCardTypeChange = e => setCardType(e.target.value)
    const onExpireDateChange = e => setExpireDate(e.target.value)

    const canSave = [cardNumber,cvc,holderName,cardType,expireDate].every(Boolean) && addRequestStatus === 'idle'


    const dispatch = useDispatch()

    const onSubmit = (event)=>{
        event.preventDefault()

        if(canSave){
            try {
                setAddRequestStatus('pending')

                dispatch(
                    addNewPayment({ //{ object}
                            cardNumber,
                            cvc,
                            holderName,
                            cardType,
                            expireDate
                        
                })).unwrap()
                
            } catch (error) {
                console.log(error)
                
            }finally{
                setAddRequestStatus('idle')
            }

            
        

        //form clean 
        setCardNumber('')
        setCVC('')
        setHolderName('')
        setCardType('')
        setExpireDate('')
    }

    }
   

    

    return(

 <main>
    <div className="container">
        <div className="row">

            <div className="col-md-4 payment-md-1">
            </div>
        
            <div className="col-md-7 payment-md-1">
                <h4 className="col-md-6 mb-3 text-center">Add Payment Form</h4>
                <form onSubmit={onSubmit} >

                
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
                        onChange={onExpireDateChange}>
                    </input>
                </div>

               

                
             
                <div className="text-center col-md-6 mb-3">
                    <button class="btn btn-primary btn-lg btn-block text-center" type="submit" disabled={!canSave}>Continue to Payment</button>
                </div>
                

                </form>
            
            </div>
        </div>
    </div>
    <br />
</main> 

//      <main>
//          <div className="container">
//              <div className="row">
//                  <div className="col-md-3 payment-md-1">
//                 </div>

//                  <div className="col-md-7 payment-md-1">
               
//                  <form onSubmit={ onSubmit } >
            
//                      <h4 class="text-center">Add Payment Form</h4>

//                     <div className="col-md-6 mb-3">
//                          <label htmlFor="cc-number">Card number</label>
//                          <input 
//                             type="text" 
//                             class="form-control" 
//                             id="cc-number" 
//                             placeholder="Card Number" 
//                             value={cardNumber}
//                             onChange={onCardNumberChange}
//                            />
//                         <div className="invalid-feedback">
//                         Credit card number is required
//                         </div>
//                     </div>

//                     <div className="col-md-6 mb-3">
//                         <label htmlFor="cc-cvv">CVC</label>
//                         <input 
//                             type="text" 
//                             class="form-control" 
//                             id="cc-cvv" 
//                             placeholder="CVC"
//                             value={cvc}
//                             onChange={onCVCChange} 
//                              />
                        
//                          <div className="invalid-feedback">
//                              Security code required
//                          </div>
//                      </div>

//                  <div className="row">
//                      <div className="col-md-6 mb-3">
//                          <label htmlFor="cc-name">Name on card</label>
//                          <input 
//                             type="text" 
//                             class="form-control" 
//                             id="cc-name" 
//                             placeholder="Holder Name" 
//                             value={holderName}
//                             onChange={onHolderNameChange}
//                              />
//                         <small class="text-muted">Full name as displayed on card</small>
//                         <div class="invalid-feedback">
//                         Name on card is required
//                         </div>
//                     </div>

                    
//                  </div>

//                  <div className="row">
//                      <div className="col-md-6 mb-3">
//                          <label htmlFor="cc-name">Name on card</label>
//                          <input 
//                             type="text" 
//                             class="form-control" 
//                             id="cc-name" 
//                             placeholder="Holder Name" 
//                             value={cardType}
//                             onChange={onCardTypeChange}
//                              />
//                         <small class="text-muted">Full name as displayed on card</small>
//                         <div class="invalid-feedback">
//                         Name on card is required
//                         </div>
//                     </div>
//                     </div>

//  { <div class="d-block mt-5 text-center">
//                      <div className="custom-control custom-radio d-inline me-5">
//                          <input 
//                              id="credit" 
//                             name="paymentMethod" 
//                             type="radio" 
//                             class="custom-control-input" 
//                             placeholder="Credit card" 
//                             value={cardType}
//                             onChange={onCardTypeChange} 
//                               />
//                          <label class="custom-control-label ps-2" htmlFor="credit"> Credit card</label>
//                      </div>

//                      <div className="custom-control custom-radio d-inline me-5">
//                          <input 
//                             id="visa" 
//                             name="paymentMethod" 
//                             type="radio" 
//                             class="custom-control-input" 
//                             value={cardType}
//                             onChange={onCardTypeChange} 
//                              />
//                          <label class="custom-control-label ps-2" htmlFor="visa"> Visa card</label>
//                      </div>

//                      <div className="custom-control custom-radio d-inline me-5">
//                         <input id="mpu" 
//                         name="paymentMethod" 
//                         type="radio" 
//                         class="custom-control-input" 
//                         value={cardType}
//                         onChange={onCardTypeChange} 
//                          />
//                         <label class="custom-control-label ps-2" htmlFor="mpu"> MPU</label>
//                     </div>

//                 <div></div>
//                 <br />

//                      <div className="custom-control custom-radio d-inline me-5">
//                         <input 
//                             id="master" 
//                             name="paymentMethod" 
//                             type="radio" 
//                             class="custom-control-input" 
//                             value={cardType}
//                             onChange={onCardTypeChange} 
//                              />
//                         <label class="custom-control-label ps-2" htmlFor="master">Master card</label>
//                     </div>

//                     <div className="custom-control custom-radio d-inline me-5">
//                         <input 
//                             id="jcb" 
//                             name="paymentMethod" 
//                             type="radio" 
//                             class="custom-control-input" 
//                             value={cardType}
//                             onChange={onCardTypeChange} 
//                              />
//                         <label class="custom-control-label ps-2" htmlFor="jcb"> JCB card</label>
//                     </div>

//                     <div className="custom-control custom-radio d-inline me-4">
//                         <input 
//                             id="upi" 
//                             name="paymentMethod" 
//                             type="radio" 
//                             class="custom-control-input" 
//                             value={cardType}
//                             onChange={onCardTypeChange} 
//                              />
//                         <label class="custom-control-label ps-2" htmlFor="upi"> UPI card</label>
//                     </div> 
//                 </div> */}
//                 <div className="row">
//                     <div className="col-md-6 mb-3">
//                         <label htmlFor="cc-expiration">Expiration</label>
//                         <input 
//                             type="date" 
//                             class="form-control" 
//                             id="cc-expiration" 
//                             placeholder="" 
//                             value={expireDate}
//                             onChange={onExpireChange}
//                              />
//                         <div className="invalid-feedback">
//                             Expiration date required
//                         </div>
//                     </div>

                    
//                 </div>

                
//                 <br />
//                 <div className="text-center">
//                     <button class="btn btn-primary btn-lg btn-block text-center" type="submit" disabled={!canSave}>Continue to Payment</button>
//                 </div>
                
                
            
//                 </form>
                
//             </div>
            
//         </div>
//         </div>

//             <br />
//     </main>
    );

    }


export default AddPaymentForm






 