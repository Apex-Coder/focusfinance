import React from 'react';

import ReactNavbar from '../ui/ReactNavbar';
import app from '../../Configuration/base';

const Dashboard = () => {
    return (
        <div>
            <ReactNavbar />
            <br /><br /><br /><br />
            <h1>Dashboard of Focus Finance</h1>
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div>
    );
};

export default Dashboard;