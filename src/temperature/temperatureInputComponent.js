import React from 'react';

const scale = {
    'c':'Celsius',
    'f':'Fahrenheit'
 }

export default class TemperatureInputComponent extends React.Component{     
    constructor(props){
        super(props);        
    }

    render(){    
        return(
            <div>
                <label>Enter temperature in {scale[this.props.scale]} : </label>
                <input
                    value={this.props.temperature}
                    onChange={this.props.eventHandler} />
                </div>                
        );
    }
}