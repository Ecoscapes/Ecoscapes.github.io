import './index.css';

const ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
                + "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
                + "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
                + "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
                + "sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const ipsumtwo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
                + "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
                + "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
                + "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
                + "sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const ipsumthree = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
                + "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
                + "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
                + "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
                + "sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const ipsumfour = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
                + "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
                + "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
                + "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
                + "sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const ipsumfive = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
                + "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
                + "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
                + "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
                + "sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


const Service = () => {
return ( 
    <div className="service">
        <div className='backdrop'>
            <div className='bodytwo'>
                <h2 className=''>Hardscaping</h2>
                <div className="dan">
                    <div className="danimg">
                    </div>
                    <div>
                        <div className='text'>
                            <div>
                                {ipsum}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='backdrop'>
            <div className='bodytwo'>
                <h2 className=''>Native Landscaping Design</h2>     
                <div className="joe">
                    <div>
                        <div className='text'>
                            <div>
                                {ipsumtwo}
                            </div>
                        </div>
                        </div>
                        <div className="joeimg">
                    </div>
                </div>
            </div>
        </div>
        <div className='backdrop'>
            <div className='bodytwo'>
                <h2 className=''>Storm Water Management</h2>
                <div className="dan">
                    <div className="danimg">
                    </div>
                    <div>
                        <div className='text'>
                            <div>
                                {ipsumthree}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='backdrop'>
            <div className='bodytwo'>
                <h2 className=''>Permaculture</h2>
                <div className="joe">
                    <div>
                        <div className='text'>
                            <div>
                                {ipsumfour}
                            </div>
                        </div>
                        </div>
                        <div className="joeimg">
                    </div>
                </div>
            </div>
        </div>
        <div className='backdrop'>
            <div className='bodytwo'>
                <h2 className=''>ISA</h2>
                <div className="dan">
                    <div className="danimg">
                    </div>
                    <div>
                        <div className='text'>
                            <div>
                                {ipsumfive}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 );
}

export default Service;