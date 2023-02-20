import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNewOrder } from "./orderSlice"

function AddOrderForm(){

    const [customerName,setCustomerName] = useState('')
    const [productName,setProductName] = useState('')
    const [price,setPrice] = useState('')
    const [quantity,setQuantity] = useState('')
    const [subTotal,setSubTotal] = useState('')
    const [shippingCost,setShippingCost] = useState('')
    const [grandTotal,setGrandTotal] = useState('')
    const [orderDate,setOrderDate] = useState('')
    const [updateDate,setUpdateDate] = useState('')
    const [addRequestStatus,setAddRequestStatus] = useState('idle')

    const onCustomerNameChange = e=> setCustomerName(e.target.value)
    const onProductNameChange = e => setProductName(e.target.value)
    const onPriceChange = e => setPrice(e.target.value)
    const onQuantityChange = e => setQuantity(e.target.value)
    const onSubTotalChange = e => setSubTotal(e.target.value)
    const onShippingCostChange = e => setShippingCost(e.target.value)
    const onGrandTotalChange = e => setGrandTotal(e.target.value)
    const onOrderDateChange = e => setOrderDate(e.target.value)
    const onUpdateChange = e => setUpdateDate(e.target.value)

    const canSave = [customerName,productName,price,quantity,subTotal,shippingCost,grandTotal,orderDate,updateDate].every(Boolean) && addRequestStatus === 'idle'

    const dispatch = useDispatch()

    const onSubmit = (event)=>{
        event.preventDefault()

        if(canSave){
            try {
                setAddRequestStatus('pending')

                dispatch(
                    addNewOrder({//{ object}
                           order:{
                            customerName,
                            productName,
                            price,
                            quantity,
                            subTotal,
                            shippingCost,
                            grandTotal,
                            orderDate,
                            updateDate
                           } 
                        
                })).unwrap()
                
            } catch (error) {
                console.log(error)
                
            }finally{
                setAddRequestStatus('idle')
            }

            
        

        //form clean
        setCustomerName('') 
        setProductName('')
        setPrice('')
        setQuantity('')
        setSubTotal('')
        setShippingCost('')
        setGrandTotal('')
        setOrderDate('')
       setUpdateDate('')
        
    }

    }

    return(
        <main>
    <div className="container">
        <div className="row">

            <div className="col-md-4 payment-md-1">
            </div>
        
            <div className="col-md-7 payment-md-1">
                <h4 className="col-md-6 mb-3 text-center">Add Order Form</h4>
                <form onSubmit={onSubmit} >

                
                <div className="col-md-6 mb-3">
                    <label htmlFor="customerName">Customer Name</label>
                    <input type="text" className="form-control" required 
                        value={customerName}
                        onChange={onCustomerNameChange}>
                    </input>
                    
                </div>
          
                <div className="col-md-6 mb-3">
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" className="form-control" required 
                        value={productName}
                        onChange={onProductNameChange}>
                    </input>
                   
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" required 
                        value={price}
                        onChange={onPriceChange}>
                    </input>
                    
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="text" className="form-control" required 
                        value={quantity}
                        onChange={onQuantityChange}>
                    </input>
                    
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="subTotal">SubTotal</label>
                    <input type="text" className="form-control" required 
                        value={subTotal}
                        onChange={onSubTotalChange}>
                    </input>
                    
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="shippingCost">ShippingCost</label>
                    <input type="text" className="form-control" required 
                        value={shippingCost}
                        onChange={onShippingCostChange}>
                    </input>
                    
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="grandtotal">GrandTotal</label>
                    <input type="text" className="form-control" required 
                        value={grandTotal}
                        onChange={onGrandTotalChange}>
                    </input>
                    
                </div>



                
                <div className="col-md-6 mb-3">
                    <label htmlFor="expireDate">Order Date</label>
                    <input type="date" className="form-control" required 
                        value={orderDate}
                        onChange={onOrderDateChange}>
                    </input>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="expireDate">Update Date</label>
                    <input type="date" className="form-control" required 
                        value={updateDate}
                        onChange={onUpdateChange}>
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
    )
}

export default AddOrderForm