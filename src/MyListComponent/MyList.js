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
        this.setState((state)=>{
            return {
                list : [],
                value :''
            }
        });
    }

    /* onClearArray = ()=>
        this.setState({
            list : []            
        }); */

    /* onResetArray = ()=>{
        this.setState(
            INITIAL_STATE
        );
    } */

    onResetArray = ()=>{
        this.setState(
            (oldState)=>{
                return  INITIAL_STATE;
            }           
        );
    }

   /*  onAddValue = ()=>{   
        this.setState({
            list : [...this.state.list, this.state.value]            
        });
    } */
    onAddValue = ()=>{   
        this.setState(state=>
        {
            const newList = [...this.state.list, this.state.value];
        
            return {
                list : newList,
                value: '',
            };
        });
    }
    
    /* onValueChanged = (event)=>{
        this.setState({
            value : +event.target.value
        });
    } */

    onValueChanged = (event)=>{
        //must use event persist becouse arrow function is in different context
        event.persist();
        this.setState(
            (oldState)=>{
                return {
                    value : +event.target.value
                }
            }
        )
        /* this.setState({
            value : +event.target.value
        }); */
    }

    elementClicked = (elementIndex)=>{
        //console.log('Element clicked...', e);
        //const listElementIndex = this.state.list.indexOf(listElement);
        const newList = this.state.list.slice();
        newList[elementIndex] += 1;

        //console.log(newList);

        this.setState({
            list : newList
        });
    }

    removeElement = (index, e)=>{
        const partOne = this.state.list.slice(0, index);
        const partTwo = this.state.list.slice(index+1);

        const newList = partOne.concat(partTwo);
        
        this.setState({
            list : newList
        });
    }

    render(){
        return(
            <div>

                <ul>
                    {
                        (this.state.list || []).map(
                            (listElement, index)=>{
                                return(
                                    <div key={1000*index}>
                                        <li>Element {listElement}</li>
                                        <button onClick={(e)=>this.elementClicked(index)}>Increase by 1</button>
                                        <button onClick={(e)=>this.removeElement(index)}>Remove</button>
                                    </div>
                                );
                            }
                        )
                    }
                </ul>

                <button onClick={this.onClearArray}>
                    Clear Array
                </button>
                
                <button onClick={this.onResetArray}>
                    Reset Array
                </button>
                
                <div>
                    <input
                        type="text"
                        value={this.state.value} 
                        onChange={this.onValueChanged}
                    />
                    <button onClick={this.onAddValue}>Add value</button>
                </div>               

            </div>           
        );
    }
}

export default MyList;