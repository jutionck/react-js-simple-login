import React, {useState} from 'react';
import './App.css';
import '../src/assets/style.css'
import ResultComponent from "./components/ResultComponent";
import KeyPadComponent from "./components/KeyPadComponent";

function App() {

    const [result, setResult] = useState("")

    const onClick = button => {

        if(button === "="){
            calculate()
        }

        else if(button === "C"){
            reset()
        }
        else if(button === "CE"){
            backspace()
        }

        else {
            setResult(result + button)
        }
    };


    const calculate = () => {
        let checkResult = ''

        if(result.includes('--')){
            checkResult = result.replace('--','+')
        }

        else {
            checkResult = result
        }

        try {
            let res = eval(checkResult) || ""  + ""
            setResult(res)
        } catch (e) {
            setResult("error")
            console.log(e)
        }
    };

    const reset = () => {
        setResult("")
    };

    const backspace = () => {
        let del = result.slice(0, -1)
        setResult(del)
    };

    return (
        <div className="App">
            <h1 data-test="display">[RJS-A05-L01]Hooks Calculator</h1>
            <div className="calculator-body">

                <ResultComponent result={result}/>

                <KeyPadComponent onClick={onClick}/>
            </div>
        </div>
    );
}

export default App;
