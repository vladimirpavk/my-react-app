import React from 'react';
import LoginButtonComponent from './loginButtonComponent';
import LogoutButtonComponent from './logoutButtonComponent';

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
        if(this.state.isLoggedIn){
            return <LogoutButtonComponent buttonClickedHandler={logOutButtonClicked} />;
        }
        else{
            return <LoginButtonComponent buttonClickedHandler={logInButtonClicked} />;
        }
    }
}