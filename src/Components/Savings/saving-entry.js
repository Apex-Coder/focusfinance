import React, { useState, useEffect } from 'react';

import app from '../../Configuration/base';

const useEntries = () => {
    const [entries, setEntries] = useState([]);
    const userId = app.auth().currentUser.uid;

    useEffect(() => {
        const unsubscribe = app
        .firestore()
        .collection('users/' + userId + '/savings')
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
        <section>
            {entries.map((entry) => 
            <div className="card" key={entry.uid}>
                <div className="card-text">
                    <span className="date">{entry.date}</span>
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