import styles from './ContactMobileA.module.css';
import phone from '../Images/phone-square.png';
import email from '../Images/email-icon.png';

const contactYou = "WE would love to reach out to you please select prefered method and time for us to Contact You.";

const ContactMobile = () => {
    return ( 
        <div className={styles.about}>
            <div className={styles.founders}>
                <h1 className={styles.fontconnect}>Connect With Us</h1>
            </div>
            <div className={styles.contactinfocontainer}>
                <div className={styles.contactcontent}>
                    <div className={styles.phonecontactcontainer}>
                        <div className={styles.centerimage}>
                            <img src={phone} className={styles.phonecontact} alt="phone logo" />
                        </div>
                        <div className={styles.phonetextcontainer}>
                            <p className={styles.phonecontacttext}>(443)525-4178</p>
                        </div>
                    </div>
                    <div className={styles.phonecontactcontainer}>
                        <div className={styles.centerimage}>
                            <img src={email} className={styles.email} alt="email logo" />
                        </div>
                        <div className={styles.phonetextcontainer}>
                            <p className={styles.phonecontacttext}>ecoscapesllc@aol.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.backdrop}>
                <div className={styles.bodythree}>
                    <div>
                        <h2>Want us to reach out to you instead?</h2>
                        <div className={styles.fields}>
                            <form className={styles.form}>
                                <div className={styles.inputfieldscontainer}>
                                    <label className={styles.label}> 
                                        <div className={styles.labelleft}>
                                            Name:
                                        </div>
                                        <input className={styles.inputfields} type="text" name="name" />
                                    </label>
                                    <label className={styles.label}> 
                                        <div className={styles.labelleft}>
                                            Number:
                                        </div>
                                        <input className={styles.inputfields} type="text" name="number" />
                                    </label>
                                    <label className={styles.label}> 
                                        <div className={styles.labelleft}>
                                            Email:
                                        </div>                                
                                        <input className={styles.inputfields} type="text" name="email" />
                                    </label>
                                </div>
                                <label className={styles.label}> 
                                    <div className={styles.labelleft}>
                                        Comments:
                                    </div>                                
                                    <textarea name="Text1" cols="180" rows="10"></textarea>
                                    {/* <input type="textarea" cols="40" rows="5" name="comments" /> */}
                                </label>
                                <div className={styles.inputsubmit}>
                                    <input className={styles.submitbutton} type="submit" value="Submit" />
                                </div>
                                
                            </form>
                            <div>
                            
                            </div>
                            <div>
                        
                            </div>
                            <div>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContactMobile;