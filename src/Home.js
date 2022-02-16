import './index.css';
import logo from './Images/invert.png';
import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import phone from './Images/phone-square.png';
import email from './Images/email-icon.png';


const Home = () => {

    const titleStatement = "WE ARE AN ECOLOGICALLY CONSCIOUS LANDSACPING AND HARDSCAPING COMPANY."
                            +" We aim to provide thoughtful landscape designs "
                            + "to create the optimal outdoor space for our clients. Our team utilizes "
                            + "permaculture design principles to create landscapes that are beautiful, "
                            + "functional and eco-friendly.  Let Ecoscapes, llc help you realize your "
                            + "yard's true potential today. "

    const hardscapestring = "-Patios -Walkways -Garden Walls -Firepits"
    
    // const ipsum = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque "
    //                 + "laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi "
    //                 + "architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas "
    //                 + "sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione "
    //                 + "voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, "
    //                 + "consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et "
    //                 + "dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum "
    //                 + "exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? "
    //                  + "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae "
    //                  + "consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

    // const dolor = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum "
    //                 + "deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate "
    //                 + "non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et "
    //                 + "dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, "
    //                 + "cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat "
    //                 + "facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem "
    //                 + "quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates "
    //                 + "repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente "
    //                 + "delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus "
    //                 + "asperiores repellat."

    return ( 
        <div className="home">
             <div className='landing'>
                <img src={logo} className="landinglogo" alt="logo" />
            </div>
            <div className='housing'>
                <div className='body'>
                    {titleStatement}
                </div>
            </div>
            <div className='socialmedia'>
                <div className='socialcontent'>
                    <div className='instabook'>
                        <div>
                            <img src={instagram} className="insta" alt="insta logo" />
                        </div>
                        <div>                 
                            <img src={facebook} className="fb" alt="facebook logo" />
                        </div>
                    </div>
                    <div className='emailcontainer'>
                        <div className='emailtextcontainer'>
                            {/* <p className='emailtext'>Ecoscapesllc@aol.com</p> */}
                        </div>
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
                            <div>
                                <div className='hardscapebackground'>
                                    <p className='centertext'>Hardscaping</p>
                                    <div>
                                        <p className='bulletpoints'>Garden Walls</p>
                                        <p className='bulletpoints'>Walkways</p>
                                        <p className='bulletpoints'>Firepits</p>
                                        <p className='bulletpoints'>Patios</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='landscapebackground'>
                                    <p className='centertext'>Landscaping</p>
                                    <div>
                                        <p className='bulletpoints'>Native Plants</p>
                                        <p className='bulletpoints'>Rain Gardens</p>
                                        <p className='bulletpoints'>Maintenance</p>
                                </div>
                                </div>
                            </div>
                            <div> 
                                <div className='arboriculturalbackground'>
                                    <p className='centertext'>Arboricultural</p>
                                    <div>
                                        <p className='bulletpoints'>Assesements</p>
                                        <p className='bulletpoints'>Consultation</p>
                                        <p className='bulletpoints'>Minor Pruning</p>
                                        <p className='bulletpoints'>Removal</p>
                                </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;