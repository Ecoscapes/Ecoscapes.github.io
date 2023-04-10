import './contactdesktop.css';
import React from 'react';
import phone from '../Images/phone-square.png';
import email from '../Images/email-icon.png';
import { useState } from 'react';
import emailjs from '@emailjs/browser';


function ContactDesktop() {

    const handleSubmit = (e) =>{
        // e.preventDefault()
        emailjs.sendForm('service_kgo4nbe', 'template_846a8lm', e.target, '2OHicHGfm886qFvFl')
    }

    return ( 
        <div className="about">
            <div className='founders'>
                <h1 className='fontconnect'>Connect With Us</h1>
            </div>
            <div className='contactinfocontainer'>
                <div className='contactcontent'>
                    <div className='phonecontactuscontainer'>
                        <div className='contactcenterimage'>
                            <img src={phone} className="phonecontactus" alt="phone logo" />
                        </div>
                        <div className='phonetextcontainer'>
                            <p className='phonecontactustext'>(443)525-4178</p>
                        </div>
                    </div>
                    <div className='phonecontactuscontainer'>
                        <div className='contactcenterimage'>
                            <img src={email} className="email" alt="email logo" />
                        </div>
                        <div className='phonetextcontainer'>
                            <p className='phonecontactustext'>dan@ecoscapesmd.com</p>
                        </div>
                    </div>
                    <div className='phonecontactuscontainer'>
                        <div className='contactcenterimage'>
                            <img src={email} className="email" alt="email logo" />
                        </div>
                        <div className='phonetextcontainer'>
                            <p className='phonecontactustext'>joe@ecoscapesmd.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='backdrop'>
                <div className='bodythree'>
                    <div className=''>
                        <h2 className=''>Want us to reach out to you instead?</h2>
                        <div className='fields'>
                            <form className='form' onSubmit={handleSubmit}>
                                <div className='inputfieldscontainer'>
                                    <label className='label'> 
                                        <div className='labelleft'>
                                            Name:
                                        </div>
                                        <input className='inputfields' type="text" name="name" />
                                    </label>
                                    <label className='label'> 
                                        <div className='labelleft'>
                                            Number:
                                        </div>
                                        <input className='inputfields' type="text" name="number" />
                                    </label>
                                    <label className='label'> 
                                        <div className='labelleft'>
                                            Email:
                                        </div>                                
                                        <input className='inputfields' type="text" name="email" />
                                    </label>
                                </div>
                                <label className='label'> 
                                    <div className='labelleft'>
                                        Comments:
                                    </div>                                
                                    <textarea name="comments" id="message" cols="180" rows="10"></textarea>
                                    {/* <input type="textarea" cols="40" rows="5" name="comments" /> */}
                                </label>
                                <div className='inputsubmit'>
                                    <input className="submitbutton" type="submit" value="Submit" />
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContactDesktop;