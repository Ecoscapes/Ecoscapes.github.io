import styles from './footerMobileA.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import isa from '../Images/ISA.png';
import hnp from '../Images/hnp.png';

const FooterMobile = () => {

    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/contact");
        
    }

    const handleHnpClick = () => {
        window.open("https://homegrownnationalpark.org/landscape-designers", "_blank");
    }


    return ( 
        <div>
            <nav className={styles.footermobile}>
                <div className={styles.footerbuttoncontainer}>
                    <button className={styles.footerbutton}  onClick={handleContactClick}>Contact Us</button>
                </div>
                <div className={styles.footermobilebackdrop}>
                    <div className={styles.footermobilebackdroptop}>
                        <div className={styles.isaimage}>
                            <img src={isa} className={styles.isa} alt="insta logo" />
                        </div>
                        <div className={styles.footertextcontainer}>
                            <div className={styles.footertext}>
                                ISA # MA-6060-A / MD LTE# 2208
                            </div>
                            <div className={styles.footertext}>
                                Contractors MHIC # 144142
                            </div>
                            <div className={styles.footerwork} onClick={handleContactClick}>
                                Come Work With Us
                            </div>
                        </div>
                    </div>
                    <div className={styles.hnpimagecontainer}>
                        <div className={styles.hnpimage} onClick={handleHnpClick}>
                            <img src={hnp} className={styles.hnp} alt="hnp logo" />  
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default FooterMobile;