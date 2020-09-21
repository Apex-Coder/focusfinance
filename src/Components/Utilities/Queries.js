import React, { useState, useEffect } from 'react';

import app from '../../Configuration/base';


export const removeEntry = (docId, uid, collection) => {
    const id = docId;
    const userId = uid;

    app.firestore().collection('users/' + userId + '/' + collection).doc(id).delete();
    window.location.reload();
    console.log("User ID: " + userId + " , " + id + " from " + collection  + " inside Remove function");
};

export const updateEntry = (docId, uid, collection) => {
    const id = docId;
    const userId = uid;

    console.log("User ID: " + userId + " , " + id + " from " + collection  + " inside Update function");
}