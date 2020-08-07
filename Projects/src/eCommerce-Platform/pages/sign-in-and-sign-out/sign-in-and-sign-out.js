import React from 'react';
import './sign-in-and-sign-out.style.scss';
import SignIn from '../../components/sign-in/sign-in';

const SignInAndSignOutPage = () => {
    return(
        <div className="sign-in-and-sign-out">
            <SignIn />
            <SignIn />
        </div>
    )
}

export default SignInAndSignOutPage;