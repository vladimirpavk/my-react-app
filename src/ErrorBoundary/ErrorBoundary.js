import React, { Component } from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError: false,            
            errorMessage: ''
        }
    }

    componentDidCatch = (error, info)=>{
        console.log(error, info);
        this.setState({
            hasError: true,
            errorMessage: info
        });
    }

    render(){
        if(this.state.hasError){
            return <h1>Something wrong happened {this.state.errorMessage}</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;