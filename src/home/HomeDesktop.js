import './homedesktopA.css';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel, { CarouselItem } from "../Carousel/Carousel.js"
import google from '../Images/Googlegreyscale.png';
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import phone from '../Images/phone-square.png';
import email from '../Images/email-icon.png';
// import one from '../Images/Gallery/1.jpg';
import { Link } from 'react-router-dom';
import { ScrollLink } from 'react-scroll';
import { FunctionsRounded } from '@mui/icons-material';
import { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

const HomeDesktop = () => {
    const navigate = useNavigate();

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -127; 
        window.scrollTo({ top: yCoordinate + yOffset }); 
    }

    const handleFbClick = () => {
        window.open("https://www.facebook.com/EcoscapesMD/", "_blank");
    }

    const handleIgClick = () => {
        window.open("https://www.instagram.com/ecoscapes_md/", "_blank");
    }

    const handleServiceClick = () => {
        navigate("/services");
    }

    // const handleHardscapingClick = () => {
    //    refType.
    // };


    const handleEmailClick = () => {
        navigate("/contact");
    }

    const handlePhoneClick = () => {
        navigate("/contact");
    }

    const handleGoogleClick = () => {
        window.open("https://www.google.com/maps/place/Havre+De+Grace,+MD+21078/@39.5478211,-76.1242585,13.5z/data=!4m6!3m5!1s0x89c7c0a939bed6b9:0x227c9fba4b7aa3fb!8m2!3d39.5492792!4d-76.091617!16zL20vMHR2dnA",
                     "_blank");
    }



    // const titleStatement = "We are an ecologically conscious";
    // const titleStatementTwo = "Landscaping and Hardscaping company.";
    // const titleStatementThree = "We provide quality, custom-tailored services at an honest price.";

    const titleStatement = "We provide quality, custom landscape services";
    const titleStatementTwo = " with mother nature in mind.";
    // const titleStatementThree = "We provide quality, custom-tailored services at an honest price.";

    const professionalism = "At Ecoscapes LLC, honesty and integrity are considered central values near and dear to our hearts. It is our priority to provide you with a fair, comprehensive estimate and to execute our work with class and professionalism. As all Maryland contractors should, we hold an MHIC license and are fully insured. Ecoscapes strives to provide you with exceptional customer service and communication throughout the entire process from the estimate through the completion of every project.";


    const environmental = "At Ecoscapes, LLC we design, install and maintain landscapes to increase the quality of life for all. We plant with ecological restoration in mind, acting regeneratively, not just sustainably. We love to incorporate native, pollinator-friendly plants in our designs as well as other ethnobotanically significant plants that offer us food, medicine, and more! We compost our yard waste, repurpose our construction scraps and stack vehicle trips in an effort to reduce, reuse, and recycle.";


    const idividualized = "We provide our customers with individualized solutions to their unique landscaping and hardscaping needs. Your property's site-specific conditions are carefully analyzed to develop installations that work in agreement with your landscape. Our designs always strive to find the perfect fit for our clients while taking into consideration both aesthetics and functionality. Ecoscapes works closely with you through each step of the process to turn your vision into a reality.";


    return (
        <div className="home">
            <div className='landingcontainer'>
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
                        <div className='socialclickables'>
                            <div className='instabook'>
                                <div className='clickable' onClick={handleIgClick}>
                                    <img src={instagram} className="insta" alt="insta logo" />
                                </div>
                                <div className='clickable' onClick={handleFbClick}>
                                    <img src={facebook} className="fb" alt="facebook logo" />
                                </div>
                            </div>
                            <div className='emailcontainer'>
                                <HashLink to="/contact#" scroll={scrollWithOffset} >
                                    <img src={email} className="email" alt="email logo" />
                                </HashLink>
                            </div>
                            <div className='phonecontainer'>
                                <HashLink to="/contact#" scroll={scrollWithOffset} >
                                    <img src={phone} className="phone" alt="phone logo" />
                                </HashLink>
                            </div>
                        </div>
                        <div className='clickable' onClick={handlePhoneClick}>
                                <HashLink to="/contact#" scroll={scrollWithOffset} >
                                     <div className='phonetextcontainer'>
                                        <div className='phonetext'>(443)525-4178</div>
                                    </div>
                                </HashLink>
                        </div>
                        <div className='locationcontainer'>
                            <div className='clickable' onClick={handleGoogleClick}>
                                    <img src={google} className="insta" alt="insta logo" />
                                </div>
                            <div className='locationtextcontainer' onClick={handleGoogleClick}>
                                    <p className='phonetext'>Havre de Grace, MD</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='servicescontainer'>
                <div className='backdrop'>
                    <div className="header">
                    <h1 className='servicesSectionHeader'>Services</h1>
                    </div>
                    <div className='body'>
                        <div className='services'>
                            <div className='servicesrowone'>
                                <div>
                                    <HashLink to="/services#targetHardscaping" scroll={scrollWithOffset}>
                                        <div className='hardscapebackground'>
                                            <p className='centertext'>Hardscaping</p>
                                            <div>
                                                <p className='bulletpoints'>Patios</p>
                                                <p className='bulletpoints'>Walkways</p>
                                                <p className='bulletpoints'>Firepits</p>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>
                                <div>
                                    <HashLink to="/services#targetNative" scroll={scrollWithOffset}>   
                                        <div className='nativelanddesignbackground'>
                                            <p className='centertext'>Native Landscape Design</p>
                                            <div>
                                                <p className='bulletpoints'>Design</p>
                                                <p className='bulletpoints'>Install</p>
                                                <p className='bulletpoints'>Maintain</p>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>
                                <div>
                                    <HashLink to="/services#targetStorm" scroll={scrollWithOffset}>
                                        <div className='SWMbackground'>
                                            <p className='centertext'>Storm Water Management</p>
                                            <div>
                                                <p className='bulletpoints'>Rain Gardens</p>
                                                <p className='bulletpoints'>Erosion Control</p>
                                                <p className='bulletpoints'>Streambank Stabilization</p>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>
                            </div>
                            <div className='servicesrowtwo'>
                                <div className='right'>
                                    <HashLink to="/services#targetPerma" scroll={scrollWithOffset}>
                                        <div className='permaculturebackground'>
                                            <p className='centertext'>Permaculture</p>
                                            <div>
                                                <p className='bulletpoints'>Edible Landscaping</p>
                                                <p className='bulletpoints'>Homestead Design</p>
                                                <p className='bulletpoints'>Education</p>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>
                                <div>
                                    <HashLink to="/services#targetArbor" scroll={scrollWithOffset}>   
                                        <div className='arboriculturalbackground'>
                                            <p className='centertext'>Arboricultural</p>
                                            <div>
                                                <p className='bulletpoints'>Consult</p>
                                                <p className='bulletpoints'>Pruning</p>
                                                <p className='bulletpoints'>Removals</p>
                                            </div>
                                        </div>
                                    </HashLink>
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
                    <h2 className='chooseheader'>Why Choose Us?</h2>
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
                            <div>
                                <h2 className='whyanswerheader'>Environmental Practices</h2>
                            </div>
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
            <div className="header">
                    <h2 className='chooseheader'>Gallery</h2>
                </div>
            <div className='galleryhighlight'>
                <Carousel>
                    <CarouselItem><div className='imageOne'></div></CarouselItem>
                    <CarouselItem><div className='imageTwo'></div></CarouselItem>
                    <CarouselItem><div className='imageThree'></div></CarouselItem>
                    <CarouselItem><div className='imageFour'></div></CarouselItem>
                    <CarouselItem><div className='imageFive'></div></CarouselItem>
                    <CarouselItem><div className='imageSix'></div></CarouselItem>
                    <CarouselItem><div className='imageSeven'></div></CarouselItem>
                    <CarouselItem><div className='imageEight'></div></CarouselItem>
                    <CarouselItem><div className='imageNine'></div></CarouselItem>
                    <CarouselItem><div className='imageHomePage'></div></CarouselItem>
                    <CarouselItem><div className='imageHomePageOne'></div></CarouselItem>
                    <CarouselItem><div className='imageHomePageTwo'></div></CarouselItem>
                </Carousel>
            </div>
        </div>
    );
}

export default HomeDesktop;