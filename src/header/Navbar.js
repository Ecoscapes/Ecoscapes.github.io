import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import { isMobile } from "react-device-detect";


var mobile = true;

// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//     mobile = true;    
// }


const Navbar = () => {
    return ( 
        <div>
            { isMobile ? <NavbarMobile /> : <NavbarDesktop />}
        </div>
    );
}
 
export default Navbar;