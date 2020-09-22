import React, { useState, useEffect } from 'react';

import app from '../../Configuration/base';


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