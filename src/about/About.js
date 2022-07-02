import { isMobile } from "react-device-detect";
// import AboutDesktop from "./AboutDesktop.js";
import AboutMobile from "./AboutMobile.js";


var mobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    mobile = true;    
}



const About = () => {
    return (
        <div>
            {mobile ? <AboutMobile /> : <AboutMobile />}
        </div>
    );
}

export default About;