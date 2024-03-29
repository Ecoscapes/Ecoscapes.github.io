import styles from './ServiceMobile.module.css';
import React from 'react';

const NLD = "Do you love the idea of planting to support wildlife, but don't know where to start? Let Ecoscapes use their deep-rooted botanical knowledge to aid in the design and installation of your site-specific, native plant garden today! This is regenerative landscaping aimed at balancing the needs of the property owner and ecosystem alike. Landscapes should be planted to look beautiful and provide ecosystem services. ";


const Hardscapes = " We work closely with you to create a beautiful and practical outdoor space customized to meet your unique needs. From patios and firepits to walkways, retaining walls and more, our projects utilize local, affordable and premium materials such as interlocking concrete pavers and natural stone. The products we use are carefully selected to best suit your hardscape vision.";


const Arboriculture = "International Society of Arboriculture (ISA) certification demonstrates knowledge of the arboricultural profession. The certified arborists at Ecoscapes will gladly perform a variety of services to take care of your beloved trees and property. Services include health assessments, forestry consultations, pruning, trimming and removals. Call us today to see what we can do to improve the health of your trees.";


const SWM = "The management of the surface water on your property is critical to the stability of your landscape. As severe weather patterns become more frequent and intense, the best time to prepare for this powerful force of nature draws closer and closer. We can assist with rain gardens, erosion control, streambank stabilization and more to aid in the preservation of your precious landscape.";


const Permaculture = "Have you ever dreamt of building a productive homestead to enjoy the abundance nature has to offer? Ecoscapes can help create your very own bountiful paradise right in your backyard. More than just edible landscaping, permaculture harmonizes self- sufficiency with environmental stewardship to create a functional and healthy relationship between ourselves and the Earth that sustains us.";

const Decks = "Decks and patios can help make the exterior of your home feel more inviting. Creating these functional outdoor spaces is what Ecoscapes, LLC does best. We can build you a new deck or patio, replace/update features of an existing deck, or provide maintenance to an existing deck to extend its life. We offer full-service design/installation that will simplify the process of turning your vision into reality. ";

const OutdoorKitchens = "An outdoor kitchen is a stunning addition to your home for those who love to spend their spring, summer and fall days enjoying the fresh air of the great outdoors. Outdoor kitchens are a great way to bring friends and family together to make memories that will last a lifetime. Not only do outdoor kitchens provide countless opportunities for enjoyment, they also raise your property’s value!";

const GeneralLandscaping = "We specialize in native/edible landscaping; however, we also offer many traditional landscaping services such as pruning, mulching, weeding and more! From commercial installation to residential gardens, we do it all. If you have any questions about other services not listed you can reach out to us by phone, email or on our social media pages!";




const ServiceMobile = () => {
    return (
        <div>
            <div className={styles.servicebackground}>
            </div>
            <div className={styles.service}>
                <div className={styles.serviceheadercontainer}>
                    <h2 className={styles.serviceheader}>Native Landscape Design</h2>
                </div>
                <div className={styles.backdrop}>
                    <div className={styles.bodytwo}>
                        <div className={styles.servicepageimagescontainer}>
                            <div className={styles.NLDServicebackground}>
                            </div>
                        </div>
                        <div className={styles.servicemobiletext}>
                            <div>
                                {NLD}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.serviceheadercontainer}>
                    <h2 className={styles.serviceheader}>Hardscapes</h2>
                </div>
                <div className={styles.backdrop}>
                    <div className={styles.bodytwo}>
                        <div className={styles.servicepageimagescontainer}>
                            <div className={styles.hardscapingservicebackground}>
                            </div>
                        </div>
                        <div className={styles.servicemobiletext}>
                            <div>
                                {Hardscapes}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.serviceheadercontainer}>
                    <h2 className={styles.serviceheader}>Arboriculture</h2>
                </div>
                <div className={styles.backdrop}>
                    <div className={styles.bodytwo}>
                        <div className={styles.servicepageimagescontainer}>
                            <div className={styles.arborcultureservicebackground}>
                            </div>
                        </div>
                        <div className={styles.servicemobiletext}>
                            <div>
                                {Arboriculture}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.serviceheadercontainer}>
                    <h2 className={styles.serviceheader}>Permaculture</h2>
                </div>
                <div className={styles.backdrop}>
                    <div className={styles.bodytwo}>
                        <div className={styles.servicepageimagescontainer}>
                            <div className={styles.permacultureservicebackground}>
                            </div>
                        </div>
                        <div className={styles.servicemobiletext}>
                            <div>
                                {Permaculture}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.serviceheadercontainer}>
                    <h2 className={styles.serviceheader}>Storm Water Management</h2>
                </div>
                <div className={styles.backdrop}>
                    <div className={styles.bodytwo}>
                        <div className={styles.servicepageimagescontainer}>
                            <div className={styles.SWMServicebackground}>
                            </div>
                        </div>
                        <div className={styles.servicemobiletext}>
                            <div>
                                {SWM}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="targetDecks" className={styles.serviceheadercontainer}>
                    <h2 className={styles.serviceheader}>Decks</h2>
                </div>
                <div className={styles.backdrop}>
                    <div className={styles.bodytwo}>
                        <div className={styles.servicepageimagescontainer}>
                            <div className={styles.decksservicebackground}>
                            </div>
                        </div>
                        <div className={styles.servicemobiletext}>
                            <div>
                                {Decks}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.serviceheadercontainer}>
                    <h2 className={styles.serviceheader}> Outdoor Kitckens</h2>
                </div>
                <div className={styles.backdrop}>
                    <div className={styles.bodytwo}>
                        <div className={styles.servicepageimagescontainer}>
                            <div className={styles.outdoorkitchenservicebackground}>
                            </div>
                        </div>
                        <div className={styles.servicemobiletext}>
                            <div>
                                {OutdoorKitchens}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.serviceheadercontainer}>
                    <h2 className={styles.serviceheader}>General Lanscaping</h2>
                </div>
                <div className={styles.backdrop}>
                    <div className={styles.bodytwo}>
                        <div className={styles.servicepageimagescontainer}>
                            <div className={styles.generallandscapingservicebackground}>
                            </div>
                        </div>
                        <div className={styles.servicemobiletext}>
                            <div>
                                {GeneralLandscaping}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceMobile;