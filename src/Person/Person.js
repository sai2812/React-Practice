import React from 'react';


const person = (props) => {
    return (
        <div>
            <h1> I am new person {props.name}</h1>
            <p>I am STATIC TEXT</p>
        </div>
    );
};

export default person;