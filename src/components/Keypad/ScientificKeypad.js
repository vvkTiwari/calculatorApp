import React from 'react';
import Button from '../Button/Button';

const ScientificKeypad = (props) => {
    const shown = props.expand ? 'flex' : 'none';

    return(
            <div style={{display:shown, flexWrap:'wrap', width:'600px'}}>
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="(" value="clear" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label=")" value="del" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="MC" value="expand" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="M+" value="null" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="M-" value="null" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="MR" value="null" />

                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="2nd" value="7" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="2x" value="8" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="xy" value="9" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="x2" value="null" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="e" value="null" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="ex" value="/" />

                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="1/X" value="4" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="X!" value="5" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="YrootX" value="6" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="rootX" value="null" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="pie" value="null" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="ln" value="*" />

                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="Rand" value="1" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="tan" value="2" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="sin" value="3" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="cos" value="-" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="Yx" value="null" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="10x" value="null" />

                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="Deg" value="." />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="tanh" value="equal" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="sinh" value="0" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="cosh" value="+" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="logy" value="null" />
                <Button onClick={props.handleClick} btnClass="Gray"  width="16.66" label="log" value="null" />
            </div>
    );
}

export default ScientificKeypad;