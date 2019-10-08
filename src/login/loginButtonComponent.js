import React from 'react';

export default class LoginButtonComponent extends React.Component{

    constructor(props){        
        super(props);
    }

    render(){
        return(
            <button onClick={props.buttonClickedHandler}>Login</button>
        )
    }
}