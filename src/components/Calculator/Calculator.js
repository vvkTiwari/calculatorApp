import React, {useState} from 'react';
import './Calculator.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import SimpleKeypad from '../Keypad/SimpleKeypad';
import ScientificKeypad from '../Keypad/ScientificKeypad';

const Calculator = () => {

    const [data, setData] = useState('');
    const [expand, setExpand] = useState(false);

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

    const handleExpandCalc = () => {
        setExpand(!expand);
    }

    return(
        <div className="Calculator">
            <Display data={data}/>
            <Keypad style={{display:'flex', width: '100%'}}>
                <ScientificKeypad handleClick={null} expand={expand} />
                <SimpleKeypad handleClick={handleClick} onExpand={handleExpandCalc} />
            </Keypad>
        </div>
    );
}

export default Calculator;