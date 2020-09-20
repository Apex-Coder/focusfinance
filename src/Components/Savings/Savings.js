import React, { useState } from 'react';
import Modal from 'react-modal';

import ReactNavbar from '../ui/ReactNavbar';
import Entries from './saving-entry';
import AddEntryModal from './addEntryModal';
import { TotalSavings } from '../TotalValues'

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
                    <h3>Total Savings : $<TotalSavings/></h3>
                    <div className="subHeader">
                        <h3>Entries</h3>
                        <button type="button" className="addEntriesBtn" onClick={() => setModalIsOpen(true)}>Add Entry</button>
                    </div>
                    <Entries />
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}>
                        <AddEntryModal modalIsOpen={setModalIsOpen} />
                    </Modal>
                </div>
            </div>
        </>
    )
};

export default Savings;