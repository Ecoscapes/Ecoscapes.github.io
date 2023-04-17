import styles from './HomeMobileA.module.css';
import React from 'react';
import google from '../Images/Googlegreyscale.png';
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import phone from '../Images/phone-square.png';
import email from '../Images/email-icon.png';
import { Link } from 'react-router-dom';
import Carousel, { CarouselItem } from "../Carousel/Carousel.js"
import { ScrollLink } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';

const Home = () => {


    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset }); 
    }


    const handleGoogleClick = () => {
        window.open("https://www.google.com/maps/place/Havre+De+Grace,+MD+21078/@39.5478211,-76.1242585,13.5z/data=!4m6!3m5!1s0x89c7c0a939bed6b9:0x227c9fba4b7aa3fb!8m2!3d39.5492792!4d-76.091617!16zL20vMHR2dnA",
                     "_blank");
    }

    const handleFbClick = () => {
        window.open("https://www.facebook.com/EcoscapesMD/", "_blank");
    }

    const handleIgClick = () => {
        window.open("https://www.instagram.com/ecoscapes_md/", "_blank");
    }

    const handlePhoneClick = () => {
        window.open('tel:4435254178')
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
        <div className={styles.home}>
            <div className={styles.landingcontainer}>
                <div className={styles.landing}>
                    <div className={styles.landingtitletext}>
                        <div>
                            <h1 className={styles.ecosapeslanding}>Ecoscapes</h1>
                        </div>
                        <div>
                            <h2 className={styles.llclanding}>LLC</h2>
                        </div>
                    </div>
                    {/* <img src={logo} className="landinglogo" alt="logo" /> */}
                </div>
                <div className={styles.housing}>
                    <div className={styles.body}>
                        <div className={styles.titlestatementfont}>{titleStatement}</div>
                        <div className={styles.titlestatementfont}>{titleStatementTwo}</div>
                    </div>
                </div>
                <div className={styles.socialmedia}>
                    <div className={styles.socialcontent}>
                        <div className={styles.instabook}>
                            <div className={styles.clickable} onClick={handleIgClick}>
                                <img src={instagram} className={styles.insta} alt="insta logo" />
                            </div>
                            <div className={styles.clickable} onClick={handleFbClick}>
                                <img src={facebook} className={styles.fb} alt="facebook logo" />
                            </div>
                            <a href="mailto:dan@ecoscapesmd.com &cc=joe@ecoscapesmd.com" className={styles.clickable}>
                                <img src={email} className={styles.email} alt="email logo" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.phonecontainer} >
                        <div className={styles.phonetextcontainer} > 
                            <p className={styles.phonetext} onClick={handlePhoneClick}>(443)525-4178</p>
                        </div>
                    </div>
                    <div className={styles.locationcontainer} >
                        <div className={styles.locationtextcontainer} onClick={handleGoogleClick}> 
                            <p className={styles.locationtext}>Havre de Grace, MD</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.servicescontainer}>
                <div className={styles.backdrop}>
                    <div className={styles.header}>
                        <h1>Services</h1>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.services}>
                            <div>
                                <div className={styles.nativelanddesignbackground}>
                                    <p className={styles.centertext}>Native Landscape Design</p>
                                    <div>
                                        <p className={styles.bulletpoints}>Design</p>
                                        <p className={styles.bulletpoints}>Install</p>
                                        <p className={styles.bulletpoints}>Maintain</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.hardscapebackground}>
                                    <p className={styles.centertext}>Hardscaping</p>
                                    <div>
                                        <p className={styles.bulletpoints}>Patios</p>
                                        <p className={styles.bulletpoints}>Walkways</p>
                                        <p className={styles.bulletpoints}>Firepits</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.SWMbackground}>
                                    <p className={styles.centertext}>Storm Water Management</p>
                                    <div>
                                        <p className={styles.bulletpoints}>Rain Gardens</p>
                                        <p className={styles.bulletpoints}>Erosion Control</p>
                                        <p className={styles.bulletpoints}>Streambank Stabilization</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.permaculturebackground}>
                                    <p className={styles.centertext}>Permaculture</p>
                                    <div>
                                        <p className={styles.bulletpoints}>Edible Landscaping</p>
                                        <p className={styles.bulletpoints}>Homestead Design</p>
                                        <p className={styles.bulletpoints}>Education</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.arboriculturalbackground}>
                                    <p className={styles.centertext}>Arboricultural</p>
                                    <div>
                                        <p className={styles.bulletpoints}>Consult</p>
                                        <p className={styles.bulletpoints}>Pruning</p>
                                        <p className={styles.bulletpoints}>Removals</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.sevicesbuttoncontainer}>
                                <div className={styles.servicesbutton}>
                                    <HashLink to="/services#targetDecks" scroll={scrollWithOffset}>More Services</HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className={styles.header}>
                    <h2 className={styles.chooseheader}>Why Choose Us?</h2>
                </div>
                <div className={styles.whyanswercontainer}>
                    <div className={styles.whyanswer}>
                        <div className={styles.answersection}>
                            <h2 className={styles.whyanswerheader}>Professionalism and Integrity</h2>
                            <p className={styles.choosetext}>
                                {professionalism}
                            </p>
                        </div>
                        <div className={styles.answersection}>
                            <div>
                                <h2 className={styles.whyanswerheader}>Environmental Practices</h2>
                            </div>
                            <p className={styles.choosetext}>
                                {environmental}
                            </p>
                        </div>
                        <div className={styles.answersection}>
                            <h2 className={styles.whyanswerheader}>Individualized Design</h2>
                            <p className={styles.choosetext}>
                                {idividualized}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.header}>
                    <h2 className={styles.chooseheader}>Gallery</h2>
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

export default Home;