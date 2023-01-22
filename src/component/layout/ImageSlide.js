function ImageSlide(){
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade container" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="row">
            <div className="col-6">
            <img src="assets/images/tech-store-1.jpg" className="d-block w-100"  alt="tech-store-1" ></img>

            </div>
            
            <div className="col-6">
            <img src="assets/images/tech-store-2.jpg" className="d-block w-100"  alt="tech-store-1" ></img>

            </div>

            
          </div>
          </div>
        
          <div class="carousel-item ">
            <div className="row">
            <div className="col-6">
            <img src="assets/images/tech-store-3.jfif" className="d-block w-100"  alt="tech-store-1" ></img>

            </div>
            
            <div className="col-6">
            <img src="assets/images/tech-store-4.jpg" className="d-block w-100"  alt="tech-store-1" ></img>

            </div>

            
          </div>
          </div>

          <div class="carousel-item ">
            <div className="row">
            <div className="col-6">
            <img src="assets/images/tech-store-5.jpg" className="d-block w-100"  alt="tech-store-1" ></img>

            </div>
            
            <div className="col-6">
            <img src="assets/images/tech-store-6.jpg" className="d-block w-100"  alt="tech-store-1" ></img>

            </div>

            
          </div>
          </div>
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default ImageSlide