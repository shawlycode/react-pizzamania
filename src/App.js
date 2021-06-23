import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Carousel from './Components/Carousel/Carousel';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <About />
    </div>
  );
}

export default App;
