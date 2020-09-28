import React from 'react';

import ReactNavbar from '../ui/ReactNavbar';

const Settings = () => {
    let displayname = "Settings";
    return (
        <>
            <ReactNavbar />
            <div className="container">
                <>
                    <div className="mainHeader">
                        <h2 className="title">{displayname}</h2>
                    </div>
                </>
                <hr />
                <div>
                    <section>
                        <h4>Accounts/Category</h4>
                        <ul>
                            <li>Account</li>
                            <li>Category</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
};

export default Settings;