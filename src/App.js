import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryList from './component/categories/CategoryList';
import Layout from './component/layout/Layout';
import AddOrderForm from './component/order/AddOrderForm';
import OrderList from './component/order/OrderList';
import ProductList from './component/product/ProductList';
import Scroll from './component/scrolling/Scroll';
import Login from './component/users/Login';
import Register from './component/users/Register';
import Profile from './component/users/Profile';
import Dashboard from './component/Dashboard';
import PaymentList from './component/payment/PaymentList';
import AddPaymentForm from './component/payment/AddPaymentForm';
import UpdatePaymentForm from './component/payment/UpdatePaymentForm';
import AddShippingAddressForm from './component/shippingAddress/AddShippingAddressForm';
import ShippingAddressList from './component/shippingAddress/ShippingAddressList';
import UpdateShippingAddressForm from './component/shippingAddress/UpdateShippingAddressForm';




function App() {

  return (
    <Layout>

      <Routes>
      
      <Route path='/'>
       <Route path='/' index element={<CategoryList />}></Route>
       <Route path='/Dashboard' index element={<Dashboard />}></Route>
       
          <Route path='user'>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
          </Route>

          <Route path='payment'>
            <Route path='all' element={<PaymentList />}></Route>
            {/* <Route path='create/:orderId' element={<AddPaymentForm />}></Route> */}
            <Route path='create' element={<AddPaymentForm />}></Route>
            <Route path='update/:id' element={<UpdatePaymentForm />}></Route>
           
          </Route>

          <Route path='shippingAddress'>
            <Route path='create' element={<AddShippingAddressForm />}></Route>
            <Route path='all' element={<ShippingAddressList />}></Route>
            <Route path='update/:id' element={<UpdateShippingAddressForm />}></Route>
          </Route>
       
          <Route path='product'>
            <Route path='all' element={<ProductList />}></Route>
          </Route>
       
          <Route path='order'>
            <Route path='create' element={<AddOrderForm />}></Route>
            <Route path='all' element={<OrderList />}></Route>
          </Route>
       
       <Route path='profile' element={<Profile />}></Route>
       </Route>

      </Routes>
      <Scroll />
    </Layout>
    
  );
}
export default App;