import React, { useCallback, useState, useEffect  } from 'react';

import app from '../../Configuration/base';

const useAccounts = () => {
    const [accounts, setAccounts] = useState([]);
    const userId = app.auth().currentUser.uid;

    useEffect(() => {
        const unsubscribe = app
        .firestore()
        .collection('users/' + userId + "/accounts")
        .onSnapshot(snapshot => {
            const newAccounts = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            setAccounts(newAccounts)
        })

        return () => unsubscribe();
    }, [userId])

    return accounts;
}


const AccountDropdown = () => {
    const accounts = useAccounts();
    return (
        <>
            <option value="Cash" key="Cash">Cash</option>
            {accounts.map((account) => 
                <option value={account.name} key={account.id} >{account.name}</option>
            )}
        </>
    )
}

export default AccountDropdown;