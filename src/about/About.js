import { isOnMobile } from '../utilities/isUserOnMobile';
import AboutDesktop from "./AboutDesktop";
import AboutMobile from "./AboutMobile.js";


const About = () => {
    return (
        <div>
            { isOnMobile ? <AboutMobile /> : <AboutDesktop />}
        </div>
    );
}

export default About;