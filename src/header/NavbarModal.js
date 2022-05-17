import Modal from 'react-modal';
import styles from './navbarModal.module.css';
import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';

const NavbarModal = ({
    closeModal, modalIsOpen
}) => {

    return (
        <div>
            <Modal
                showModal={true}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                classname={styles.navbarModal}
            >
                <div className='lucky'>
                    <div>
                        <div className='backdrop'>
                            <div className='bodytwo'>
                                <div className='servicepageimagescontainer'>
                                    <div className="NLDServicebackground">
                                    </div>
                                </div>
                                <div className='servicetext'>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default NavbarModal;