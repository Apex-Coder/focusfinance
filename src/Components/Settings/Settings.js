import React, {useState} from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
// import { confirmAlert } from 'react-confirm-alert';

import ReactNavbar from '../ui/ReactNavbar';
import AddAccCatModal from './addAccCatModal';

import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Settings = () => {
    let displayname = "Settings";
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <ReactNavbar />
            <div className="container">
                <>
                    <div className="mainHeader">
                        <h2 className="title">{displayname}</h2>
                    </div>
                </>
                <hr />
                <div>
                    <section className="SettingsAC">
                        <h4>Accounts/Category</h4>
                        <ToastContainer 
                            position="bottom-right"
                            autoClose={3000}
                            pauseOnFocusLoss
                        />
                        <ul>
                            <li><a href="true" onClick={(e) => {
                                e.preventDefault();
                                setModalIsOpen(true)
                                }} >Add Account / Category</a></li>
                        </ul>
                    </section>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                    >
                        <AddAccCatModal modalIsOpen={setModalIsOpen} toast={toast} />
                    </Modal>
                </div>
            </div>
        </>
    )
};

export default Settings;