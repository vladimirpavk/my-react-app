import React from 'react';

import TemperatureInputComponent from './temperatureInputComponent';

export default class TemperatureComponent extends React.Component{
    constructor(){
        super();
        console.log('component did load');
        this.state = {
            temperature : 0
        }
    }

    onInputChangedCs = (e)=>{
        const value = e.target.value;
        this.setState({
            temperature : value
        });
    }

    onInputChangedFahr = (e)=>{      
        const valueFahr = e.target.value;
        this.setState({
            temperature : this.convertToCs(valueFahr)
        });
    }

    convertToCs(tempFahr){
        return ((tempFahr-32)*5)/9
    }

    convertToFahr(tempCs){
        return tempCs*9/5+32
    }

    render(){
        return(
            <div>
                <TemperatureInputComponent
                    scale='c'
                    eventHandler={this.onInputChangedCs}
                    temperature={this.state.temperature}/>
                <TemperatureInputComponent
                    scale='f'
                    temperature={this.convertToFahr(this.state.temperature)}
                    eventHandler={this.onInputChangedFahr}/>
                <BoilingComponent temperature={this.state.temperature}/>
            </div>
        );
    }
}

class BoilingComponent extends React.Component{
    render(){
        if (this.props.temperature > 100){
            return <h1>Water is boiling</h1>            
        }
        else{
            return <h1>Water is not boiling</h1>
        }
    }
}