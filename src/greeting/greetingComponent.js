import React from 'react';

export default class GreetingComponent extends React.Component{
    render(){
        if(this.props.isLoggedIn){
            return <h1>User logged in...</h1>;
        }
        else{
            return <h1>Please sign in...</h1>;
        }
    }
}