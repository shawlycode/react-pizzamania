import React from 'react'
import Navbar from '../Navbar/Navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-default narvbar-pizza">
            <div className="container-fluid">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand navbar-pizzamania" href="#">Pizzamania</a>
                </div>

                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <ul className="nav navbar-nav navbar-right navbar-home">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About </a></li>
                        <li><a href="#">Pizza Store</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar
