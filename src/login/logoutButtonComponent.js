import React from 'react';

export default class LogoutButtonComponent extends React.Component{
    render(){
        return(
            <button onClick={this.props.buttonClickedHandler}>Logout</button>
        )
    }
}