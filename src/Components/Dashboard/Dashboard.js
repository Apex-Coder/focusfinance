import React from 'react';
import {Link} from 'react-router-dom';

import ReactNavbar from '../ui/ReactNavbar';
import { TotalExpenses, TotalSavings, TotalIncome } from '../TotalValues'

const Dashboard = () => {
    return (
        <>
            <ReactNavbar />
            <div className="main">
                <h1>Dashboard of Focus Finance</h1>
                <div className="dashboard-card-container">
                    <div className="dashboard-card">
                        <div className="card-text">
                            <h3><Link to="/income">Income</Link></h3>
                            <TotalIncome />
                        </div>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-text">
                            <h3><Link to="/expenses">Expenses</Link></h3>
                            <TotalExpenses />
                        </div>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-text">
                            <h3><Link to="/savings">Savings</Link></h3>
                            <TotalSavings />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;