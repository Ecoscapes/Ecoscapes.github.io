import { isMobile } from "react-device-detect";
import HomeDesktop from "./HomeDesktop.js";
import HomeMobile from "./HomeMobile.js";


const Home = () => {
    return (
        <div>
            {isMobile ? <HomeMobile /> : <HomeDesktop />}
        </div>
    );
}

export default Home;