import React from 'react';

export default class FormComponent extends React.Component{ 

    onNameChanged = (event)=>{
        this.setState({
            name: event.target.value
        })
    }

    render(){
        return(
            <form>
                <label>Name :</label>
                <input type="text" value={this.state.name} onChange={this.onNameChanged}/>
                <button type="submit"></button>
            </form>
        );
    }
}