import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import * as firebase from 'firebase/app';
import app from '../../Configuration/base';

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const handleGoogleSignin = useCallback(async event => {
        event.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await app
            .auth()
            .signInWithPopup(provider);
            history.push("/");
        } catch(error) {
            console.log(error.message)
        }
    }, [history]);

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button>
                <br />
                <button type="button" onClick={handleGoogleSignin}>Sign Up with Google</button>
            </form>
        </div>
    );
};

export default withRouter(SignUp);