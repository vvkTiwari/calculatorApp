import React from 'react';
import "./Button.css";

const Button = (props) => (
    <div 
        className={`Button ${props.btnClass}`}
        onClick={props.onClick}
        data-size={props.size}
        data-value={props.value}>
        {props.label}
    </div>
)

export default Button;