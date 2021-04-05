import React from 'react';

const userOutput = (props) => {
    return (<input onChange={props.changed} value={props.CurrentValue}></input>
    );
}

export default userOutput;