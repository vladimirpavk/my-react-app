import React from 'react';

export default class LoginButtonComponent extends React.Component{
    render(){
        return(
            <button onClick={this.props.buttonClickedHandler}>Login</button>
        )
    }
}