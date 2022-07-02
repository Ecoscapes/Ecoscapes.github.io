import { isMobile } from "react-device-detect";
import AboutDesktop from "./AboutDesktop";
import AboutMobile from "./AboutMobile.js";


var mobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    mobile = true;    
}



const About = () => {
    return (
        <div>
            { isMobile ? <AboutMobile /> : <AboutDesktop />}
        </div>
    );
}

export default About;