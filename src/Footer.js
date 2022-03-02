import './index.css';
import { Link } from 'react-router-dom';
import logo from './Images/LogoLLCnoWhite.png';

const Footer = () => {

    return ( 
        <div>
            <nav className="footer">
                <div className='footerbar'>
                    <div>
                        <div>
                            ISA # MA-6060-A / MD LTE# 2208
                        </div>
                        <div>
                            Contractors MHIC # 142765
                        </div>
                    </div>    
                    <div>
                        <div>
                            Contact Us
                        </div>
                        <div>
                            Come Work For Us
                        </div>
                    </div>
                    {/* <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/about">About Us</Link>
                    </div> */}
                </div>
            </nav>
        </div>
    );
}
 
export default Footer;