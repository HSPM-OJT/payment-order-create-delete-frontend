import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryList from './component/categories/CategoryList';
import Layout from './component/layout/Layout';
import Scroll from './component/scrolling/Scroll';
import Login from './component/users/Login';
import Register from './component/users/Register';



function App() {

  return (
    <Layout>

  
    
        {/* <Order />  */}
    

      <Routes>
       <Route path='/' element={<CategoryList />}></Route>
       <Route path='/login' element={<Login />}></Route>
       <Route path='/register' element={<Register />}></Route>
      </Routes>

      <Scroll />
    </Layout>
    
  );
}
export default App;