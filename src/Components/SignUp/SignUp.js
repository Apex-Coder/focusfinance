import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
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
        <div className="form-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp} className="form-style">
                <label>Email</label>
                <input name="email" type="email" placeholder="Email" />
                
                <label>Password</label>
                <input name="password" type="password" placeholder="Password" />
                
                <button type="submit" id="login-btn">Sign Up</button>

                <div className="btn-container">
                        <Link to="/" id="notSignedUp" >Have an account</Link>
                        <div className="google-btn">
                            <div className="google-icon-wrapper">
                                <div className="google-icon"></div>
                            </div>
                            <p className="btn-text" onClick={handleGoogleSignin}><b>Sign up with google</b></p>
                        </div>
                </div>
            </form>
        </div>
    );
};

export default withRouter(SignUp);