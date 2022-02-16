import './index.css';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
+ "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
+ "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
+ "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
+ "sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const ipsum = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque "
+ "laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi "
+ "architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas "
+ "sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione "
+ "voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, "
+ "consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et "
+ "dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum "
+ "exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? "
 + "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae "
 + "consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

const dolor = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum "
+ "deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate "
+ "non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et "
+ "dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, "
+ "cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat "
+ "facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem "
+ "quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates "
+ "repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente "
+ "delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus "
+ "asperiores repellat."

const mission = "While we specialize in native/edible landscaping design and installation, we also offer many traditional landscaping services such as pruning, mulching, and weeding. Hardscaping services include installation and maintenance of patios, walkways, garden walls, fire pits, and more."
                + "As licensed arborists and Maryland tree experts,the professionals at Ecoscapes, llc are equipped to perform arboricultural assessments,forestry consultations, and minor pruning/ tree removals."
                + "Our goal is to design, install and maintain landscapes to increase quality of life for all."
                + "We love to incorporate native, pollinator-friendly plants in our designs as well as other ethnobotanically significant plants that offer us food, medicine, and more. The transformation of under-utilized outdoor spaces into functional and aesthetic areas is accomplished via the use of careful site observation, geographically native plants, and permaculture design principles."
               

const About = () => {
    return ( 
        <div className="about">
            <div className='founders'>
                <h1 className='font'>Meet the Founders</h1>
            </div>
            <div className='backdrop'>
                <div className='body'>
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
                        <div className='body'>
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