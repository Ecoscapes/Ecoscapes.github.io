// import { isMobile } from "react-device-detect";
import ContactDesktop from "./ContactDesktop.js";
import ContactMobile from "./ContactMobile.js";


var mobile = true;

// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//     mobile = true;    
// }



const About = () => {
    return (
        <div>
            {mobile ? <ContactMobile /> : <ContactDesktop />}
        </div>
    );
}

export default About;