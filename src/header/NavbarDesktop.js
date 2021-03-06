import './navbardesktop.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import logo from '../Images/home/LogoDark.png';

const NavbarDesktop = () => {

    return ( 
        <div>
            <nav className="navbar">
                <div className='bar'>
                    <div className="logodiv">
                        <div>
                            <img src={logo} className="logo" alt="logo" />
                        </div>
                    </div>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default NavbarDesktop;