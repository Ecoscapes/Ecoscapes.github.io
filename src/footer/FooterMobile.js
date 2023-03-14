import styles from './footerMobileA.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import isa from '../Images/ISA.png';

const FooterMobile = () => {

    return ( 
        <div>
            <nav className={styles.footermobile}>
                <div className={styles.footermobilebackdrop}>
                    <div className={styles.isaimage}>
                        <img src={isa} className={styles.isa} alt="insta logo" />
                    </div>
                    <div className={styles.footertextcontainer}>
                        <div className={styles.footertext}>
                            ISA # MA-6060-A / MD LTE# 2208
                        </div>
                        <div className={styles.footertext}>
                            Contractors MHIC # 142765
                        </div>
                    </div>    
                    <div className={styles.footertextcontainer}>
                        <div className={styles.footertext}>
                            Contact Us
                        </div>
                        <div className={styles.footertext}>
                            Come Work With Us
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default FooterMobile;