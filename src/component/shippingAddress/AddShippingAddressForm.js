import { useDispatch } from "react-redux"
import { useState } from "react"
import { addNewShippingAddress } from "./shippingAddressSlice"


function AddShippingAddressForm(){

    const [street,setStreet] = useState('')
    const [township,setTownship]= useState('')
    const [city,setCity]= useState('')
    const [postalCode,setPostalCode]= useState('')
    const [addRequestStatus,setAddRequestStatus] = useState('idle')

    const onStreetChange = e => setStreet(e.target.value)
    const onTownshipChange = e => setTownship(e.target.value)
    const onCityChange = e => setCity(e.target.value)
    const onPostalCodeChange = e => setPostalCode(e.target.value)

    const canSave = [street,township,city,postalCode].every(Boolean) && addRequestStatus === 'idle'

    const dispatch = useDispatch()


    const onSubmit = (event)=>{
        event.preventDefault()

        if(canSave){
            try {
                setAddRequestStatus('pending')
                
                dispatch(
                    addNewShippingAddress({
                        street,
                        township,
                        city,
                        postalCode
                    })
                ).unwrap()
            } catch (error) {
                console.log(error)
                
            }finally{
                setAddRequestStatus('idle')
            }

        setStreet('')
        setTownship('')
        setCity('')
        setPostalCode('')
        }

    }

    

    

    return   (

<main>
    <div className="container">
        <div className="row">

            <div className="col-md-4 shippingAddress-md-1">
            </div>
        
            <div className="col-md-7 shippingAddress-md-1">
                <h4 className="col-md-6 mb-3 text-center">Add ShippingAddress Form</h4>
                <form onSubmit={onSubmit} >

                
                <div className="col-md-6 mb-3">
                <label htmlFor="street">Street</label>
                    {/* <select class="" id="street" required>
                        <option value="">Choose...</option>
                        <option>Mynamar</option>
                    </select> */}
                    <input className="d-block w-100 form-control" type="text" required 
                    value={street}
                    onChange={onStreetChange}
                    ></input>
                    
                </div>
          
                <div className="col-md-6 mb-3">
                    <label htmlFor="township">Township</label>
                    <input type="text" className="form-control" required 
                        value={township}
                        onChange={onTownshipChange}>
                    </input>
                    {/* <div className="invalid-feedback">
                        Card Number is required
                    </div> */}
                </div>

                <div className="row">
                <div className="col-md-6 mb-3">
                <label htmlFor="country">City</label>
                    <select class="custom-select d-block w-100 form-control" id="country" required 
                    value={city} 
                    onChange={onCityChange}
                    >
                        <option value="">Choose...</option>
                        <option>Yangon</option>
                        <option>Mandalay</option>
                        <option>Naypyitaw</option>
                        <option>Others</option>
                    </select>
                <div class="invalid-feedback">
                    Please select a valid City.
                </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="postalCode">PostalCode</label>
                    <input className="d-block w-100 form-control" type="text" value={postalCode}
                    onChange={onPostalCodeChange}
                    ></input>
                </div>
                </div>

                <div className="text-center col-md-6 mb-3">
                    <button class="btn btn-primary btn-lg btn-block text-center" type="submit" disabled={!canSave}>Continue to ShippingAddress</button>
                </div>
                

                </form>
            
            </div>
        </div>
    </div>
    <br />
</main> 
    )
}

export default AddShippingAddressForm