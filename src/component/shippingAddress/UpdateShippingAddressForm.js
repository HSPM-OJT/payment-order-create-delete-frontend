import { useDispatch,useSelector } from "react-redux"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { selectShippingAddressById, updateShippingAddress } from "./shippingAddressSlice"


function UpdateShippingAddressForm(props){

    const {id } = useParams()
    const shippingAddress = useSelector((state)=>selectShippingAddressById(state,Number(id)))

    console.log(id)
    console.log(shippingAddress)

    const [shippingAddressId,setShippingAddressId] = useState(shippingAddress?.shippingAddressId)
    const [street,setStreet] = useState(shippingAddress?.street)
    const [township,setTownship]= useState(shippingAddress?.township)
    const [city,setCity]= useState(shippingAddress?.city)
    const [postalCode,setPostalCode]= useState(shippingAddress?.postalCode)
    const [addRequestStatus,setAddRequestStatus] = useState('idle')


    const onshippingAddressIdChange = e => setShippingAddressId(e.target.value)
    const onStreetChange = e => setStreet(e.target.value)
    const onTownshipChange = e => setTownship(e.target.value)
    const onCityChange = e => setCity(e.target.value)
    const onPostalCodeChange = e => setPostalCode(e.target.value)

    const canSave =[shippingAddressId,street,township,city,postalCode].every(Boolean) && addRequestStatus ==='idle'
    const isEdit = props.mode === 'edit'

    const dispatch = useDispatch()

    const onSubmit = (event)=>{
        event.preventDefault()

        if(canSave){
            try {
                setAddRequestStatus('pending')
                console.log('In the save ')

                dispatch(
                    updateShippingAddress({ //{ object}
                        shippingAddressId,
                        street,
                        township,
                        city,
                        postalCode
                        
                }),
            );
                
            } catch (error) {
                console.log(error)
                
            }finally{
                setAddRequestStatus('idle')
            }

            setShippingAddressId('')
            setStreet('')
            setTownship('')
            setCity('')
            setPostalCode('')
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
                <h4 className="col-md-6 mb-3 text-center">Update ShippingAddress Form</h4>
                <form onSubmit={onSubmit} >

                
                <div className="col-md-6 mb-3">
                    <label htmlFor="cardNumber">ID</label>
                    <input type="text" className="form-control" required 
                        value={shippingAddressId}
                        onChange={onshippingAddressIdChange}
                        /*disabled={props.mode === 'update'} //no need because of separate update form and create form */
                        disabled={isEdit}
                        >
                    </input>
                   
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="holderName">Street</label>
                    <input type="text" className="form-control" required 
                        value={street}
                        onChange={onStreetChange}>
                    </input>
                  
                    
                </div>
          
                <div className="col-md-6 mb-3">
                    <label htmlFor="cardNumber">Township</label>
                    <input type="text" className="form-control" required 
                        value={township}
                        onChange={onTownshipChange}>
                    </input>
                   
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
                    <button class="btn btn-primary btn-lg btn-block text-center" type="submit" disabled={!canSave}>Update ShippingAddress</button>
                </div>
                

                </form>
            
            </div>
        </div>
    </div>
    <br />
</main> 

    )
}

export default UpdateShippingAddressForm