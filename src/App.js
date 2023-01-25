import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryList from './component/categories/CategoryList';
import Layout from './component/layout/Layout';
import Scroll from './component/scrolling/Scroll';
import Login from './component/users/Login';



function App() {

  return (
    <Layout>

  
    
        {/* <Order />  */}
    

      <Routes>
       <Route path='/' element={<CategoryList />}></Route>
       <Route path='/login' element={<Login />}></Route>
      </Routes>

      <Scroll />
    </Layout>
    
  );
}
export default App;