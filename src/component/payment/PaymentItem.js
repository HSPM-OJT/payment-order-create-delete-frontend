import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deletePayment } from "./paymentSlice"

function PaymentItem(props){


    const dispatch = useDispatch()

    return(



    <div class="container-fluid py-9" >
        <div class="container">
            
            <div class="row g-10">
                <div class="col-lg-4 col-md-6">
                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                       
                        <span class="ml-0  align-items-left">Id : {props.paymentId}</span>
                        <h4 class="mb-3">Holder Name : {props.holderName}</h4>
                        <p class="m-0">CardNumber : {props.cardNumber}</p>
                        <p class="m-0">CVC : {props.cvc}</p>
                        <p class="m-0">CardType : {props.cardType}</p>
                        <p class="m-0">ExpireDate : {props.expireDate}</p>
                        
                       <tr>  
                        <Link to={`/payment/update/${props.paymentId}`} >
                            <input type="submit" value = "Edit"/>
                        </Link>
                      
                         <a onClick={()=>{dispatch(deletePayment(props.paymentId))}}>
                        <input type="submit" value = "Delete"/></a>
                        </tr>  

                        <br />

                    </div>
                </div>
               
            </div>
        </div>
    </div>
    

    //     <div class="container">
    //         <h5 className="text-center">Payment form</h5>
    //         <div className="card card-body container bg-light shadow mb-3">
        
    //             <div className="row">
    //                 <div className="col-3 mb-2">
    //                     <span>Card Number:{props.cardNumber}</span>
    //                 </div>
    //         <div className="col-3 mb-2">
    //             <h5>CVC:{props.cvc}</h5>
    //         </div>
    //         <div className="col-2 mb-2">
    //             <h5>Holder Name:{props.holderName}</h5>
    //         </div>
    //         <div className="col-2 mb-2">
    //             <h5>Card Type:{props.cardType}</h5>
    //         </div>
    //         <div className="col-2 mb-2">
    //             <h5>Expire Date:{props.expireDate}</h5>
    //         </div>
    //     </div>
    //         <br />
    //         <div className="row">
    //             <div className="col-3 mb-3">
    //                 Card Number
    //             </div>
    //             <div className="col-2 mb-2">
    //                 CVC
    //             </div>
    //             <div className="col-2 mb-2">
    //                 Holder Name
    //             </div>

    //             <div className="col-2 mb-2">
    //                 Card Type
    //             </div>

    //             <div className="col-2 mb-2">
    //                 Expire Date
    //             </div>
    //         </div>
    //         <div className="row mb-5">
    //             <div className="col-5 mb-2">
    //             {props.cardNumber}
    //             </div>
    //             <div className="col-3 mb-2">
    //             {props.cvc}
    //             </div>
    //             <div className="col-2 mb-2">
    //                 {props.holderName}
    //             </div>

    //             <div className="col-2 mb-2">
    //                 {props.cardType}
    //             </div>
    //             <div className="col-2 mb-2">
    //                 {props.expireDate}
    //             </div>

    //         </div>

 
       
    // </div>
    // </div>
    )
}

export default PaymentItem