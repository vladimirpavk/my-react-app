import React, {Component} from 'react';
import LoginButtonComponent from './loginButtonComponent';
import LogoutButtonComponent from './logoutButtonComponent';
import GreetingComponent from '../greeting/greetingComponent';

export default class LoginControlComponent extends React.Component{

    constructor(props){        
        super(props);

        this.state={
            isLoggedIn : true
        };
    }

    logOutButtonClicked = ()=>{
        this.setState({
            isLoggedIn : false
        })
    }

    logInButtonClicked = ()=>{
        this.setState({
            isLoggedIn : true
        })
    }

    render(){

        let button;
        
        if(this.state.isLoggedIn){
            button = <LogoutButtonComponent buttonClickedHandler={this.logOutButtonClicked} />;
        }
        else{
            button = <LoginButtonComponent buttonClickedHandler={this.logInButtonClicked} />;
        }

        return(
            <div>
                <GreetingComponent isLoggedIn={this.state.isLoggedIn} />
                {button}
            </div>         
        )
    }
}