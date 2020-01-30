import React, {Component} from 'react';
import Login from "./Login";
import Register from "./Register";

import './LoginRegisterContainer.scss'

class LoginRegisterContainer extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };


    handleChange = event => {
        console.log('handleChange');
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };


    render() {
        return (
            <div className='login-register-container'>
                <Login
                    email={this.state.email}
                    password={this.state.password}

                    handleChange={this.handleChange}
                />
                <Register
                    displayName={this.state.displayName}
                    email={this.state.email}
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}

                    handleChange={this.handleChange}

                />
            </div>
        )
    }
}

export default LoginRegisterContainer;