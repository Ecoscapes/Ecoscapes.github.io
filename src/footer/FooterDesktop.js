import './footerDesktop.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import isa from '../Images/ISA.png';

const FooterDesktop = () => {

    return ( 
        <div>
            <nav className="footer">
                <div className='footerbar'>
                    <div className='isaimage'>
                        <img src={isa} className="isa" alt="insta logo" />
                    </div>
                    <div className='footertextcontainer'>
                        <div className='footertext'>
                            ISA # MA-6060-A / MD LTE# 2208
                        </div>
                        <div className='footertext'>
                            Contractors MHIC # 142765
                        </div>
                    </div>    
                    <div className='footertextcontainer'>
                        <div className='footertext'>
                            Contact Us
                        </div>
                        <div className='footertext'>
                            Come Work With Us
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default FooterDesktop;