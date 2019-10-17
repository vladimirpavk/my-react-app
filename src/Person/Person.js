import React from 'react';

const person = (props)=>{
    return(
        <div>
            <h2>Hi! I'm {props.name}</h2>
            <h3>I'm {props.age} years old. </h3>
            {props.children}
        </div>
    );
}

export default person;