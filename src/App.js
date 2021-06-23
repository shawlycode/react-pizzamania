import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Carousel from './Components/Carousel/Carousel';
import PizzaTypes from './Components/PizzaTypes/PizzaTypes';
import ContactUs from './Components/Contact Us/ContactUs';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <About />
      <PizzaTypes />
      <ContactUs />
    </div>
  );
}

export default App;
