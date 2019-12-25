import React, {Component} from 'react';
import FormInput from "../../Shared/FormInput/FormInput";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: this.props.email,
            password: this.props.password,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.email !== this.props.email || prevState.password !== this.props.password) {
            this.setState({
                email: this.props.email,
                password: this.props.password,
            });
            return true
        }
        return false;
    }


    render() {
        return (
            <div>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.props.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        handleChange={this.props.handleEmailFieldChange}
                        value={this.state.email}
                        required
                    />

                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        handleChange={this.props.handlePasswordFieldChange}
                        value={this.state.password}
                        required
                    />

                    <input
                        type='submit'
                        value='Submit form'
                    />
                </form>
            </div>
        );
    }
}

export default Login;