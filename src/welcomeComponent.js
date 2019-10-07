import React from 'react';
import './welcomeComponent.css';

export default class Welcome extends React.Component{
    render(){
        return <h1>{this.props.name}</h1>;
    }
}