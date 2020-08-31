import React from 'react';
import app from '../../Configuration/base';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard of Focus Finance</h1>
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div>
    );
};

export default Dashboard;