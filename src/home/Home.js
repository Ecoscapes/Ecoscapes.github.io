import { isMobile } from "react-device-detect";
import HomeDesktop from "./HomeDesktop.js";
import HomeMobile from "./HomeMobile.js";


var mobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    mobile = true;    
}



const Home = () => {
    return (
        <div>
            {isMobile ? <HomeMobile /> : <HomeDesktop />}
        </div>
    );
}

export default Home;