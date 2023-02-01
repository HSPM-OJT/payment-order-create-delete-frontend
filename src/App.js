import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryList from './component/categories/CategoryList';
import Layout from './component/layout/Layout';
import Order from './component/order/Order';
import ProductList from './component/product/ProductList';
import Scroll from './component/scrolling/Scroll';
import Login from './component/users/Login';
import Register from './component/users/Register';
import Profile from './component/users/Profile';




function App() {

  return (
    <Layout>

      <Routes>
      <Route path='/'>
       <Route path='/' index element={<CategoryList />}></Route>
       <Route path='login' element={<Login />}></Route>
       <Route path='register' element={<Register />}></Route>
       <Route path='productlist' element={<ProductList />}></Route>
       <Route path='order' element={<Order />}></Route>
       <Route path='profile' element={<Profile />}></Route>
       </Route>
      </Routes>
      <Scroll />
    </Layout>
    
  );
}
export default App;