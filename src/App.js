import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import About from './Components/About/About';
import PizzaTypes from './Components/PizzaTypes/PizzaTypes';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
    <Navbar />
    <Carousel />
    <PizzaTypes />
    <About />
    <Footer />
    </div>
  );
}

export default App;
