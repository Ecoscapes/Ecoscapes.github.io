import './index.css';

const NLD = "Do you love the idea of planting to feed wildlife but don't know where to start? "
                + "Let Ecoscapes use their botanical knowledge to design your site specific native "
                + "plant garden today. This is regenerative landscaping aimed at reversing the destructive "
                + "practices of landscaping with invasive plant species.";

const Permaculture = "Have you ever dreamt of building a personal garden of Eden in your own backyard? Ecoscapes "
                    + "can help build a productive homestead for you to enjoy the bounty of nature's resources "
                    + "right at home. More than just edible landscaping, permaculture harmonizes self-sufficiency "
                    + "with environmental stewardship to create a functional, healthy relationship between ourselves "
                    + "and the Earth that sustains us. ";


const Hardscapes = "From patios and firepits to walkways and more, Ecoscapes works closely with you to create a beautiful "
                    + "and practical outdoor space. Ecoscapes designs focus on the unique goals and needs of each client, "
                    + "with careful product selection utilizing the best and most affordable locally-available materials including "
                    + "interlocking concrete pavers and natural stone.";


const OutdoorKitchens = "An outdoor kitchen is a stunning addition to your home for those who love to spend their spring, summer and "
                            + "warm fall days enjoying the fresh air of the great outdoors. Outdoor kitchens are a great way to bring "
                            + "friends and family together to make memories that will last a lifetime. Not only do outdoor kitchens "
                            + "provide countless opportunities for enjoyment, they also raise your property’s value!";

const GeneralLandscaping = "We specialize in native/edible landscaping; however, we also offer many traditional landscaping services "
                            + "such as pruning, mulching, weeding and more! From commercial installation to residential gardens, we do "
                            + "it all so that you can enjoy your outdoor space. If you have any questions about other services not listed "
                            + "you can reach out to us by phone, email or on our social media pages! ";


const Arboriculture = "ISA certification demonstrates knowledge of the upper cultural profession certified arborists at Eco scapes will "
                        + "gladly perform a variety of upper cultural services to take care of your beloved trees including health assessments "
                        + "pruning health assessments pruning and minor removals. ";

               
const SWM = "Rain gardens, erosion control, streambank stabilization and more;? Ecoscapes can help you manage the water on your property and "
                + "a variety of ways. As storms become more frequent and intense now is the best time to prepare prepare for this powerful force "
                + " of nature. ";


const Service = () => {
return ( 
    <div>
        <div className = 'servicebackground'>
        </div>
        <div className="service">
            <div className='serviceheadercontainer'>
                <h2 className='serviceheader'>Native Landscaping Design</h2>
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
            <div className='serviceheadercontainer'>
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
            <div className='serviceheadercontainer'>
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
            <div className='serviceheadercontainer'>
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
            <div className='serviceheadercontainer'>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
 );
}

export default Service;