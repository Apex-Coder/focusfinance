import React, { useState } from 'react';
import Modal from 'react-modal';
import { Container, Row, Button } from 'react-bootstrap';

import ReactNavbar from '../ui/ReactNavbar';
import Entries from './income-entry';
import AddEntryModal from './addEntryModal';

const Income = () => {
    let displayname = "Income";
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <ReactNavbar />
            <div className="block"></div>
            <Container fluid>
                <Row>
                    <span>
                        <h1>{displayname}</h1>
                        <Button variant="primary" >Add +</Button>
                    </span>
                </Row>
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
            </Container>
            
        </>
    )
};

export default Income;