import React from 'react';
import './Button.scss'

const Button = ({children, isGoogleSignIn, ...otherProps}) => {
    let className = 'custom-button';
    if(isGoogleSignIn) className += ' google-sign-in';

    return (
        <button
            className={className}
            {...otherProps}
        >{children}</button>
    )
};

export default Button;