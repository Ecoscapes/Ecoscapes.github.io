import { isOnMobile } from '../utilities/isUserOnMobile';
import ContactDesktop from "./ContactDesktop.js";
import ContactMobile from "./ContactMobile.js";



const About = () => {
    return (
        <div>
            {isOnMobile ? <ContactMobile /> : <ContactDesktop />}
        </div>
    );
}

export default About;