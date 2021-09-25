import React, {useState} from 'react';
import Button from '../Button/Button';
import Keypad from '../Keypad/Keypad';
import './Calculator.css';
import Display from '../Display/Display';

const Calculator = () => {

    const [data, setData] = useState('');

    const calculate = () => {
        try {
            const result = eval(data);
            setData(result);
        } catch (e) {
            setData('error')
        }
    }

    const handleClick = e => {
        const value = e.target.getAttribute('data-value');
        switch(value) {
            case 'clear':
                setData('');
                break;
            case 'equal':
                calculate();
                break;
            default:
                setData(data+value);
        }
    }

    return(
        <div className="Calculator">
            <Display data={data}/>
            <Keypad>
                <Button onClick={handleClick} btnClass="LightBlue" label="C" value="clear" />
                <Button onClick={handleClick} btnClass="LightBlue" label="D" value="del" />
                <Button onClick={handleClick} btnClass="LightBlue" label="expand" value="expand" />
                <Button onClick={handleClick} btnClass="DarkBlue" label="+/-" value="null" />

                <Button onClick={handleClick} label="7" value="7" />
                <Button onClick={handleClick} label="8" value="8" />
                <Button onClick={handleClick} label="9" value="9" />
                <Button onClick={handleClick} btnClass="DarkBlue" label="/" value="/" />

                <Button onClick={handleClick} label="4" value="4" />
                <Button onClick={handleClick} label="5" value="5" />
                <Button onClick={handleClick} label="6" value="6" />
                <Button onClick={handleClick} btnClass="DarkBlue" label="x" value="*" />

                <Button onClick={handleClick} label="1" value="1" />
                <Button onClick={handleClick} label="2" value="2" />
                <Button onClick={handleClick} label="3" value="3" />
                <Button onClick={handleClick} btnClass="DarkBlue" label="-" value="-" />

                <Button onClick={handleClick} label="." value="." />
                <Button onClick={handleClick} label="=" value="equal" />
                <Button onClick={handleClick} label="0" value="0" />
                <Button onClick={handleClick} btnClass="DarkBlue" label="+" value="+" />
            </Keypad>
        </div>
    );
}

export default Calculator;