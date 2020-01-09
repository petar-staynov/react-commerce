import React, {Component} from 'react';
import Login from "./Login";
import Register from "./Register";
import {signInWithGoogle} from "../../../firebase/firebase.utils";
import {auth, createUserProfileDocument} from "../../../firebase/firebase.utils";

import './LoginRegisterContainer.scss'

class LoginRegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleRegisterSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        //TODO custom alert here
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            /** Clears form **/
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (e) {
            if(e.code === "auth/email-already-in-use"){
                alert("Email already registered.")
            }
            console.log(e);
        }
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    handleLoginSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            //Clear form
            this.setState({
                email: '',
                password: '',
            });
        } catch (e) {
            if(e.code === "auth/user-not-found"){
                alert('No user with such email found');
            }
            console.log(e);
        }
    };

    handleGoogleLogin = (event) => {
        signInWithGoogle()
            .then(r => {
                console.log('Logged in with Google');
            });
    };


    render() {
        return (
            <div className='login-register-container'>
                <Login
                    email={this.state.email}
                    password={this.state.password}

                    handleSubmit={this.handleLoginSubmit}
                    handleChange={this.handleChange}

                    googleLogin={this.handleGoogleLogin}
                />
                <Register
                    displayName={this.state.displayName}
                    email={this.state.email}
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}

                    handleSubmit={this.handleRegisterSubmit}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}

export default LoginRegisterContainer;