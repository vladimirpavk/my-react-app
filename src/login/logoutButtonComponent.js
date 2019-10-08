import React from 'react';

export default class LogoutButtonComponent extends React.Component{

    constructor(props){        
        super(props);
    }

    render(){
        return(
            <button onClick={props.buttonClickedHandler}>Login</button>
        )
    }
}