import React, { useState, useEffect } from 'react';
import app from '../../Configuration/base';
import { removeEntry, updateEntry } from '../Utilities/Queries';

const useEntries = () => {
    const [entries, setEntries] = useState([]);
    const userId = app.auth().currentUser.uid;

    useEffect(() => {
        const unsubscribe = app
        .firestore()
        .collection('users/' + userId +'/expenses')
        .orderBy("date", "desc")
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
const Entries = (props)=> {
    const entries = useEntries();

    return (
        <section>
            {entries.map((entry) => 
                <div className="card" key={entry.id}>
                    <div className="card-text">
                        <div className="subHeader">
                            <span className="date">{entry.date}</span>
                            <span className="entry-options">
                                <span onClick={e => updateEntry(entry.id, entry.uid, "expenses")}>. . .</span>
                                <button 
                                    type="button" 
                                    className="rmEntryBtn" 
                                    onClick={(e) => {
                                        props.confirmAlert({
                                            title: 'Confirm to delete',
                                            message: 'Are you sure you want to delete entry?',
                                            buttons: [
                                                {
                                                    label: 'Yes',
                                                    onClick: () => {removeEntry(entry.id, entry.uid, "expenses", props)}
                                                },
                                                {
                                                    label: 'No',
                                                }
                                            ]
                                        })
                                    }}
                                > &#10006;</button>
                            </span>
                        </div>
                        <hr />
                        <h2>{entry.title}</h2>
                        <p className="info">{entry.account}</p>
                        <p className="info">{entry.category}</p>
                        <p className="info">${entry.amount}</p>
                        <p className="card-note">{entry.note}</p>
                    </div>
                </div>
            )}

        </section>
    )
};

export default Entries;