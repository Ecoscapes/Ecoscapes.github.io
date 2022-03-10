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

const mission = "At Ecoscapes, llc we design, install and maintain landscapes to increase the quality of "
                + "life for all. We recognize the environmental reprocussions of irresponsible landscaping "
                +" decisions. Landscape installations need to support the health of the Chesapeake Bay as "
                + "well as declining wildlife populations. Accountability is paramount at Ecoscapes,llc and, "
                + "so we plant in accordance with ecological restoration, acting regeneratively, not just "
                + "sustainably. The team utilizes permaculture design principles to create landscapes that are "
                + "beautiful, functional, and eco-friendly. We love to incorporate native, pollinator-friendly "
                + "plants in our designs as well as other ethnobotanically significant plants that offer us food, "
                + "medicine, and more! We want your property to work efficiently and so we aim to harmonize nature's "
                + "demands with your own by observing site-specific conditions and utilizing these resources to make "
                + "your yard work for you, not against you. "
               

const About = () => {
    return ( 
        <div className="about">
            <div className='founders'>
                <h1 className='font'>Meet the Founders</h1>
            </div>
            <div className='backdrop'>
                <div className='bodythree'>
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