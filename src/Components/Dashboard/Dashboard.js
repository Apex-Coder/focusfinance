import React from 'react';

import ReactNavbar from '../ui/ReactNavbar';
import app from '../../Configuration/base';

const Dashboard = () => {
    return (
        <>
            <ReactNavbar />
            <div className="main">
                <h1>Dashboard of Focus Finance</h1>
            </div>
        </>
    );
};

export default Dashboard;