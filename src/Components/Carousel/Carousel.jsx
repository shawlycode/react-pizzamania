import React from 'react'
import image1 from '../images/image-1.jpg'
import image2 from '../images/image-5.jpg'
import image3 from '../images/image-9.jpg'

function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image1} className="d-block w-100 " alt="pizza" style={{height:'500px'}}/>
                </div>
                <div className="carousel-item">
                    <img src={image2} className="d-block w-100" alt="pizza" style={{height:'500px'}}/>
                </div>
                <div className="carousel-item">
                    <img src={image3} className="d-block w-100" alt="pizza" style={{height:'500px'}}/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel
