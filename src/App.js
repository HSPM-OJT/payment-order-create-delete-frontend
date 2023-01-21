import React from 'react';
import Card from './ui/Card'
function App() {
  
  return (
    <div className="App">
     <header className="section-header">
         <section className="header-main border-bottom">
            <div className="container">
         <div className="row align-items-center">
            <div className="col-lg-2 col-4">
               <h5>HSPM Tech Store</h5>
            </div>
            <div className="col-lg-6 col-sm-12">
               <form action="#" className="search">
                     <div className="input-group w-100">
                        <input type="text" className="form-control" placeholder="Search" />
                        <div className="input-group-append">
                           <button className="btn btn-primary" type="submit">
                           <i className="fa fa-search"></i>
                           </button>
                        </div>
                     </div>
               </form>
            </div> 
            <div className="col-lg-4 col-sm-6 col-12">
               <div className="widgets-wrap float-md-end">
                     <div className="widget-header  me-3">
                        <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart"></i></a>
                        <span className="badge badge-pill badge-danger notify">0</span>
                     </div>
                     <div className="widget-header icontext">
                        <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-user"></i></a>
                        <div className="text">
                           <span className="text-muted">Welcome!</span>
                           <div> 
                                 <a href="#">Sign in</a>|  
                                 <a href="#"> Register</a>
                           </div>
                        </div>
                     </div>
               </div> 
            </div> 
         </div> 
         </div> 
         </section> 
         <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
         <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                  <a className="btn btn-primary" href="#">Home</a>
               </li> &nbsp;
               <li className="nav-item">
                  <a className="btn btn-primary" href="#">About</a>
               </li> &nbsp;
               <li className="nav-item">
                  <a className="btn btn-primary" href="#">Supermarket</a>
               </li> &nbsp;
               <li className="nav-item">
                  <a className="btn btn-primary" href="#">Partnership</a>
               </li> &nbsp;
               <li className="nav-item">
                  <a className="btn btn-primary" href="#">Baby &amp; Toys</a>
               </li> &nbsp;
               <li className="nav-item">
                  <a className="btn btn-primary" href="#">Fitness sport</a>
               </li> &nbsp;
               <li className="nav-item">
                  <a className="btn btn-primary" href="#">Clothing</a>
               </li> &nbsp;
               <li className="nav-item">
                  <a className="btn btn-primary" href="#">Furnitures</a>
               </li> &nbsp;
               <li className="nav-item dropdown">
                  <a className="btn btn-primary dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     More
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                     <li><a className="dropdown-item" href="#">Foods and Drink</a></li>
                     <li><a className="dropdown-item" href="#">Home interior</a></li>
                     <li><hr className="dropdown-divider" /></li>
                     <li><a className="dropdown-item" href="#">Home interior 2</a></li>
                  </ul>
               </li>
               </ul>
            </div> 
         </div> 
         </nav>
         </header>
        
         <section className="section-main bg padding-y">
         <div className="container">
         <div className="row">
            <aside className="col-md-3">
               <nav className="card">
                     <ul className="menu-category">
                        <li><a href="#">Best clothes</a></li>
                        <li><a href="#">Automobiles</a></li>
                        <li><a href="#">Home interior</a></li>
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#">Digital goods</a></li>
                        <li className="has-submenu"><a href="#">More items</a>
                           <ul className="submenu">
                                 <li><a href="#">Submenu name</a></li>
                                 <li><a href="#">Great submenu</a></li>
                                 <li><a href="#">Another menu</a></li>
                                 <li><a href="#">Some others</a></li>
                           </ul>
                        </li>
                     </ul>
               </nav>
            </aside>
            <div className="col-md-9">
               <article className="banner-wrap">
                     <img src="assets/images/2.jpg" className="w-100 rounded" />
               </article>
            </div> 
         </div>
         </div> 
         </section>
        
         <section className="section-name padding-y-sm">
         <div className="container">
         <header className="section-heading">
            <a href="#" className="btn btn-outline-primary float-end">See all</a>
            <h3 className="section-title">Popular products</h3>
         </header>

          <div className="row">
            <div className="col-md-3">
               {/* <div href="#" className="card card-product-grid">
                     <a href="#" className="img-wrap"> <img src="assets/images/items/1.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Just another product name</a>
                        <div className="price mt-1">$179.00</div> 
                     </figcaption>
               </div> */}
               <Card>
               <div href="#" className="card card-product-grid">
                     <a to="../order/Order.js" className="img-wrap"> <img src="assets/images/items/1.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Just another product name</a>
                        <div className="price mt-1">$179.00</div> 
                     </figcaption>
               </div>
               </Card>
            </div>

            <div className="col-md-3">
               {/* <div href="#" className="card card-product-grid">
                     <a href="#" className="img-wrap"> <img src="assets/images/items/2.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Some item name here</a>
                        <div className="price mt-1">$280.00</div> 
                     </figcaption>
               </div> */}
               <Card>
               <div href="#" className="card card-product-grid">
                     <a href="#" className="img-wrap"> <img src="assets/images/items/2.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Some item name here</a>
                        <div className="price mt-1">$280.00</div> 
                     </figcaption>
               </div>
               </Card>
            </div> 
            <div className="col-md-3">
               {/* <div href="#" className="card card-product-grid">
                     <a href="#" className="img-wrap"> <img src="assets/images/items/3.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Great product name here</a>
                        <div className="price mt-1">$56.00</div> 
                     </figcaption>
               </div> */}
               <Card>
               <div href="#" className="card card-product-grid">
                     <a href="#" className="img-wrap"> <img src="assets/images/items/3.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Great product name here</a>
                        <div className="price mt-1">$56.00</div> 
                     </figcaption>
               </div>
               </Card>
            </div> 
            <div className="col-md-3">
               {/* <div href="#" className="card card-product-grid">
                     <a href="#" className="img-wrap"> <img src="assets/images/items/4.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Just another product name</a>
                        <div className="price mt-1">$179.00</div>
                     </figcaption>
               </div> */}
               <Card>
               <div href="#" className="card card-product-grid">
                     <a href="#" className="img-wrap"> <img src="assets/images/items/4.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Just another product name</a>
                        <div className="price mt-1">$179.00</div>
                     </figcaption>
               </div>
               </Card>
            </div> 
            <div className="col-md-3">
               {/* <div href="#" className="card card-product-grid">
                     <a href="#" className="img-wrap"> <img src="assets/images/items/5.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Just another product name</a>
                        <div className="price mt-1">$179.00</div> 
                     </figcaption>
               </div> */}
               <Card>
               <div href="#" className="card card-product-grid">
                     <a href="#" className="img-wrap"> <img src="assets/images/items/5.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Just another product name</a>
                        <div className="price mt-1">$179.00</div> 
                     </figcaption>
               </div>
               </Card>
            </div> 
            <div className="col-md-3">
               {/* <div href="#" className="card card-product-grid">
                     <a href="#" className="img-wrap"> <img src="assets/images/items/6.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Some item name here</a>
                        <div className="price mt-1">$280.00</div>
                     </figcaption>
               </div> */}
               <Card>
               <div href="#" className="card card-product-grid">
                     <a href="#" className="img-wrap"> <img src="assets/images/items/6.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Some item name here</a>
                        <div className="price mt-1">$280.00</div>
                     </figcaption>
               </div>
               </Card>
            </div> 
            <div className="col-md-3">
               {/* <div href="#" className="card card-product-grid">
                     <a href="#" className="img-wrap"> <img src="assets/images/items/7.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Great product name here</a>
                        <div className="price mt-1">$56.00</div> 
                     </figcaption>
               </div> */}
               <Card>
               <div href="#" className="card card-product-grid">
                     <a href="#" className="img-wrap"> <img src="assets/images/items/7.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Great product name here</a>
                        <div className="price mt-1">$56.00</div> 
                     </figcaption>
               </div>
               </Card>
            </div> 
            <div className="col-md-3">
               {/* <div href="#" className="card card-product-grid">
                     <a href="#" className="img-wrap"> <img src="assets/images/items/9.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Just another product name</a>
                        <div className="price mt-1">$179.00</div> 
                     </figcaption>
               </div> */}

               <Card>
                     <a href="#" className="img-wrap"> <img src="assets/images/items/9.jpg" /> </a>
                     <figcaption className="info-wrap">
                        <a href="#" className="title">Just another product name</a>
                        <div className="price mt-1">$179.00</div> 
                     </figcaption>
               </Card>
            </div>
         </div> 
         </div>
         </section>
       
         <section className="section-name padding-y bg">
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
         </section>
         
         <footer className="section-footer border-top bg">
         <div className="container">
         <section className="footer-top  padding-y">
            <div className="row">
               <aside className="col-md col-6">
               <h6 className="title">Brands</h6>
               <ul className="list-unstyled">
                  <li> <a href="#">Adidas</a></li>
                  <li> <a href="#">Puma</a></li>
                  <li> <a href="#">Reebok</a></li>
                  <li> <a href="#">Nike</a></li>
               </ul>
               </aside>
               <aside className="col-md col-6">
               <h6 className="title">Company</h6>
               <ul className="list-unstyled">
                  <li> <a href="#">About us</a></li>
                  <li> <a href="#">Career</a></li>
                  <li> <a href="#">Find a store</a></li>
                  <li> <a href="#">Rules and terms</a></li>
                  <li> <a href="#">Sitemap</a></li>
               </ul>
               </aside>
               <aside className="col-md col-6">
               <h6 className="title">Help</h6>
               <ul className="list-unstyled">
                  <li> <a href="#">Contact us</a></li>
                  <li> <a href="#">Money refund</a></li>
                  <li> <a href="#">Order status</a></li>
                  <li> <a href="#">Shipping info</a></li>
                  <li> <a href="#">Open dispute</a></li>
               </ul>
               </aside>
               <aside className="col-md col-6">
               <h6 className="title">Account</h6>
               <ul className="list-unstyled">
                  <li> <a href="#"> User Login </a></li>
                  <li> <a href="#"> User register </a></li>
                  <li> <a href="#"> Account Setting </a></li>
                  <li> <a href="#"> My Orders </a></li>
               </ul>
               </aside>
               <aside className="col-md">
               <h6 className="title">Social</h6>
               <ul className="list-unstyled">
                  <li><a href="#"> <i className="fab fa-facebook"></i> Facebook </a></li>
                  <li><a href="#"> <i className="fab fa-twitter"></i> Twitter </a></li>
                  <li><a href="#"> <i className="fab fa-instagram"></i> Instagram </a></li>
                  <li><a href="#"> <i className="fab fa-youtube"></i> Youtube </a></li>
               </ul>
               </aside>
            </div> 
         </section>  
         <section className="footer-bottom row">
            <div className="col-md-2">
               <p className="text-muted">   2021 Company name </p>
            </div>
            <div className="col-md-8 text-md-center">
               <span  className="px-2">info@com</span>
               <span  className="px-2">+000-000-0000</span>
               <span  className="px-2">73C * 120, Pyi Gyi Dagon</span>
            </div>
            <div className="col-md-2 text-md-end text-muted">
               <i className="fab fa-lg fa-cc-visa"></i> 
               <i className="fab fa-lg fa-cc-paypal"></i> 
               <i className="fab fa-lg fa-cc-mastercard"></i>
            </div>
         </section>
         </div>
         </footer>
      
    </div>
  );
}
export default App;