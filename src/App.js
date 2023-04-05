import Navbar from './header/Navbar';
import Footer from './footer/Footer';
import './index.css';
import Home from './home/Home';
import About from './about/About';
import Gallery from './Gallery'
import Service from './Service/Service'
import Contact from './contact/Contact';
import ScrollToTop from './utilities/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <div className='page'></div>
          <div className='pages'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/gallery" element={<Gallery />} />
              <Route exact path="/services" element={<Service />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
