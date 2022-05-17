import './navbarformobile.css';
import React, { useState } from 'react';
// import React from 'react';
import logo from '../Images/home/LogoDark.png';
import Modal from 'react-modal';
import NavbarModal from './NavbarModal';

Modal.setAppElement('#root');

function NavbarMobile() {

    const [navbarModalIsOpen, setNavbarModalIsOpen] = useState(true);

    const openNavbarModal = () => {
        setNavbarModalIsOpen(true);
    };

    const closeNavbarModal = () => {
        setNavbarModalIsOpen(false);
    };


    return (
        <div>
            <nav className="navbar">
                <div className='bar'>
                    <button type="button" onClick={openNavbarModal}>
                        <div>
                            <img src={logo} className="logo" alt="logo" />
                        </div>
                    </button>
                    <div className='lucky2'>
                        <NavbarModal
                            closeModal={closeNavbarModal}
                            modalIsOpen={navbarModalIsOpen} />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarMobile;