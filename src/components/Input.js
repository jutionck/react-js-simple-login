import React from "react";

export const Input = (props) => {

    function handleChange(e) {
        props.handleChange(e.target.value)
    }

    return (
        <input onChange={handleChange} value={props.value} />
    )
}