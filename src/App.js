import Navbar from './Navbar';
import './index.css';
import Home from './Home';
import About from './About';
import Gallery from './Gallery'
import Service from './Service'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


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
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
