import './index.css';
// import logo from './Images/invert.png';
import logo from './Images/home/landing.PNG';
import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import phone from './Images/phone-square.png';
import email from './Images/email-icon.png';
import { Link } from 'react-router-dom';


const Home = () => {

    const handleFbClick = () => {
        window.open("https://www.facebook.com/EcoscapesMD/", "_blank");
    }

    const handleIgClick = () => {
        window.open("https://www.instagram.com/ecoscapes_md/", "_blank");
    }

    // const titleStatement = "We are an ecologically conscious";
    // const titleStatementTwo = "Landscaping and Hardscaping company.";
    // const titleStatementThree = "We provide quality, custom-tailored services at an honest price.";

    const titleStatement = "We provide quality custom lanscape services";
    const titleStatementTwo = " with mother nature in mimd.";
    const titleStatementThree = "We provide quality, custom-tailored services at an honest price.";


    const hardscapestring = "-Patios -Walkways -Garden Walls -Firepits"
    


    return ( 
        <div className="home">
            <div className='landing'>
                <img src={logo} className="landinglogo" alt="logo" />
            </div>
            <div className='housing'>
                <div className='body'>
                    <div className='titlestatementfont'>{titleStatement}</div>
                    <div className='titlestatementfont'>{titleStatementTwo}</div>
                </div>
            </div>
            <div className='socialmedia'>
                <div className='socialcontent'>
                    <div className='instabook'>
                        <div className='clickable' onClick={handleIgClick}>
                            <img src={instagram} className="insta" alt="insta logo" />
                        </div>
                        <div className='clickable' onClick={handleFbClick}>                 
                            <img src={facebook} className="fb" alt="facebook logo" />
                        </div>
                    </div>
                    <div className='emailcontainer'>
                        <div>    
                            <img src={email} className="email" alt="email logo" />
                        </div>
                    </div>
                    <div className='phonecontainer'>
                        <div>
                            <img src={phone} className="phone" alt="phone logo" />
                        </div>
                        <div className='phonetextcontainer'>
                            <p className='phonetext'>(443)525-4178</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='servicescontainer'>
                <div className='backdrop'>
                    <div className="header">
                        <h1>Services</h1>
                    </div>
                    <div className='body'>
                        <div className='services'>
                            <div className='servicesrowone'>
                                <div>
                                    <div className='hardscapebackground'>
                                        <p className='centertext'>Hardscaping</p>
                                        <div>
                                            <p className='bulletpoints'>Garden Walls</p>
                                            <p className='bulletpoints'>Walkways</p>
                                            <p className='bulletpoints'>Firepits</p>
                                            <p className='bulletpoints'>Patios</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='nativelanddesignbackground'>
                                        <p className='centertext'>Native Landscape Design</p>
                                        <div>
                                            <p className='bulletpoints'>Native Plants</p>
                                            <p className='bulletpoints'>Rain Gardens</p>
                                            <p className='bulletpoints'>Maintenance</p>
                                        </div>
                                    </div>
                                </div>
                                <div> 
                                    <div className='SWMbackground'>
                                        <p className='centertext'>Storm Water Management</p>
                                        <div>
                                            <p className='bulletpoints'>Assesements</p>
                                            <p className='bulletpoints'>Consultation</p>
                                            <p className='bulletpoints'>Minor Pruning</p>
                                            <p className='bulletpoints'>Removal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='servicesrowtwo'>
                                <div className='right'>
                                    <div className='permaculturebackground'>
                                        <p className='centertext'>Permaculture</p>
                                        <div>
                                            <p className='bulletpoints'>Native Plants</p>
                                            <p className='bulletpoints'>Rain Gardens</p>
                                            <p className='bulletpoints'>Maintenance</p>
                                        </div>
                                    </div>
                                </div>
                                <div> 
                                    <div className='arboriculturalbackground'>
                                        <p className='centertext'>Arboricultural</p>
                                        <div>
                                            <p className='bulletpoints'>Assesements</p>
                                            <p className='bulletpoints'>Consultation</p>
                                            <p className='bulletpoints'>Minor Pruning</p>
                                            <p className='bulletpoints'>Removal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sevicesbuttoncontainer'>
                                <div className='servicesbutton'>
                                    <Link to="/services">More Services</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="header">
                    <h1 className='font'>Why Choose Us?</h1>
                </div>
                <div className='whyanswercontainer'>
                    <div className='whyanswer'>
                        <div className='answersection'>
                            <h2 className='whyanswerheader'>Character Traits</h2>
                            <div>
                                <p className='bulletpoints'>Honesty</p>
                                <p className='bulletpoints'>Integrity</p>
                                <p className='bulletpoints'>Values</p>
                                <p className='bulletpoints'>Priniciples</p>
                            </div>
                        </div>
                        <div className='answersection'>
                            <h2 className='whyanswerheader'>Specific Knowledge</h2>
                            <div>
                                <p className='bulletpoints'>Ecology</p>
                                <p className='bulletpoints'>Recycling</p>
                                <p className='bulletpoints'>Natives</p>
                                <p className='bulletpoints'>Self-Sufficient</p>
                            </div>
                        </div>
                        <div className='answersection'>
                        <h2 className='whyanswerheader'>Thoughtful Design</h2>
                            <div>
                                <p className='bulletpoints'>Accomodating</p>
                                <p className='bulletpoints'>Listen</p>
                                <p className='bulletpoints'>Custom/Tailored</p>
                                <p className='bulletpoints'>Receptive Perosonal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='galleryhighlight'>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;