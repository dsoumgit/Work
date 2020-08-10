import React, { Component } from 'react';
import './sign-up.style.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();

        // destructing 
        const { displayName, email, password, confirmPassword } = this.state;
        // check password and confirm password 
        if (password !== confirmPassword) {
            alert('Password doesn\'t match');  
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            // clear the inputs 
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error.message);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ 
            [name]: value
        })
    }

    render() {
        
        const { displayName, email, confirmPassword, password } = this.state;

        return(
            <div className="sign-up">
                <h2>I don't have an account</h2>
                <span>Sign up with your email</span>
                
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />

                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;