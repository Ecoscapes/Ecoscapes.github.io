import './index.css';
// import logo from './Images/invert.png';
// import logo from './Images/home/landing.PNG';
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

    const titleStatement = "We provide quality, custom landscape services";
    const titleStatementTwo = " with mother nature in mind.";
    // const titleStatementThree = "We provide quality, custom-tailored services at an honest price.";

    const professionalism = "At Ecoscapes LLC, honesty and integrity are considered central values near "
                            + "and dear to our hearts. It is our priority to provide you with a fair, "
                            + "comprehensive estimate and to execute our work with class and professionalism. "
                            + "As all Maryland contractors should, we hold an MHIC license and are fully insured. "
                            + "Ecoscapes strives to provide you with exceptional customer service and communication "
                            + "throughout the entire process from the estimate through the completion of every project.";


    const environmental = "At Ecoscapes, LLC we design, install and maintain landscapes to increase the "
                            + "quality of life for all. We recognize the environmental repercussions of "
                            + "irresponsible landscaping and so we plant with ecological restoration in "
                            + "mind, acting regeneratively, not just sustainably. The team utilizes "
                            + "permaculture design principles to create landscapes and hardscapes that "
                            + "are beautiful, functional, and eco-friendly. We love to incorporate native, "
                            + "pollinator-friendly plants in our designs as well as other ethnobotanically "
                            + "significant plants that offer us food, medicine, and more!";


    const idividualized = "We provide our customers with individualized solutions to their unique landscaping "
                            + "and hardscaping needs. Your property's site-specific conditions are carefully "
                            + "documented and utilized to develop installations that work in agreement with your "
                            + "landscape. Our designs always strive to find the perfect fit for our clients while "
                            + "taking into consideration both aesthetics and functionality. Ecoscapes works closely "
                            + "with you through each step of the process to turn your vision into a reality.";


    return (
        <div className="home">
            <div className='landing'>
                <div className='landingtitletext'>
                    <div>
                        <h1 className='ecosapeslanding'>Ecoscapes</h1>
                    </div>
                    <div>
                        <h2 className='llclanding'>LLC</h2>
                    </div>
                </div>
                {/* <img src={logo} className="landinglogo" alt="logo" /> */}
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
                                            <p className='bulletpoints'>Patios</p>
                                            {/* <p className='bulletpoints'>Garden Walls</p> */}
                                            <p className='bulletpoints'>Walkways</p>
                                            <p className='bulletpoints'>Firepits</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='nativelanddesignbackground'>
                                        <p className='centertext'>Native Landscape Design</p>
                                        <div>
                                            <p className='bulletpoints'>Design</p>
                                            <p className='bulletpoints'>Install</p>
                                            <p className='bulletpoints'>Maintain</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='SWMbackground'>
                                        <p className='centertext'>Storm Water Management</p>
                                        <div>
                                            <p className='bulletpoints'>Rain Gardens</p>
                                            <p className='bulletpoints'>Erosion Control</p>
                                            <p className='bulletpoints'>Steambank Stabilization</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='servicesrowtwo'>
                                <div className='right'>
                                    <div className='permaculturebackground'>
                                        <p className='centertext'>Permaculture</p>
                                        <div>
                                            <p className='bulletpoints'>Edible Landscaping</p>
                                            <p className='bulletpoints'>Homestead Design</p>
                                            <p className='bulletpoints'>Education</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='arboriculturalbackground'>
                                        <p className='centertext'>Arboricultural</p>
                                        <div>
                                            <p className='bulletpoints'>Consult</p>
                                            <p className='bulletpoints'>Pruning</p>
                                            <p className='bulletpoints'>Removals</p>
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
                            <h2 className='whyanswerheader'>Professionalism and Integrity</h2>
                            <div className='choosetext'>
                                {professionalism}
                            </div>
                        </div>
                        <div className='answersection'>
                            <h2 className='whyanswerheader'>Environmental Practices</h2>
                            <div className='choosetext'>
                                {environmental}
                            </div>
                        </div>
                        <div className='answersection'>
                            <h2 className='whyanswerheader'>Individualized Design</h2>
                            <div className='choosetext'>
                                {idividualized}
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