import './service.css';
import React from 'react';

const NLD = "Do you love the idea of planting to support wildlife, but don't know where to start? Let Ecoscapes use their deep-rooted botanical knowledge to aid in the design and installation of your site-specific, native plant garden today! This is regenerative landscaping aimed at balancing the needs of the property owner and ecosystem alike. Landscapes should be planted to look beautiful and provide ecosystem services. ";


const Hardscapes = " We work closely with you to create a beautiful and practical outdoor space customized to meet your unique needs. From patios and firepits to walkways, retaining walls and more, our projects utilize local, affordable and premium materials such as interlocking concrete pavers and natural stone. The products we use are carefully selected to best suit your hardscape vision.";


const Arboriculture = "International Society of Arboriculture (ISA) certification demonstrates knowledge of the arboricultural profession. The certified arborists at Ecoscapes will gladly perform a variety of services to take care of your beloved trees and property. Services include health assessments, forestry consultations, pruning, trimming and removals. Call us today to see what we can do to improve the health of your trees.";


const SWM = "The management of the surface water on your property is critical to the stability of your landscape. As severe weather patterns become more frequent and intense, the best time to prepare for this powerful force of nature draws closer and closer. We can assist with rain gardens, erosion control, streambank stabilization and more to aid in the preservation of your precious landscape.";


const Permaculture = "Have you ever dreamt of building a productive homestead to enjoy the abundance nature has to offer? Ecoscapes can help create your very own bountiful paradise right in your backyard. More than just edible landscaping, permaculture harmonizes self- sufficiency with environmental stewardship to create a functional and healthy relationship between ourselves and the Earth that sustains us.";

const Decks = "Decks and patios can help make the exterior of your home feel more inviting. Creating these functional outdoor spaces is what Ecoscapes, LLC does best. We can build you a new deck or patio, replace/update features of an existing deck, or provide maintenance to an existing deck to extend its life. We offer full-service design/installation that will simplify the process of turning your vision into reality. ";

const OutdoorKitchens = "An outdoor kitchen is a stunning addition to your home for those who love to spend their spring, summer and fall days enjoying the fresh air of the great outdoors. Outdoor kitchens are a great way to bring friends and family together to make memories that will last a lifetime. Not only do outdoor kitchens provide countless opportunities for enjoyment, they also raise your property’s value!";

const GeneralLandscaping = "We specialize in native/edible landscaping; however, we also offer many traditional landscaping services such as pruning, mulching, weeding and more! From commercial installation to residential gardens, we do it all. If you have any questions about other services not listed you can reach out to us by phone, email or on our social media pages!";


const ServiceDesktop = () => {
return ( 
    <div>
        <div className='servicebackground'>
        </div>
        <div className="service">
            <div id="targetNative" className='serviceheadercontainer'>
                <h2 className='serviceheader'>Native Landscape Design</h2>
            </div>
            <div className='backdrop'>
                <div className='bodytwo'>
                    <div className='servicepageimagescontainer'>
                        <div className="NLDServicebackground">
                        </div>
                    </div>
                    <div className='servicetext'>
                        <div>
                            {NLD}
                        </div>
                    </div>
                </div>
            </div>
            <div id="targetHardscaping" className='serviceheadercontainer'>
                <h2 className='serviceheader'>Hardscapes</h2>   
            </div>
            <div className='backdrop'>
                <div className='bodytwo'>
                    <div className='servicetext'>
                        <div>
                            {Hardscapes}
                        </div>
                    </div>
                    <div className='servicepageimagescontainer'>
                        <div className="hardscapingservicebackground">
                        </div>
                    </div>
                </div>
            </div>
            <div id="targetStorm" className='serviceheadercontainer'>
                <h2 className='serviceheader'>Storm Water Management</h2>
            </div>
            <div className='backdrop'>
                <div className='bodytwo'>
                    <div className='servicepageimagescontainer'>
                        <div className="SWMServicebackground">
                        </div>
                    </div>
                    <div className='servicetext'>
                        <div>
                            {SWM}
                        </div>
                    </div>
                </div>
            </div>
            <div id="targetPerma" className='serviceheadercontainer'>
                <h2 className='serviceheader'>Permaculture</h2>
            </div>
            <div className='backdrop'>
                <div className='bodytwo'>
                    <div className='servicetext'>
                        <div>
                            {Permaculture}
                        </div>
                    </div>
                    <div className='servicepageimagescontainer'>
                        <div className="permacultureservicebackground">
                        </div>
                    </div>
                </div>
            </div>
            <div id="targetArbor" className='serviceheadercontainer'>
                <h2 className='serviceheader'>Arboriculture</h2>
            </div>
            <div className='backdrop'>
                <div className='bodytwo'>
                    <div className='servicepageimagescontainer'>
                        <div className="arborcultureservicebackground">
                        </div>
                    </div>
                    <div className='servicetext'>
                        <div>
                            {Arboriculture}
                        </div>
                    </div>
                </div>
            </div>
            <div id="targetDecks" className='serviceheadercontainer'>
                <h2 className='serviceheader'>Decks</h2>
            </div>
            <div className='backdrop'>
                <div className='bodytwo'>
                    <div className='servicetext'>
                        <div>
                            {Decks}
                        </div>
                    </div>
                    <div  className='servicepageimagescontainer'>
                        <div className="decksservicebackground">
                        </div>
                    </div>    
                </div>
            </div>
            <div className='serviceheadercontainer'>
                <h2 className='serviceheader'>Outdoor Kitchens</h2>
            </div>
            <div className='backdrop'>
                <div className='bodytwo'>
                    <div className='servicepageimagescontainer'>
                        <div className="outdoorkitchenservicebackground">
                        </div>
                    </div>
                    <div className='servicetext'>
                        <div>
                            {OutdoorKitchens}
                        </div>
                        <div id="targetgeneral"></div>
                    </div>
                </div>
            </div>
            <div className='serviceheadercontainer'>
                <h2 className='serviceheader'>General Landscaping</h2>
            </div>
            <div className='backdrop'>
                <div className='bodytwo'>
                    <div className='servicetext'>
                        <div>
                            {GeneralLandscaping}
                        </div>
                    </div>
                    <div className='servicepageimagescontainer'>
                        <div className="generallandscapingservicebackground">
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
 );
}

export default ServiceDesktop;