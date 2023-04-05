import './navbardesktop.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import logo from '../Images/home/LogoDark.png';
import { HashLink } from 'react-router-hash-link';

const NavbarDesktop = () => {

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -190; 
        window.scrollTo({ top: yCoordinate + yOffset }); 
    }

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
                        <HashLink to="/#" scroll={scrollWithOffset} >Home</HashLink>
                        <HashLink to="/services#" scroll={scrollWithOffset} >Services</HashLink>
                        <HashLink to="/gallery#" scroll={scrollWithOffset} >Gallery</HashLink>
                        <HashLink to="/about#" scroll={scrollWithOffset} >About</HashLink>
                        <HashLink to="/contact#" scroll={scrollWithOffset} >Contact Us</HashLink>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default NavbarDesktop;