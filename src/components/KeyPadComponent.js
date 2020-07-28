import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const KeyPadComponent = (props) => {
    return (
        <div>
            <div className="flex-container">
                <button className="btn btn-outline-primary" name="9" onClick={e => props.onClick(e.target.name)}>9</button>
                <button className="btn btn-outline-primary" name="8" onClick={e => props.onClick(e.target.name)}>8</button>
                <button className="btn btn-outline-primary" name="7" onClick={e => props.onClick(e.target.name)}>7</button>
                <button className="btn btn-outline-warning" name="+" onClick={e => props.onClick(e.target.name)}>+</button>
            </div>
            <div className="flex-container">
                <button className="btn btn-outline-primary" name="6" onClick={e => props.onClick(e.target.name)}>6</button>
                <button className="btn btn-outline-primary" name="5" onClick={e => props.onClick(e.target.name)}>5</button>
                <button className="btn btn-outline-primary" name="4" onClick={e => props.onClick(e.target.name)}>4</button>
                <button className="btn btn-outline-warning" name="-" onClick={e => props.onClick(e.target.name)}>-</button>
            </div>
            <div className="flex-container">
                <button className="btn btn-outline-primary" name="3" onClick={e => props.onClick(e.target.name)}>3</button>
                <button className="btn btn-outline-primary" name="2" onClick={e => props.onClick(e.target.name)}>2</button>
                <button className="btn btn-outline-primary" name="1" onClick={e => props.onClick(e.target.name)}>1</button>
                <button className="btn btn-outline-warning" name="*" onClick={e => props.onClick(e.target.name)}>*</button>
            </div>


            <div className="flex-container">
                <button className="btn btn-outline-primary" name="0" onClick={e => props.onClick(e.target.name)}>0</button>
                <button className="btn btn-outline-danger" name="C" onClick={e => props.onClick(e.target.name)}>C</button>
                <button className="btn btn-outline-success" name="=" onClick={e => props.onClick(e.target.name)}>=</button>
                <button className="btn btn-outline-warning" name="/" onClick={e => props.onClick(e.target.name)}>/</button>
            </div>
        </div>
    );
};

export default KeyPadComponent;