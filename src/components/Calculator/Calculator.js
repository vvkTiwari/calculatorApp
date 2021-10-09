import React, {useState} from 'react';

import './Calculator.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import SimpleKeypad from '../Keypad/SimpleKeypad';
import ScientificKeypad from '../Keypad/ScientificKeypad';

import { keyCodeValueMap, operators } from '../../common/common';


const Calculator = () => {

    const [data, setData] = useState('');
    const [expand, setExpand] = useState(false);

    const handleKeyDown = e => {
        const keyValue = keyCodeValueMap;
        if(e.keyCode == 187) {
            calculate();
        } else if(e.keyCode == 8) {
            console.log("data ajklsfd;asdkl fj", typeof data);
            setData(data.slice(0,-1));
        } else {
            if(keyValue.hasOwnProperty(e.keyCode)) {
                let val = data + keyValue[e.keyCode];
                setData(val.toString());
            }
        }
    }

    function cos() {
        setData(""+Math.cos(data));
    }

    function sin() {
        setData(""+Math.sin(data));
    }

    function tan() {
        setData(""+Math.tan(data));
    }

    function tokenize(s) {
        // --- Parse a calculation string into an array of numbers and operators
        const r = [];
        let token = '';
        for (const character of s) {
            if ('^*/+-'.indexOf(character) > -1) {
                if (token === '' && character === '-') {
                    token = '-';
                } else {
                    r.push(parseFloat(token), character);
                    token = '';
                }
            } else {
                token += character;
            }
        }
        if (token !== '') {
            r.push(parseFloat(token));
        }
        return r;
    }
    
    function calculateResult(tokens) {
        // --- Perform a calculation expressed as an array of operators and numbers
        const operatorPrecedence = [{'^': (a, b) => Math.pow(a, b)},
                   {'*': (a, b) => a * b, '/': (a, b) => a / b},
                   {'+': (a, b) => a + b, '-': (a, b) => a - b}];
        let operator;
        for (const operators of operatorPrecedence) {
            const newTokens = [];
            for (const token of tokens) {
                if (token in operators) {
                    operator = operators[token];
                } else if (operator) {
                    newTokens[newTokens.length - 1] = 
                        operator(newTokens[newTokens.length - 1], token);
                    operator = null;
                } else {
                    newTokens.push(token);
                }
            }
            tokens = newTokens;
        }
        if (tokens.length > 1) {
            console.log('Error: unable to resolve calculation');
            return tokens;
        } else {
            return tokens[0];
        }
    }

    const calculate = () => {
        try {
            let firstChar = data.slice(0,1);
            let lastChar = data.slice(-1);
            // const operators = ["+", "-","/","*","="];

            if (operators.includes(lastChar) || operators.includes(firstChar)) {
                return;
            } else {
                const result = calculateResult(tokenize(data));
                setData(result.toString());
            }

        } catch (e) {
                setData('error')
            }
        }

    const handleClick = e => {
        const value = e.target.getAttribute('data-value');
        // const operators = ["+", "-","/","*","="];
   
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
            case 'sin':
                sin(data);
                break;
            case 'cos':
                cos(data);
                break;
            case 'tan':
                tan(data);
                break;

            default:
                let lastChar = data.slice(-1);

                if (operators.includes(value) && operators.includes(lastChar)) {
                    setData(data.slice(0,-1) + value);
                } else {
                    setData(data+value);
                }
        }
    }

    const handleExpandCalc = () => {
        setExpand(!expand);
    }

    return(
        <div className="Calculator">
            <Display data={data} keyPressHandler={(event) => handleKeyDown(event)}/>
            <Keypad style={{display:'flex', width: '100%'}}>
                <ScientificKeypad handleClick={handleClick} expand={expand} />
                <SimpleKeypad handleClick={handleClick} onExpand={handleExpandCalc} />
            </Keypad>
        </div>
    );
}

export default Calculator;