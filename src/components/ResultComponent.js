import React from 'react';

const ResultComponent = (props) => {
    console.log(props.result)
    return (
        <div className="result">
            <br/>
            <h3>{props.result}</h3>
        </div>
    );
};

export default ResultComponent;