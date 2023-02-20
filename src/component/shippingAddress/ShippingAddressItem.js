import { Link } from "react-router-dom"
function ShippingAddressItem(props){


    return(

        <div class="container-fluid py-9" >
        <div class="container">
            
            <div class="row g-10">
                <div class="col-lg-4 col-md-6">
                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        
                        <span class="ml-0  align-items-left">Id : {props.shippingAddressId}</span>
                        <p class="mb-3">Township : {props.township}</p>
                        <p class="mb-3">Street : {props.street}</p>
                        <p class="m-0">City : {props.city}</p><br />
                        <p class="m-0">PostalCode : {props.postalCode}</p>
                       
                        
                      
                        <Link to={`/shippingAddress/update/${props.shippingAddressId}`} >
                            <input type="submit" value = "Edit"/>
                        </Link>
                       {/*
                         <a onClick={()=>{dispatch(deletePayment(props.paymentId))}}>
                        <input type="submit" value = "Delete"/></a>
                        </tr>   */}

                       

                    </div>
                </div>
               
            </div>
        </div>
        <br />
    </div>

    )
}

export default ShippingAddressItem