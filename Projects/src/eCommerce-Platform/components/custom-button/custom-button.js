import React from 'react';
import './custom-button.style.scss';

// passing children ('Sign In' text) and other props.
// if we have a type 'submit', it will pass to props.
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {

    return(
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            { children }
        </button>
    )
}

export default CustomButton;