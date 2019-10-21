import React, { Component } from 'react';

const INITIAL_STATE = {
    list : [1, 2, 3],
    value : ''
};

class MyList extends Component{
    constructor(props){
        super(props);
        this.state = INITIAL_STATE;
    }

    onClearArray = ()=>{
        this.setState({
            list : []
        });
    }

    onResetArray = ()=>{
        this.setState(
            INITIAL_STATE
        );
    }

    onAddValue = ()=>{
        this.setState({
            list : [...this.state.list, this.state.value]
        });
        console.log(this.state);
    }
    
    onValueChanged = (event)=>{
        this.setState({
            value : event.target.value
        });
    }

    render(){
        return(
            <div>

                <ul>
                    {
                        (this.state.list || []).map(
                            (listElement, index)=><li key={index}>Element {listElement}</li>
                        )
                    }
                </ul>

                <button onClick={this.onClearArray}>
                    Clear Array
                </button>
                
                <button onClick={this.onResetArray}>
                    Reset Array
                </button>
                
                <input
                    type="text"
                    value={this.state.value} 
                    onChange={this.onValueChanged}
                />
                <button onClick={this.onAddValue}>Add value</button>

            </div>           
        );
    }
}

export default MyList;