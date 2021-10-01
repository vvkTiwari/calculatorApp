import React, {useState} from 'react';

import './Calculator.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import SimpleKeypad from '../Keypad/SimpleKeypad';
import ScientificKeypad from '../Keypad/ScientificKeypad';

import { keyCodeValueMap } from '../../common/common';


const Calculator = () => {

    const [data, setData] = useState('');
    const [expand, setExpand] = useState(false);

    const handleKeyDown = e => {
        const keyValue = keyCodeValueMap;
        if(e.keyCode == 187) {
            calculate();
        } else if(e.keyCode == 8) {
            setData(data.slice(0,-1));
        } else {
            if(keyValue.hasOwnProperty(e.keyCode)) {
                setData(data+keyValue[e.keyCode]);
            }
        }
    }

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
            case 'del':
                setData(data.slice(0,-1));
                break;
            case 'equal':
                calculate();
                break;
            default:
                setData(data+value);
        }
    }

    const handleExpandCalc = () => {
        setExpand(!expand);
    }

    return(
        <div className="Calculator">
            <Display data={data} keyPressHandler={(event) => handleKeyDown(event)}/>
            <Keypad style={{display:'flex', width: '100%'}}>
                <ScientificKeypad handleClick={null} expand={expand} />
                <SimpleKeypad handleClick={handleClick} onExpand={handleExpandCalc} />
            </Keypad>
        </div>
    );
}

export default Calculator;