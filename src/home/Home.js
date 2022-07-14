import { isOnMobile } from '../utilities/isUserOnMobile';
import React from 'react';
import HomeDesktop from "./HomeDesktop.js";
import HomeMobile from "./HomeMobile.js";


const Home = () => {
    return (
        <div>
            {isOnMobile ? <HomeMobile /> : <HomeDesktop />}
        </div>
    );
}

export default Home;