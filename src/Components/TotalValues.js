import React, { useState, useEffect } from 'react';
import app from '../Configuration/base';




const CalTotalExpenses = () => {
    const userId = app.auth().currentUser.uid;
    const [te, setTe] = useState(0);
    var totalExpenses = 0;

    useEffect(() => {
        const unsubscribe = app
        .firestore()
        .collection('users/' + userId +'/expenses')
        .onSnapshot((snapshot) =>{
            const newEntries = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            newEntries.map((entry) => 
                totalExpenses = totalExpenses + entry.amount
            )
            setTe(totalExpenses)
        })

        return () => unsubscribe();
    }, [userId]);
    return te;
};

const CalTotalSavings = () => {
    const userId = app.auth().currentUser.uid;
    const [ts, setTs] = useState(0);
    var totalSavings = 0;

    useEffect(() => {
        const unsubscribe = app
        .firestore()
        .collection('users/' + userId +'/savings')
        .onSnapshot((snapshot) =>{
            const newEntries = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            newEntries.map((entry) => 
                totalSavings = totalSavings + entry.amount
            )
            setTs(totalSavings)
        })

        return () => unsubscribe();
    }, [userId]);
    return ts;
};

const CalTotalIncome = () => {
    const userId = app.auth().currentUser.uid;
    const [ti, setTi] = useState(0);
    var totalIncome = 0;

    useEffect(() => {
        const unsubscribe = app
        .firestore()
        .collection('users/' + userId +'/income')
        .onSnapshot((snapshot) =>{
            const newEntries = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            newEntries.map((entry) => 
                totalIncome = totalIncome + entry.amount
            )
            setTi(totalIncome)
        })

        return () => unsubscribe();
    }, [userId]);
    return ti;
};

export const  TotalExpenses = () => {
    const totalExpenseValue = CalTotalExpenses();
    return totalExpenseValue;
};

export const  TotalSavings = () => {
    const totalSavingsValue = CalTotalSavings();
    return totalSavingsValue;
};

export const  TotalIncome = () => {
    const totalIncomeValue = CalTotalIncome();
    return totalIncomeValue;
};