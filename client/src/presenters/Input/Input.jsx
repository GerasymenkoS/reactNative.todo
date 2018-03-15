import React from 'react';
import './input.less';

export default (props) => {
    const id = Math.round(Math.random() * 3000);
    const {
        placeholder,
        required,
        onChange,
        value
    } = props;

    const Label = () => {
        return (
            <label
                htmlFor={id}
                className='custom-input__label'
            >
                {placeholder}
            </label>
        )
    }

    return (
        <div className='custom-input'>
            <div className="custom-input__wrapper">
                
                <input
                    type="text"
                    id={id}
                    className='custom-input__item'
                    placeholder={placeholder}
                    value = {value}
                    required = {required}
                    onChange = {onChange}
                />
                { placeholder.length ? <Label/> : null }
                <div className="custom-input__border"/>
            </div>
        </div>
    )
}
