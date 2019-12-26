import React, {Component} from 'react';
import Login from "./Login";
import Register from "./Register";
import {signInWithGoogle} from "../../../firebase/firebase.utils";

class LoginRegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (e) => {
        console.log(e);
    };

    handleGoogleLogin = (e) => {
        signInWithGoogle()
    };

    handleEmailFieldChange = (e) => {
        this.setState({
            email: e.target.value,
        })
    };
    handlePasswordFieldChange = (e) => {
        this.setState({
            password: e.target.value,
        })
    };

    render() {
        return (
            <div className='login-register-container'>
                <Login
                    email={this.state.email}
                    password={this.state.password}
                    handleSubmit={this.handleSubmit}
                    googleLogin={this.handleGoogleLogin}
                    handleEmailFieldChange={this.handleEmailFieldChange}
                    handlePasswordFieldChange={this.handlePasswordFieldChange}
                />
                {/*<Register/>*/}
            </div>
        )
    }
}

export default LoginRegisterContainer;