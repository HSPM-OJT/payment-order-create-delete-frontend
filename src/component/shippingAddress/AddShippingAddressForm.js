import { useDispatch } from "react-redux"
import { useState } from "react"


function AddShippingAddress(){

    return   (

<main>
    <div className="container">
        <div className="row">

            <div className="col-md-4 payment-md-1">
            </div>
        
            <div className="col-md-7 payment-md-1">
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
                    <input className="d-block w-100 form-control" type="text" value={postalCode} disabled
                    onChange={onPostalCodeChange}
                    ></input>
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
    )
}

export default AddShippingAddress