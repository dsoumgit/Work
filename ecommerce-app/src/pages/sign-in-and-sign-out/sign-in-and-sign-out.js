import React from 'react';
import './sign-in-and-sign-out.style.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SignInAndSignOutPage = () => {
    return(
        <div className="sign-in-and-sign-out">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignOutPage;