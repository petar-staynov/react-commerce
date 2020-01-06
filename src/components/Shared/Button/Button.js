import React from 'react';
import './Button.scss'

const Button = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    let className = 'custom-button';
    if(isGoogleSignIn) className += ' google-sign-in';
    if(inverted) className += ' inverted';

    return (
        <button
            className={className}
            {...otherProps}
        >{children}</button>
    )
};

export default Button;