import React, {Component} from 'react';
import Login from "./Login";
import Register from "./Register";

class LoginRegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
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
                    handleEmailFieldChange={this.handleEmailFieldChange}
                    handlePasswordFieldChange={this.handlePasswordFieldChange}
                />
                {/*<Register/>*/}
            </div>
        )
    }
}

export default LoginRegisterContainer;