import React, { useState } from 'react';
import Modal from 'react-modal';

import ReactNavbar from '../ui/ReactNavbar';
import Entries from './saving-entry';
import AddEntryModal from './addEntryModal';

const Savings = () => {
    let displayname = "Savings";
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <ReactNavbar />
            <div className="main">
                <div>
                    <span>
                        <h1 className="title">{displayname}</h1>
                        <button type="button" className="">Add +</button>
                    </span>
                </div>
                <hr />
                <div>
                    <h3>Entries</h3>
                    <button type="button" className="" onClick={() => setModalIsOpen(true)}>Add Entry</button>
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