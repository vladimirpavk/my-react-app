import React from 'react';

export default class NumberListComponent extends React.Component{

    onListItemClick = (e)=>{
        console.log(e);
    }   

    render(){
        if(this.props.numbers){
            let numList = this.props.numbers.map((num)=><li key={num.toString()} onClick={this.onListItemClick}>{num}</li>);
            return <ul>{numList}</ul>
        }        
        return <h1>No numbers in list</h1>
    }
}