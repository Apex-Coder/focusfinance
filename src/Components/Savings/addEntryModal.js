import React, { useState, useCallback } from 'react';

import app from '../../Configuration/base';
import CategoriesDropdown from '../Utilities/CategoriesDropdown'

const AddEntryModal = (props) => {
    const [title, setTitle] = useState('');
    const [account, setAccount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');

    const userId = app.auth().currentUser.uid;
    const handleAddEntryTest = useCallback(async event => {
        event.preventDefault();
        
        try {
            await app
            .firestore()
            .collection('users/' + userId + '/savings')
            .add({
                "uid": userId,   
                "title": title,
                "account": account,
                "category": category,
                "date": date,
                "amount": +amount,
                "note": note
            })
            .then(props.toast.success("Entry sucessfully added."))
            
        } catch(error) {
            props.toast.error("Failed to add entry.");
        }
    }, [title,account, category, date, amount, note, userId, props]);
    return (
        <form className="entry-form" onSubmit={(event) => {
            handleAddEntryTest(event);
            props.modalIsOpen(false);
        }}>
            <div className="modalHeader">
                <h1>Add Entry</h1>
                <button type="button" className="closeModalBtn"  onClick={() => props.modalIsOpen(false)}>X</button>
            </div>
            <div className="addEntryInputContainer">
            <span className="addEntryInputGroup">
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.currentTarget.value)} />
            </span><br />
            <span className="addEntryInputGroup">
                <label>Account</label>
                <input type="text"  value={account} onChange={e => setAccount(e.currentTarget.value)} />
            </span><br />
            <span className="addEntryInputGroup">
                <label>Category</label>
                <select onChange={e => setCategory(e.currentTarget.value)}>
                    <CategoriesDropdown />
                </select>
            </span><br />
            <span className="addEntryInputGroup">
                <label>Date</label>
                <input type="date" value={date} onChange={e => setDate(e.currentTarget.value)} />
            </span><br />
            <span className="addEntryInputGroup">
                <label>Amount</label>
                <input type="number" min="1" step="any"  value={amount} onChange={e => setAmount(e.currentTarget.value)} />
            </span><br />
            <span className="addEntryInputGroup">
                <label>Note</label>
                <input type="text" value={note} onChange={e => setNote(e.currentTarget.value)} />
            </span>
            </div><br />
            <div className="entrySubmitBtnWrapper">
                <button type='submit' className="entrySubmitBtn">Submit</button>
            </div>
        </form>
    )
};

export default AddEntryModal;
