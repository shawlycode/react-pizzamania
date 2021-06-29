import React from 'react'
import './PizzaTypes.css'
import pizz from '../images/image-9.jpg'
import pizz1 from '../images/image-5.jpg'

function PizzaTypes() {
    return (
        <div className="pizzatypes-content">
            <h2  className="text-2" style={{textAlign:'center'}}>Pizza Types</h2>
            <hr />
            <div className="row">
                <div className="col-md-3">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={pizz1} className="card-img-top" alt="pizza" />
                        <div className="card-body">
                            <h5 className="card-title">Peperoni Pizza</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores a ratione corrupti beatae, consequatur neque dolor quam cumque quaerat.</p>
                            <a href="#" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={pizz} className="card-img-top" alt="pizza" />
                        <div className="card-body">
                            <h5 className="card-title">Peperoni Pizza</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores a ratione corrupti beatae, consequatur neque dolor quam cumque quaerat.</p>
                            <a  href="#" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={pizz} className="card-img-top" alt="pizza" />
                        <div className="card-body">
                            <h5 className="card-title">Peperoni Pizza</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores a ratione corrupti beatae, consequatur neque dolor quam cumque quaerat.</p>
                            <a href="#" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={pizz} className="card-img-top" alt="pizza" />
                        <div className="card-body">
                            <h5 className="card-title">Peperoni Pizza</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores a ratione corrupti beatae, consequatur neque dolor quam cumque quaerat.</p>
                            <a href="#" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );

}
export default PizzaTypes;
