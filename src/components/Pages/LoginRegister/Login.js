import React, {Component} from 'react';

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
            console.log('update state');
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
                    <label>Email</label>
                    <input
                        name='email'
                        type='text'
                        placeholder="Email..."
                        onChange={this.props.handleEmailFieldChange}
                        value={this.state.email}
                        required
                    />
                    <label>Password</label>
                    <input
                        name='password'
                        type='password'
                        placeholder="Password..."
                        onChange={this.props.handlePasswordFieldChange}
                        value={this.state.password}
                        required
                    />

                    <input type='submit' value='Submit form'/>
                </form>
            </div>
        );
    }
}

export default Login;