import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryList from './component/categories/CategoryList';
import Layout from './component/layout/Layout';
import Order from './component/order/Order';
import ProductList from './component/product/ProductList';
import Scroll from './component/scrolling/Scroll';
import Login from './component/users/Login';
import Register from './component/users/Register';



function App() {

  return (
    <Layout>

      <Routes>
       <Route path='/' element={<CategoryList />}></Route>
       <Route path='/login' element={<Login />}></Route>
      </Routes>

      <Scroll />
    </Layout>
    
  );
}
export default App;