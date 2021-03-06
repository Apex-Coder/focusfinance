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
    const totalERef = app.firestore().collection('users/' + userId +'/totals');

    useEffect(() => {
        const unsubscribe = app
        .firestore()
        .collection('users/' + userId +'/expenses')
        .onSnapshot((snapshot) =>{
            totalExpenses.current = 0;
            const newEntries = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            newEntries.map((entry) => 
                totalExpenses.current = totalExpenses.current + entry.amount
            )
            setTe(totalExpenses.current)

            // Update the Total Expenses Value in Totals Collection
            try{            
                totalERef.get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        totalERef.onSnapshot((doc) => {
                            totalERef.doc("Expenses")
                            .update({"amount" : te})
                        })
                    } else {
                        totalERef.doc("Expenses").set({"amount" : te})
                    }
                })
            } catch(error) {
                console.log("Error: " + error);
            }
        })

        return () => unsubscribe();
    }, [userId, totalERef, te]);
    return formatter.format(te);
};

const CalTotalSavings = () => {
    const userId = app.auth().currentUser.uid;
    const [ts, setTs] = useState(0);
    var totalSavings = useRef(0);
    const totalSRef = app.firestore().collection('users/' + userId +'/totals');

    useEffect(() => {
        const unsubscribe = app
        .firestore()
        .collection('users/' + userId +'/savings')
        .onSnapshot((snapshot) =>{
            totalSavings.current = 0;
            const newEntries = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            newEntries.map((entry) => 
                totalSavings.current = totalSavings.current + entry.amount
            )
            setTs(totalSavings.current)

            try{            
                totalSRef.get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        totalSRef.onSnapshot((doc) => {
                            totalSRef.doc("Savings")
                            .update({"amount" : ts})
                        })
                    } else {
                        totalSRef.doc("Savings").set({"amount" : ts})
                    }
                })
            } catch(error) {
                console.log("Error: " + error);
            }
        })

        return () => unsubscribe();
    }, [userId, totalSRef, ts]);
    return formatter.format(ts);
};

const CalTotalIncome = () => {
    const userId = app.auth().currentUser.uid;
    const [ti, setTi] = useState(0);
    var totalIncome = useRef(0);
    const totalIRef = app.firestore().collection('users/' + userId +'/totals');

    useEffect(() => {
        const unsubscribe = app
        .firestore()
        .collection('users/' + userId +'/income')
        .onSnapshot((snapshot) =>{
            totalIncome.current = 0;
            const newEntries = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            newEntries.map((entry) => 
                totalIncome.current = totalIncome.current + entry.amount
            )
            setTi(totalIncome.current)

            try{            
                totalIRef.get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        totalIRef.onSnapshot((doc) => {
                            totalIRef.doc("Income")
                            .update({"amount" : ti})
                        })
                    } else {
                        totalIRef.doc("Income").set({"amount" : ti})
                    }
                })
            } catch(error) {
                console.log("Error: " + error);
            }
        })

        return () => unsubscribe();
    }, [userId, totalIRef, ti]);
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