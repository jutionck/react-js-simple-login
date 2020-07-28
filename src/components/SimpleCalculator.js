import React from "react";

const SimpleCalculator = (props) => {

    return (
        <div>
            <h2>{props.result}</h2>
            <input
                name="numberOne"
                value={props.numberOne}
                onChange={props.handleChange}
            />
            <input
                name="numberTwo"
                value={props.numberTwo}
                onChange={props.handleChange}
            />
            <button onClick={props.addSubmit}>+</button>
            <button onClick={props.subSubmit}>-</button>
        </div>
    )
}

export default SimpleCalculator