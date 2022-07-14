import ServiceDesktop from "./ServiceDesktop.js";
import ServiceMobile from "./ServiceMobile.js";
import React from 'react';
import { isOnMobile } from '../utilities/isUserOnMobile';


const Service = () => {
return ( 
    <div>
        <div>
            { isOnMobile ? <ServiceMobile /> : <ServiceDesktop />}
        </div>
    </div>
 );
}

export default Service;