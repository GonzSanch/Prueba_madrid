import React, { useState } from "react"
import "./app.css"

const App = () => {
    const [value, setvalue] = useState('');
    const [result, setResult] = useState(null);

    const calc = () => {
        try {
            const op = eval(value) 
            setResult(op)
            setvalue(op)
        } catch (e) {
            setResult('error')
        }
    }

    const handleOnClick = (operation) => {
        switch (operation) {
            case "C":
                setvalue('')
                break;
            case "CE":
                const newvalue = value.slice(0, -1)
                setvalue(newvalue)
                break;
            default:
                setvalue(value + operation)
                break;
        }
    }

    const handleOnkeyPressed = (event) => {
        console.log(event.keyCode)
    }

    return (
        <div>
        <h1>42Calc</h1>
        <div className="container">
            <div id="result">
                <p>{result || 0} <sup>op: {value}</sup> </p>
            </div>
            <div className='buttons'>
                <button onClick={() => handleOnClick("7")} onKeyPress={handleOnkeyPressed}>7</button>
                <button onClick={() => handleOnClick("4")}>4</button>
                <button onClick={() => handleOnClick("1")}>1</button>
                <button onClick={() => handleOnClick("0")}>0</button>
                <button onClick={() => handleOnClick("8")}>8</button>
                <button onClick={() => handleOnClick("5")}>5</button>
                <button onClick={() => handleOnClick("2")}>2</button>
                <button onClick={() => handleOnClick(".")}>.</button>
                <button onClick={() => handleOnClick("9")}>9</button>
                <button onClick={() => handleOnClick("6")}>6</button>
                <button onClick={() => handleOnClick("3")}>3</button>
                <button id="Cbutton" onClick={() => handleOnClick("C")}>C</button>
                <button onClick={() => handleOnClick("+")}>+</button>
                <button onClick={() => handleOnClick("*")}>*</button>
                <button onClick={() => handleOnClick("(")}>(</button>
                <button id="Cbutton" onClick={() => handleOnClick("CE")}>CE</button>
                <button onClick={() => handleOnClick("-")}>-</button>
                <button onClick={() => handleOnClick("/")}>/</button>
                <button onClick={() => handleOnClick(")")}>)</button>
                <button onClick={calc}>=</button>
            </div>
        </div>
        <p>
            This is a react-calc based on states and using eval function.
        </p>
        <footer>created by gsanchez</footer>
        </div>
    );
};

export default App;
