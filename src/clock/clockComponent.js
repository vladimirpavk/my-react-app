import React from 'react';
import './clockComponent.css';

export default class Clock extends React.Component{

    constructor(props){
        super(props);    
        this.state = { 
            date: new Date(), 
            alarmOn: false
        };

        //this.timerClicked = this.timerClicked.bind(this);
    }

    componentDidMount(){
        console.log('componentdidMount');
        this.timerID = setInterval(
            ()=>this.tick(), 1000
        );
    }

    tick(){
        //console.log('tick() fired...');
        this.setState({date : new Date()});
        
    }   
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    timerClicked = (name, e)=>{        
        console.log(e);
        this.setState({
            alarmOn : !this.state.alarmOn
        });
    }

    render(){
        return(
            <div>
                <h1>I'm The clock</h1>
                <h2 onClick={(name)=>{this.timerClicked('Vladimir', name)}}>{this.state.date.toLocaleTimeString()}</h2>
                <h3>Alarm is {this.state.alarmOn ? 'ON' : 'OFF'}</h3>
            </div>            
        );
    }   
}