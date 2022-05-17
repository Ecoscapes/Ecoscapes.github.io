import './contactdesktop.css';
import phone from '../Images/phone-square.png';
import email from '../Images/email-icon.png';

const contactYou = "WE would love to reach out to you please select prefered method and time for us to Contact You.";

const ContactDesktop = () => {
    return ( 
        <div className="about">
            <div className='founders'>
                <h1 className='fontconnect'>Connect With Us</h1>
            </div>
            <div className='contactinfocontainer'>
                <div className='contactcontent'>
                    <div className='phonecontactcontainer'>
                        <div className='centerimage'>
                            <img src={phone} className="phonecontact" alt="phone logo" />
                        </div>
                        <div className='phonetextcontainer'>
                            <p className='phonecontacttext'>(443)525-4178</p>
                        </div>
                    </div>
                    <div className='phonecontactcontainer'>
                        <div className='centerimage'>
                            <img src={email} className="email" alt="email logo" />
                        </div>
                        <div className='phonetextcontainer'>
                            <p className='phonecontacttext'>ecoscapesllc@aol.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='backdrop'>
                <div className='bodythree'>
                    <div className=''>
                        <h2 className=''>Want us to reach out to you instead?</h2>
                        <div className='fields'>
                            <form className='form'>
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
                                    <textarea name="Text1" cols="180" rows="10"></textarea>
                                    {/* <input type="textarea" cols="40" rows="5" name="comments" /> */}
                                </label>
                                <div className='inputsubmit'>
                                    <input className="submitbutton" type="submit" value="Submit" />
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
 
export default ContactDesktop;