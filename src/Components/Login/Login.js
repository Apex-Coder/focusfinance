import React, { useCallback, useContext} from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import * as firebase from 'firebase/app';
import app from '../../Configuration/base';
import { AuthContext } from '../../Configuration/Auth';

import './Login.css';

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email, password } = event.target.elements;
            try {
                await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                console.log(error);
                console.log(error.code);
            }
        },
        [history]
    );

    const handleGoogleLogin = useCallback(
        async event => {
            event.preventDefault();
            const provider = new firebase.auth.GoogleAuthProvider();
            try {
                await app
                .auth()
                .signInWithPopup(provider);
                history.push("/");
            } catch(error) {
                console.log(error);
                console.log(error.code);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div className="hero-image">
            <div className="form-container">
                <h1>Log In</h1>
                <p>Welcome back! Let's track those finances</p>
                <form onSubmit={handleLogin} className="form-style">
                    <label>Email</label><br />
                    <input name="email" type="email" placeholder="Email" />
                    <br />
                    <label>Password</label><br />
                    <input name="password" type="password" placeholder="Password" /><br />
                    <button type="submit" id="login-btn">Log In</button>
                    
                    <div className="btn-container">
                        <Link to="/signup" id="notSignedUp" >Don't have an account</Link>
                        <div className="google-btn">
                            <div className="google-icon-wrapper">
                                <div className="google-icon"></div>
                            </div>
                            <p className="btn-text" onClick={handleGoogleLogin}><b>Log in with google</b></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default withRouter(Login);



