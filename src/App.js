import React, {Component} from 'react';
import './App.css';

import Persons from './Persons/Persons';

import MyList from './MyListComponent/MyList';

class App extends Component {

  constructor(){
    super();

    this.state = {
      persons:[
        { id:1, name: 'Pavle Pavković', age:6, addons: 'No additional informations' },
        { id:2, name: 'Nataša Pavković', age:45, addons: 'My hobbie is knitting' },
        { id:3, name: 'Vladimir Pavković', age:42, addons: 'Sleeping' }
      ]
    }    
  }

  onButtonClickHandler = (e)=>{
    //this.state.persons[1].name='Nikola';
  /*   this.setState({
      ...this.state.persons, name: 'Nikola'}
    }); */    
    console.log(e, this.state);
  }

  render(){
    return(
     /*  <div>
        <Persons persons={this.state.persons}/>
        <button onClick={this.onButtonClickHandler}>Change name</button>
      </div> */
      <MyList />
    );
  } 
}

export default App;
