import './index.css';
import { Link } from 'react-router-dom';
import logo from './Images/LogoLLCnoWhite.png';

const Navbar = () => {

    return ( 
        <div>
            <nav className="navbar">
                <div className='bar'>
                    <div className="logodiv">
                        <img src={logo} className="logo" alt="logo" />
                    </div>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/about">About Us</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;