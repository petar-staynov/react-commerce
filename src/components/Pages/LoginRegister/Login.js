import React, {Component} from 'react';
import './Login.scss'
import FormInput from "../../Shared/FormInput/FormInput";
import Button from "../../Shared/Button/Button";
import {emailSignInStart, googleSignInStart} from "../../../redux/user/userActions";
import {connect} from 'react-redux';


class Login extends Component {
    state = {
        email: this.props.email,
        password: this.props.password,
    };


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

    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;
        emailSignInStart(email, password);
    };

    render() {
        const {googleSignInStart} = this.props;


        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email}
                        handleChange={this.props.handleChange}
                        required
                    />

                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={this.state.password}
                        handleChange={this.props.handleChange}
                        required
                    />

                    <div className='login-buttons'>
                        <Button
                            type='submit'
                            value='Submit form'
                        >Sign in</Button>
                        <Button
                            type='button'
                            onClick={googleSignInStart}
                            isGoogleSignIn
                        >Sign in with Google</Button>
                    </div>

                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
});

export default connect(null, mapDispatchToProps)(Login);