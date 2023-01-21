import React from 'react';
import CategoryList from './component/categories/CategoryList';
import Footer from './component/footer/Footer';
import MainNavigation from './component/layout/MainNavigation';
function App() {
  
  return (
    <div className="App">
        
        <MainNavigation />
        <CategoryList />
        {/* <Routes>
         <Route path='/' element={<CategoryList />}></Route>

        </Routes> */}
       
         {/* <section className="section-name padding-y bg">
         <div className="container">
         <div className="row">
         <div className="col-md-6">
            <h3>Download app demo text</h3>
            <p>Get an amazing app  to make Your life easy</p>
         </div>
         <div className="col-md-6 text-md-end">
            <a href="#"><img src="assets/images/misc/appstore.png" height="40" /></a>
            <a href="#"><img src="assets/images/misc/appstore.png" height="40" /></a>
         </div>
         </div> 
         </div>
         </section> */}
         
         <Footer />
      
    </div>
  );
}
export default App;