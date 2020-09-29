import React, { useState, useCallback } from 'react';

import app from '../../Configuration/base';
// import AccountDropdown from '../Utilities/AccountDropdown';

const AddAccCatModal = (props) => {
    const [account, setAccount] = useState('');
    const [category, setCategory] = useState('');

    const userId = app.auth().currentUser.uid;

    const handleShowAddCategory = (e) => {
        // var checkBox = document.getElementById("myCheck"); console.log(checkBox)
        let isChecked = e.target.checked;

        var category = document.getElementById("category");
        var account = document.getElementById("account");
        // console.log(isChecked)
        if (isChecked){
            category.style.display = "block";
            account.style.display = "none";
          } else {
            category.style.display = "none";
            account.style.display = "block";
          }
    }

    const handleAddAccCatEntry = useCallback(async (event) => {
        event.preventDefault();

        try{
            if(account  !== ""){
                await app
                .firestore()
                .collection('users/' + userId + "/accounts")
                .add({
                    "name" : account
                })
                .then(props.toast.success("Entry sucessfully added."))
            } else if (category  !== "") {
                await app
                .firestore()
                .collection('users/' + userId + "/categories")
                .add({
                    "name" : category
                })
                .then(props.toast.success("Entry sucessfully added."))
            }
        } catch(err) {
            props.toast.error("Failed to add entry.");
        }
    }, [props, account, category, userId])
    return (
        <form className="entry-form" onSubmit={(event) => {
            handleAddAccCatEntry(event)
            props.modalIsOpen(false);
        }}>
            <div className="modalHeader">
                <h1>Add Account</h1>
                <button type="button" className="closeModalBtn"  onClick={() => props.modalIsOpen(false)}>X</button>
            </div>
            <span>
                Category: <input type="checkbox" id="myCheck" onClick={e => handleShowAddCategory(e)}/>
            </span>
            <div className="addEntryInputContainer">
                <span className="addEntryInputGroup" id="account" style={{display: "block"}}>
                    <label>Account</label>
                    <input type="text"  value={account} onChange={e => setAccount(e.currentTarget.value)} />
                </span><br />
                <span className="addEntryInputGroup" id="category" style={{display: "none"}}>
                    <label>Category</label>
                    <input type="text"  value={category} onChange={e => setCategory(e.currentTarget.value)} />
                </span><br />
            </div>
            <div className="entrySubmitBtnWrapper">
                <button type='submit' className="entrySubmitBtn">Submit</button>
            </div>
        </form>
    )
};

export default AddAccCatModal;