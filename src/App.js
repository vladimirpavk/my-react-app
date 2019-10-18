import React, {Component} from 'react';
import './App.css';

import Persons from './Persons/Persons';

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

  render(){
    return(
      <div>
        <Persons persons={this.state.persons}/>
      </div>
    );
  } 
}

export default App;
