import React, { useState, useEffect } from 'react';

import app from '../../Configuration/base';

const useEntries = () => {
    const [entries, setEntries] = useState([]);
    const userId = app.auth().currentUser.uid;

    useEffect(() => {
        const unsubscribe = app
        .firestore()
        .collection('users/' + userId + '/income')
        .onSnapshot((snapshot) => {
            const newEntries = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            setEntries(newEntries);
        })

        return () => unsubscribe();
    }, [userId]);

    return entries;
}
const Entries = ()=> {
    const entries = useEntries();
    return (
        <>
            <h4>List of Expenses</h4>
            <div>
                <label>Sort By: </label>
                <select>
                    <option>Amount</option>
                    <option>Date</option>
                </select>
            </div>
            <div>
            {entries.map((entry) => 
                <li key={entry.uid}>
                    <div>
                        <h4>{entry.title}</h4>
                        <small>{entry.date}</small>
                        <span>
                            <h6>{entry.account}</h6>
                            <h6>{entry.category}</h6>
                            <h6>{entry.amount}</h6>
                        </span>
                        <p>
                            {entry.note}
                        </p>
                    </div>
                </li>
            )}
            </div>
        </>
    )
};

export default Entries;