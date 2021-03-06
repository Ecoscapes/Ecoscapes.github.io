import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import React from 'react';
import { isOnMobile } from '../utilities/isUserOnMobile';


const Navbar = () => {
    return ( 
        <div>
            { isOnMobile ? <NavbarMobile /> : <NavbarDesktop />}
        </div>
    );
}
 
export default Navbar;