import './index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Ecoscapes</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/about">About Us</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;