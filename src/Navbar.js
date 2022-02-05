import './index.css';
import { Link } from 'react-router-dom';
import logo from './Images/LogoLLC.png';

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <div className='bar'>
                <div className="logodiv">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/about">About Us</Link>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;