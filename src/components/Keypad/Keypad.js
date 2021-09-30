import React from 'react';
import "./Keypad.css";

const Keypad = (props) => (
    <div className="Keypad">
        {props.children}
    </div>
)

export default Keypad;