import Card from "../../ui/Card"

function Category(){

    return (
        
        <div className="col-md-3">
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
    )

}

export default Category