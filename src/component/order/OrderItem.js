import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteOrder } from "./orderSlice"


function OrderItem(props){
    const dispatch = useDispatch()


    return(

        <div class="container-fluid py-9" >
        <div class="container">
            
            <div class="row g-10">
                <div class="col-lg-4 col-md-6">
                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                       
                        <span class="ml-0  align-items-left">Id : {props.orderId}</span>
                        <h4 class="mb-3">Customer Name : {props.customerName}</h4>
                        <p class="m-0">Product Name : {props.productName}</p>
                        <p class="m-0">Price : {props.price}</p>
                        <p class="m-0">Quantity : {props.quantity}</p>
                        <p class="m-0">SubTotal : {props.subTotal}</p>
                        <p class="m-0">ShippingCost : {props.shippingCost}</p>
                        <p class="m-0">Grand total : {props.grandTotal}</p>
                        {/* <p class="m-0">OrderDate : {props.orderDate}</p>
                        <p class="m-0">UpdateOrder : {props.updateDate}</p> */}
                        
                        <tr>
                        <Link to={`/payment/create/${props.orderId}`} >
                            <input type="submit" value = "Payment"/>
                        </Link>

                        <a onClick={()=>{dispatch(deleteOrder(props.orderId))}}>
                        <input type="submit" value = "Delete"/></a>
                        </tr>
                       
                        
                       {/*   
                        <Link to={`/payment/update/${props.paymentId}`} >
                            <input type="submit" value = "Edit"/>
                        </Link>
                      
                         <a onClick={()=>{dispatch(deletePayment(props.paymentId))}}>
                        <input type="submit" value = "Delete"/></a>
                        </tr>   */}

                        <br />

                    </div>
                </div>
               
            </div>
        </div>
    </div>
    )
}

export default OrderItem
