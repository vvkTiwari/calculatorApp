import React from 'react';
import Button from '../Button/Button';

const SimpleKeypad = (props) => {

    return(
            <div style={{display:'flex', flexWrap:'wrap', width:'400px'}}>
                <Button onClick={props.handleClick} width="25" btnClass="LightBlue" label="C" value="clear" />
                <Button onClick={props.handleClick} width="25" btnClass="LightBlue" label="D" value="del" />
                <Button onClick={props.handleClick} btnClass="LightBlue"  width="25" onClick={props.onExpand} label="expand" value="expand" />
                <Button onClick={props.handleClick} btnClass="DarkBlue"  width="25" label="+/-" value="null" />

                <Button onClick={props.handleClick}  width="25" label="7" value="7" />
                <Button onClick={props.handleClick}  width="25" label="8" value="8" />
                <Button onClick={props.handleClick}  width="25" label="9" value="9" />
                <Button onClick={props.handleClick} btnClass="DarkBlue"  width="25" label="/" value="/" />

                <Button onClick={props.handleClick}  width="25" label="4" value="4" />
                <Button onClick={props.handleClick}  width="25" label="5" value="5" />
                <Button onClick={props.handleClick}  width="25" label="6" value="6" />
                <Button onClick={props.handleClick} btnClass="DarkBlue"  width="25" label="x" value="*" />

                <Button onClick={props.handleClick}  width="25" label="1" value="1" />
                <Button onClick={props.handleClick}  width="25" label="2" value="2" />
                <Button onClick={props.handleClick}  width="25" label="3" value="3" />
                <Button onClick={props.handleClick} btnClass="DarkBlue"  width="25" label="-" value="-" />

                <Button onClick={props.handleClick}  width="25" label="." value="." />
                <Button onClick={props.handleClick}  width="25" label="=" value="equal" />
                <Button onClick={props.handleClick}  width="25" label="0" value="0" />
                <Button onClick={props.handleClick} btnClass="DarkBlue"  width="25" label="+" value="+" />
            </div>
    );
}

export default SimpleKeypad;