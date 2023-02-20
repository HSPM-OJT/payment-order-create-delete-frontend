import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import OrderItem from "./OrderItem";
import { selectAllOrders, getOrderStatus,getOrderError,fetchOrders } from "./orderSlice";

function OrderList() {

    const dispatch = useDispatch()
    

    const orders = useSelector(selectAllOrders)
    console.log("OrderList"+orders)
    const orderStatus = useSelector(getOrderStatus)
    const error = useSelector(getOrderError)

    useEffect(() => {
        if(orderStatus === 'idle'){
            dispatch(fetchOrders())
        }
    },[orderStatus,dispatch])

    let content;

    if(orderStatus === 'loading'){
        content = (<p>Loading.....</p>)
    }

    if(orderStatus === 'succeeded'){
        console.log()
        content = orders.map(
            (order) => (
                <OrderItem 
                orderId={order.orderId}
                customerName={order.customerName}
                productName={order.productName}
                price={order.price}
                quantity={order.quantity}
                subTotal={order.subTotal}
                shippingCost={order.shippingCost}
                grandTotal={order.grandTotal}
                orderDate={order.orderDate}
                updateDate={order.updateDate}
                
                
                 />
            )
        );
    }

    if(orderStatus === 'failed'){
        content = (<p>{error}</p>)
    }

    return content
    
}

export default OrderList;