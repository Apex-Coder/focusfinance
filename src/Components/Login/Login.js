import React, { useCallback, useContext} from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import * as firebase from 'firebase/app';
import app from '../../Configuration/base';
import { AuthContext } from '../../Configuration/Auth';

import './Login.css'

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
            const provider = new firebase.auth.GoogleAuthProvider;
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
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleLogin} className="form-style">
                <label>Email</label><br />
                <input name="email" type="email" placeholder="Email" />
                <br />
                <label>Password</label><br />
                <input name="password" type="password" placeholder="Password" /><br />
                <button type="submit">Log In</button>
                
                <button type="button" onClick={handleGoogleLogin}>Log In with Google</button>
            </form>
        </div>
    );
};

export default withRouter(Login);



