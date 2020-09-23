import React, { useState } from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';

import ReactNavbar from '../ui/ReactNavbar';
import Entries from './saving-entry';
import AddEntryModal from './addEntryModal';
import { TotalSavings } from '../TotalValues';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Savings = () => {
    let displayname = "Savings";
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <ReactNavbar />
            <div className="container">
                <div>
                    <div className="mainHeader">
                        <h2 className="title">{displayname}</h2>
                        <button type="button" className="addCategoryBtn">Add +</button>
                    </div>
                </div>
                <hr />
                <div>
                    <h3>Total Savings : <TotalSavings/></h3>
                    <div className="subHeader">
                        <h3>Entries</h3>
                        <button type="button" className="addEntriesBtn" onClick={() => setModalIsOpen(true)}>Add Entry</button>
                    </div>
                    <ToastContainer 
                        position="bottom-right"
                        autoClose={3000}
                        pauseOnFocusLoss
                    />
                    <Entries toast={toast} confirmAlert={confirmAlert} />
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}>
                        <AddEntryModal modalIsOpen={setModalIsOpen} toast={toast} />
                    </Modal>
                </div>
            </div>
        </>
    )
};

export default Savings;