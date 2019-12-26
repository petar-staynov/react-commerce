import React, {Component} from 'react';
import './Login.scss'
import FormInput from "../../Shared/FormInput/FormInput";
import Button from "../../Shared/Button/Button";

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
            <div className='sign-in'>
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

                    <Button
                        type='submit'
                        value='Submit form'
                    >Sign in</Button>
                    <Button
                        onClick={this.props.googleLogin}
                    >Sign in with Google</Button>
                </form>
            </div>
        );
    }
}

export default Login;