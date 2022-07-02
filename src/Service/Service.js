import { isMobile } from "react-device-detect";
import ServiceDesktop from "./ServiceDesktop.js";
import ServiceMobile from "./ServiceMobile.js";


var mobile = true;

// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//     mobile = true;    
// }



const Service = () => {
return ( 
    <div>
        <div>
            { isMobile ? <ServiceMobile /> : <ServiceDesktop />}
        </div>
    </div>
 );
}

export default Service;