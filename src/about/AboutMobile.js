import styles from './AboutMobileA.module.css';
import React from 'react';

const dantext = "Dan Thompson, partner at Ecoscapes LLC is a business major with a background in sales. "
    + "In his 7+ years selling millions in hardscaping and masonry materials, he fell in love "
    + "with helping clients realize their vision for their outdoor spaces. In 2020 Dan teamed "
    + "with Joe and founded Ecoscapes with the goal of designing and installing custom outdoor "
    + "spaces using environmentally responsible practices. Carrying with him customer service "
    + "experience and product knowledge, Dan strives to give high quality service and always "
    + "maintain honesty and integrity in business."

const joetext = "Joseph Linsalata created Ecoscapes, LLC to bridge the gap between landscape design, ecological "
    + "restoration, and self-sufficiency. Joseph obtained a bachelor’s degree in both Ethnobotany and "
    + "Environmental Planning from Frostburg State University in order to design landscapes that are "
    + "ecologically diverse and ethnobotanically rich. This career path was an obvious choice for Joseph "
    + "as he is a creative, ambitious, and observant environmentalist with a DIY drive and an altruistic goal: "
    + "To share knowledge that nourishes us and to promote sustainability by changing how landscaping is perceived."

const mission = "The team at Ecoscapes, LLC is equipped with professional trade certifications and extensive industry "
    + "knowledge to aid in the transformation of your property into a stunning ecological oasis. We help you "
    + "realize your property's ultimate potential and equip you with the tools and resources needed for you to "
    + "enjoy your new landscape. We plant the right species in the right place and ensure that every design element "
    + "is properly positioned to achieve maximum functionality. "

const about = "Accountability is paramount at Ecoscapes, llc. We ensure that every task is performed with purpose and respect "
    + "for the environment.  The satisfaction that we "
    + "receive from installing the outdoor project of your dreams is what drives us to produce captivating "
    + "results fueled by passion and tenacity. We feel better when we notice our actions improving the lives of others, "
    + "so let us aid in the creation of an outdoor space we all can be proud of. "

// const mission = "At Ecoscapes, llc we design, install and maintain landscapes to increase the quality of "
//                 + "life for all. We recognize the environmental reprocussions of irresponsible landscaping "
//                 +" decisions. Landscape installations need to support the health of the Chesapeake Bay as "
//                 + "well as declining wildlife populations. Accountability is paramount at Ecoscapes,llc and, "
//                 + "so we plant in accordance with ecological restoration, acting regeneratively, not just "
//                 + "sustainably. The team utilizes permaculture design principles to create landscapes that are "
//                 + "beautiful, functional, and eco-friendly. We love to incorporate native, pollinator-friendly "
//                 + "plants in our designs as well as other ethnobotanically significant plants that offer us food, "
//                 + "medicine, and more! We want your property to work efficiently and so we aim to harmonize nature's "
//                 + "demands with your own by observing site-specific conditions and utilizing these resources to make "
//                 + "your yard work for you, not against you. "


const AboutDesktop = () => {
    return (
        <div className={styles.about}>
            <div>
                <div className={styles.founders}>
                    <h2 className={styles.aboutheaders}>Ecoscapes Mission</h2>
                </div>
                <div className={styles.backdrop}>
                    <div className={styles.bodythree}>
                        <div className={styles.missioncontainer}>
                            <div className={styles.text}>
                                {about}
                            </div>
                            <div className={styles.missionimagecontainer}>
                            </div>
                            <div className={styles.text}>
                                {mission}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.header}>
                <h2 className={styles.aboutheaders}>Meet the Founders</h2>
            </div>
            <div className={styles.founderscontainer}>
                <div className={styles.backdrop}>
                    <div className={styles.bodythree}>
                        <div className={styles.joe}>
                            <div className={styles.joeimg}>
                            </div>
                            <div>
                                <div className={styles.textjoe}>
                                    {joetext}
                                </div>
                            </div>
                        </div>
                        <div className={styles.dan}>
                            <div className={styles.danimg}>
                            </div>
                            <div>
                                <div className={styles.textdan}>
                                    {dantext}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutDesktop;