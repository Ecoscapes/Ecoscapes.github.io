import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';
import React from 'react';
import { isOnMobile } from '../utilities/isUserOnMobile';

const Footer = () => {

    return ( 
        <div>
            { isOnMobile ? <FooterMobile /> : <FooterMobile />}
            {/* { isOnMobile ? <FooterMobile /> : <FooterDesktop />} */}
        </div>
    );
}
 
export default Footer;