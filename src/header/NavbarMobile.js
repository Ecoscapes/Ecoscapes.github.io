import styles from './navbarmobile.module.css';
import React, { useState } from 'react';
// import React from 'react';
import logo from '../Images/home/LogoDark.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function NavbarMobile() {
    const [disp, setDisplay] = useState(false);
    // const [menu, setMenu] = useState(false);
    const displayShow = () => setDisplay(true);
    const displayHide = () => setDisplay(false);
    // const menuOpen = () => setMenu(true);
    // const menuClose = () => setMenu(false);

    return (
        <div>
            <nav className="navbar">
                <div className={styles.bar}>
                    <div className={styles.dropdown}>
                        {disp ? (
                            <button type="button" className={styles.link} onClick={displayHide} >
                                <div>
                                    <img src={logo} className={styles.logo} alt="logo" />
                                </div>
                                <div  className={styles.menuIcon}>
                                    <ExpandMoreIcon />
                                </div>
                            </button>
                        ) :
                            < button type="button" className={styles.link} onClick={displayShow} >
                                <div>
                                    <img src={logo} className={styles.logo} alt="logo" />
                                </div>
                                <div  className={styles.menuIcon}>
                                    <MenuIcon />
                                </div>
                            </button>
                        }
                        {disp ? (<div onClick={displayHide}>
                            <div className={styles.dropdownMenu}>
                                <div className={styles.links}>
                                    <Link to="/">Home</Link>
                                    <Link to="/services">Services</Link>
                                    <Link to="/gallery">Gallery</Link>
                                    <Link to="/about">About</Link>
                                    <Link to="/contact">Contact Us</Link>
                                </div>
                            </div>
                        </div>) : null}
                    </div>
                    <div className={styles.lucky2}>
                    </div>
                </div>
            </nav >
        </div >
    );
}

export default NavbarMobile;