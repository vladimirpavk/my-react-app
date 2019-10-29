import React from 'react';

const UserInput = (props)=>{
    return(
        <div>
            <input value={props.inputValue} onInput={props.inputHandler}/>
        </div>
    )
}

export default UserInput;