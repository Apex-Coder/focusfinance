import React, { useState } from 'react';

import app from '../../Configuration/base';

const AddEntryModal = (props) => {
    const [title, setTitle] = useState('');
    const [account, setAccount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');

    const handleAddEntryTest = (event) => {
        event.preventDefault();

        app
            .firestore()
            .collection('testing-data')
            .add({
                "title": title,
                "account": account,
                "category": category,
                "date": date,
                "amount": amount,
                "note": note
            })
            .then(() => {
                setTitle('');
                setAccount('');
                setCategory('');
                setDate('');
                setAmount('');
                setNote('');
            })
    }
    return (
        <form onSubmit={() => {
            handleAddEntryTest();
            props.modalIsOpen(false);
        }}>
            <span>
                <h1>Add Entry</h1>
                <button type="button" onClick={() => props.modalIsOpen(false)}>X</button>
            </span>
            <label>Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.currentTarget.value)} /><br />
            <label>Account</label>
            <input type="text"  value={account} onChange={e => setAccount(e.currentTarget.value)} /><br />
            <label>Category</label>
            <input type="text" value={category} onChange={e => setCategory(e.currentTarget.value)} /><br />
            <label>Date</label>
            <input type="date" value={date} onChange={e => setDate(e.currentTarget.value)} /><br />
            <label>Amount</label>
            <input type="number" min="1" step="any"  value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br />
            <label>Note</label>
            <input type="text" value={note} onChange={e => setNote(e.currentTarget.value)} />
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
};

export default AddEntryModal;
