import React from 'react';
import "./Display.css";

const Display = (props) => (
    <div  className="DisplayContainer">
        <input className="Display" type="text" tabIndex="0" value={props.data} onKeyDown={props.keyPressHandler} />
    </div>
)

export default Display;