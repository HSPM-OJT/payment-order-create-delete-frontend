import Card from "../../ui/Card";

function Product() {
    
    return(
            <div className="col-md-3 mt-3 mb-3">
            <Card>
            <div className="card card-body">
                <p>ProductCode</p>
                <p>Name</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Description</p>
                <p>CreatedAt</p>
                <p>UpdatedAt</p>
                <p>ExpiredDate</p>
                {/* <p>CategoryId</p>
                <p>Status</p> */}
            </div>
            </Card>
            </div>
    )
}

export default Product;