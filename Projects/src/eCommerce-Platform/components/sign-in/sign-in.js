import React, { Component } from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
// firebase 
import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = evt => {
        evt.preventDefault();

        // clear the fields 
        this.setState({
            email: '',
            password: ''
        })
    }

    // using the same onChange evnts to update the value 
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email"
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="Email"
                        required />
                    <FormInput 
                        type="password" 
                        name="password"
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="Password"
                        required />

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn; 