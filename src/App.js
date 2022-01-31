import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Gallery from './Gallery'
import Project from './Project'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/projects" element={<Project />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
