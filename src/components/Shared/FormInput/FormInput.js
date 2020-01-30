import React from 'react';
import './FormInput.scss'

const FormInput = ({handleChange, label, ...otherProps}) => {
    let className = 'form-input-label';
    if (otherProps.value.length) className += ' shrink';

    return (
        <div className='group'>
            <input
                className='form-input'
                onChange={handleChange.bind(this)}
                {...otherProps}
            />
            {label ? (
                <label
                    className={className}
                >{label}</label>
            ) : null}
        </div>
    )
};

export default FormInput;