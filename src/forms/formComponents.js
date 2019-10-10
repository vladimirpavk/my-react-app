import React from 'react';

export default class FormComponent extends React.Component{ 

    constructor(){
        super();
        this.state = {
            name: ''
        }
    }

    onNameChanged = (event)=>{
        this.setState({
            name: event.target.value
        })
    }

    onFormSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state.name);        
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <label>Name :</label>
                <input type="text" value={this.state.name} onChange={this.onNameChanged}/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}