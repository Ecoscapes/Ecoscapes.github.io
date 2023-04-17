import styles from './ContactMobileA.module.css';
import React from 'react';
import phone from '../Images/phone-square.png';
import email from '../Images/email-icon.png';
import emailjs from '@emailjs/browser';



function ContactMobile() {

    const handleSubmit = (e) =>{
        // e.preventDefault()
        emailjs.sendForm('service_kgo4nbe', 'template_846a8lm', e.target, '2OHicHGfm886qFvFl')
    }

    <a href="mailto:dan@ecoscapesmd.com &cc=joe@ecoscapesmd.com" className={styles.clickable}>
    <img src={email} className={styles.email} alt="email logo" />
</a>


    return ( 
        <div className={styles.about}>
            <div className={styles.founders}>
                <h1 className={styles.fontconnect}>Connect With Us</h1>
            </div>
            <div className={styles.contactinfocontainer}>
                <div className={styles.contactcontent}>
                    <div className={styles.phonecontactcontainer}>
                        <div className={styles.contactcenterimage}>
                            <img src={phone} className={styles.phonecontact} alt="phone logo" />
                        </div>
                        <div className={styles.phonetextcontainer}>
                            <p className={styles.phonecontacttext}>(443)525-4178</p>
                        </div>
                    </div>
                    <div className={styles.phonecontactcontainer}>
                        <a href="mailto:dan@ecoscapesmd.com" className={styles.contactcenterimage}>
                                <img src={email} className={styles.email} alt="email logo" />
                        </a>
                        <div href="mailto:dan@ecoscapesmd.com" className={styles.phonetextcontainer}>
                            <p className={styles.phonecontacttext}>dan@ecoscapesmd.com</p>
                        </div>
                        <a href="mailto:joe@ecoscapesmd.com" className={styles.contactcenterimage}>
                            <img src={email} className={styles.email} alt="email logo" />
                        </a>
                        <div href="mailto:joe@ecoscapesmd.com" className={styles.phonetextcontainer}>
                            <p className={styles.phonecontacttext}>joe@ecoscapesmd.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.backdrop}>
                <div className={styles.bodythree}>
                    <div>
                        <h2>Want us to reach out to you instead?</h2>
                        <div className={styles.fields}>
                            <form className={styles.form} onSubmit={handleSubmit}>
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
                                    <textarea name="comments" id="message" cols="180" rows="10"></textarea>
                                    {/* <input type="textarea" cols="40" rows="5" name="comments" /> */}
                                </label>
                                <div className={styles.inputsubmit}>
                                    <input className={styles.submitbutton} type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContactMobile;