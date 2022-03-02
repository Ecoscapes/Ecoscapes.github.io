import './index.css';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
+ "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
+ "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
+ "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
+ "sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const ipsum = "Dan Thompson, partner at Ecoscapes LLC is a business major with a background in sales. "
                + "In his 7+ years selling millions in hardscaping and masonry materials, he fell in love "
                + "with helping clients realize their vision for their outdoor spaces. In 2020 Dan teamed "
                + "with Joe and founded Ecoscapes with the goal of designing and installing custom outdoor "
                + "spaces using environmentally responsible practices. Carrying with him customer service "
                + "experience and product knowledge, Dan strives to give high quality service and always "
                + "maintain honesty and integrity in business."

const dolor = "Joseph Linsalata created Ecoscapes, llc to bridge the gap between landscape design, "
                + "ecological restoration, and self-sufficiency. Landscapes should be used to their "
                + "full potential (or something along those lines.) He obtained a bacholers degree "
                + "in both Ethnobotany and Environmental Planning in order to build landscapes that "
                + "are ecologically diverse and ethnobotanically significant. He combines permaculture "
                + "design principles with native plant knowledge to develop beautiful landscapes tailored "
                + "to meet the needs of the landowner and local wildlife alike."

const mission = "While we specialize in native/edible landscaping design and installation, we also offer many traditional "
                + "landscaping services such as pruning, mulching, and weeding. Hardscaping services include installation "
                + "and maintenance of patios, walkways, garden walls, fire pits, and more."
                + "As licensed arborists and Maryland tree experts,the professionals at Ecoscapes, llc are equipped to perform "
                + "arboricultural assessments,forestry consultations, and minor pruning/ tree removals."
                + "Our goal is to design, install and maintain landscapes to increase quality of life for all."
                + "We love to incorporate native, pollinator-friendly plants in our designs as well as other ethnobotanically "
                + "significant plants that offer us food, medicine, and more. The transformation of under-utilized outdoor spaces "
                + "into functional and aesthetic areas is accomplished via the use of careful site observation, geographically "
                + "native plants, and permaculture design principles."
               

const About = () => {
    return ( 
        <div className="about">
            <div className='founders'>
                <h1 className='font'>Meet the Founders</h1>
            </div>
            <div className='backdrop'>
                <div className='bodytwo'>
                    <div className="joe">
                        <div>
                            <div className='text'>
                                {dolor}
                            </div>
                        </div>
                        <div className="joeimg">
                        </div>
                    </div>
                    <div className="dan">
                        <div className="danimg">
                        </div>
                        <div>
                            <div className='text'>
                                {ipsum}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div>
                    <div className="header">
                        <h1 className='font'>Ecoscapes Mission</h1>
                    </div>
                    <div className='backdrop'>
                        <div className='bodytwo'>
                            <div className='text'>
                                {mission}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default About;