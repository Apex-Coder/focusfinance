import React, { useState, useEffect } from 'react';
import app from '../../Configuration/base';

const useEntries = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const unsubscribe = app
        .firestore()
        .collection('test-data')
        .onSnapshot((snapshot) => {
            const newEntries = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            setEntries(newEntries);
        })

        return () => unsubscribe();
    }, []);

    return entries;
}
const Entries = ()=> {
    const entries = useEntries();
    return (
        <div> 
            <h4>List of Expenses</h4>
            <div>
                <label>Sort By: </label>
                <select>
                    <option>Amount</option>
                    <option>Date</option>
                </select>
            </div>
            <ol>
                {entries.map((entry) => 
                    <li key={entry.id}>
                        <div>
                            <h4>{entry.title}</h4>
                            <small>{entry.date}</small>
                            <p>{entry.Note}</p>
                        </div>
                    </li>
                )}

            </ol>
        </div>
    )
};

export default Entries;