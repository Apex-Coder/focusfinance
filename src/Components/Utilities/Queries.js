// import React, { useState, useEffect } from 'react';

import app from '../../Configuration/base';

const getAccountValue = (doc) => {
    const value = doc.data().amount;

    return value;
}
export const removeEntry = (docId, uid, collection, props) => {
    const id = docId;
    const userId = uid;
    const dbCollection = collection;

    app.firestore().collection('users/' + userId + '/' + dbCollection).doc(id).delete().then(function() {
        props.toast.success("Entry successfully deleted!");
    }).catch(function(error) {
        props.toast.error("Error removing entry: ", error);
    });

};

export const updateEntry = (docId, uid, collection) => {
    const id = docId;
    const userId = uid;

    console.log("User ID: " + userId + " , " + id + " from " + collection  + " inside Update function");
}

export const addToAccountTotal = (uid, uAccount, uAmount) => {
    const userId = uid;
    const account = uAccount;
    const amount = uAmount;
    let prevTotal = 0;

    // Fecth Current Account Total
    app.firestore()
    .collection('users/' + userId + "/totals")
    // .doc(account)
    .get()
    .then((snapshot) => { 
        snapshot.docs.forEach((doc) => {
            if(doc.data().amount){
                prevTotal = getAccountValue(doc)
            }
        })
        // Update Account Totals 
        app.firestore()
        .collection('users/' + userId + "/totals")
        .doc(account)
        .update({
            "amount" : +amount + prevTotal,
        })
        .catch((error) => {
            console.log(error)
        })

    })
    .catch((error) => {
        console.log(error)
    })

    // console.log("User ID: " + userId + " , " + account);
}

export const addAccount = (uid, uAccount) => {
    const userId = uid;
    const account = uAccount;

    try {
        app.firestore()
        .collection('users/' + userId + "/accounts")
        .add({
            "name" : account
        })
        .then(console.log("Account Added" ))
    } catch(error) {
        console.log("Error: " + error);
    }
}

export const addCategory = (uid, uCategory) => {
    const userId = uid;
    const category = uCategory;

    try {
        app.firestore()
        .collection('users/' + userId + "/categories")
        .add({
            "name" : category
        })
        .then(console.log("Category Added" ))
    } catch(error) {
        console.log("Error: " + error);
    }
}