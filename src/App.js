import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryList from './component/categories/CategoryList';
import Layout from './component/layout/Layout';
import Product from './component/product/Product';
import ProductList from './component/product/ProductList';
import Scroll from './component/scrolling/Scroll';
import Login from './component/users/Login';



function App() {

  return (
    <Layout>

      <Routes>
        <Route path='/'>

          <Route path='/' index element={<CategoryList />}></Route>
          <Route path='/login' element={<Login />}></Route>
        
          <Route path='productlist' element={<ProductList />}>
            {/* <Route path='list' element={<ProductList />}></Route> */}
          </Route>

        </Route>
      </Routes>

      <Scroll />
    </Layout>
    
  );
}
export default App;