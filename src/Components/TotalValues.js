import  { useState, useEffect, useRef } from 'react';
import app from '../Configuration/base';


const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

const CalTotalExpenses = () => {
    const userId = app.auth().currentUser.uid;
    const [te, setTe] = useState(0);
    var totalExpenses = useRef(0);

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
                totalExpenses.current = totalExpenses.current + entry.amount
            )
            setTe(totalExpenses.current)
        })

        return () => unsubscribe();
    }, [userId]);
    return formatter.format(te);
};

const CalTotalSavings = () => {
    const userId = app.auth().currentUser.uid;
    const [ts, setTs] = useState(0);
    var totalSavings = useRef(0);

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
                totalSavings.current = totalSavings.current + entry.amount
            )
            setTs(totalSavings.current)
        })

        return () => unsubscribe();
    }, [userId]);
    return formatter.format(ts);
};

const CalTotalIncome = () => {
    const userId = app.auth().currentUser.uid;
    const [ti, setTi] = useState(0);
    var totalIncome = useRef(0);

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
                totalIncome.current = totalIncome.current + entry.amount
            )
            setTi(totalIncome.current)
        })

        return () => unsubscribe();
    }, [userId]);
    return formatter.format(ti);
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