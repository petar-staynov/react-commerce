import React, {Component} from 'react';
import FormInput from "../../Shared/FormInput/FormInput";
import Button from "../../Shared/Button/Button";

import './Register.scss'

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: this.props.displayName,
            email: this.props.email,
            password: this.props.password,
            confirmPassword: this.props.confirmPassword,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            prevState.displayName !== this.props.displayName ||
            prevState.email !== this.props.email ||
            prevState.password !== this.props.password ||
            prevState.confirmPassword !== this.props.confirmPassword
        ) {
            this.setState({
                displayName: this.props.displayName,
                email: this.props.email,
                password: this.props.password,
                confirmPassword: this.props.confirmPassword,
            });
            return true
        }
        return false;
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.props.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.props.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.props.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.props.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.props.handleChange}
                        label='Confirm password'
                        required
                    />
                    <Button
                        onClick={this.props.handleRegisterSubmit}
                    >Register</Button>
                </form>
            </div>
        );
    }
}

export default Register;