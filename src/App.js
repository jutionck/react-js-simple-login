import React, {useState} from 'react';
import './App.css';
import SimpleCalculator from "./components/SimpleCalculator";

function App() {

    const initialNumberState = {
        numberOne: 0,
        numberTwo: 0,
    };

    const [number, setNumber] = useState(initialNumberState)
    const [result, setResult] = useState(0)

    const addSubmit = () => {
        setResult(Number(number.numberOne)+Number(number.numberTwo))
    }

    const subSubmit = () => {
        setResult(Number(number.numberOne)-Number(number.numberTwo))
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNumber({ ...number, [name]: value });
    }

    return (
        <div data-test="component-app" className="App">
            <h1 data-test="display">[RJS-A05-C01]Hooks Simple Calculator</h1>
            <SimpleCalculator
                numberOne={number.numberOne}
                numberTwo={number.numberTwo}
                handleChange={handleChange}
                addSubmit={addSubmit}
                subSubmit={subSubmit}
                result={result}/>
        </div>
    );
}

export default App;
