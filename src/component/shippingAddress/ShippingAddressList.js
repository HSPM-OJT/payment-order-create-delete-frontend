import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { selectAllShippingAddresses, getShippingAddressStatus,getShippingAddressError, fetchShippingAddresses } from "./shippingAddressSlice"
import ShippingAddressItem from "./ShippingAddressItem"

function ShippingAddressList(){

    const dispatch = useDispatch()

    const shippingAddresses = useSelector(selectAllShippingAddresses)
    const shippingAddressStatus = useSelector(getShippingAddressStatus)
    const error = useSelector(getShippingAddressError)

    useEffect(()=>{
        if(shippingAddressStatus === 'idle'){
            dispatch(fetchShippingAddresses())
        }
    },[shippingAddressStatus,dispatch]);

    let content;
    
    if(shippingAddressStatus === 'loading'){
        content = (<p>Loading.....</p>)
    }

    if(shippingAddressStatus === 'succeeded'){
        content = shippingAddresses.map(
            (shippingAddress)=>(
               <ShippingAddressItem
               shippingAddressId = {shippingAddress.shippingAddressId}
               street={shippingAddress.street}
               township={shippingAddress.township}
               city={shippingAddress.city}
               postalCode={shippingAddress.postalCode}
               />
            )
        )
    }

    if(shippingAddressStatus === 'failed'){
        content =(<p>{error}</p>)
    }

    return content;

}
export default ShippingAddressList