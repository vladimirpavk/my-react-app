import React, {Component} from 'react';
import './App.css';

import klasses from './MyCssModule.module.css';

/* import Persons from './Persons/Persons';
import MyList from './MyListComponent/MyList';
import Watch from './watch/watch'; 
import UserOutput from './Assignment/UserOutput';
import UserInput from './Assignment/UserInput';
*/

import ValidationComponent from './Assignment 2/ValidationComponent';
import CharComponent from './Assignment 2/CharComponent';

import StyledButton from './Styling/StyledButton';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  constructor(){
    super();

    /* this.state = {
      persons:[
        { id:1, name: 'Pavle Pavković', age:6, addons: 'No additional informations' },
        { id:2, name: 'Nataša Pavković', age:45, addons: 'My hobbie is knitting' },
        { id:3, name: 'Vladimir Pavković', age:42, addons: 'Sleeping' }
      ]
    }     
    this.state = {
      username : 'Default state username',
      paragraph1 : false
    };*/
    this.state = {
      inputValueLength : 0,
      inputValueText : '',
      inputValueTextArray : []
    };
  }

  onButtonClickHandler = (e)=>{
    //this.state.persons[1].name='Nikola';
  /*   this.setState({
      ...this.state.persons, name: 'Nikola'}
    }); */    
    console.log(e, this.state);
  }

  changeUsername = (newUserName)=>{
    this.setState({
      username : newUserName
    });
  }

  changeParagraph1 = ()=>{
      const newValue = !this.state.paragraph1;
      this.setState({
        paragraph1 : newValue
      })
  };

  onInputChanged = (event)=>{ 
    this.setState({
      inputValueLength : event.target.value.length,
      inputValueText : event.target.value,
      inputValueTextArray : event.target.value.split('')
    });
  }

  onCharComponentClicked = (index, event)=>{
    console.log(index);

    const newArraySlice1 = this.state.inputValueTextArray.slice(0, index);
    const newArraySlice2 = this.state.inputValueTextArray.slice(index+1, this.state.inputValueTextArray.length);
    const newArray = [...newArraySlice1, ...newArraySlice2];
    
    const newText = newArray.join('');
    console.log(newText);
    const newLength = newText.length;

    this.setState({
      inputValueLength : newLength,
      inputValueText : newText,
      inputValueTextArray : newArray
    });
  }

  render(){
    const charComponentStyle = {
      display: 'inline-block',
      padding : '16px',
      textAlign : 'center',
      margin : '16px',
      border : '1px solid black'
    };

    return(
     /*  <div>
        <Persons persons={this.state.persons}/>
        <button onClick={this.onButtonClickHandler}>Change name</button>
      </div> 
      <MyList />
      <Watch />
      <div>
        <button onClick={this.changeParagraph1}>Change paragraph</button>
        <UserInput inputValue={this.state.username} inputHandler={(e)=>{this.changeUsername(e.target.value, e)}} />
        <UserOutput showParagraph1={this.state.paragraph1} username="Pavle"/>
        <UserOutput showParagraph1="true" username={this.state.username}/>
        <button onClick={(event)=>this.changeUsername('Vladimir', event)}>Change username</button>
        <UserOutput showParagraph1="false" username="Nataša"/>
      </div>*/
      /*
      <div>
        <input onInput={(e)=>this.onInputChanged(e)} placeholder="Enter any text" value={this.state.inputValueText} />
        <p>Text length is {this.state.inputValueLength} characters...</p>
        <ValidationComponent length={this.state.inputValueLength} />        
        {
          this.state.inputValueTextArray.map((element, index)=>{
            return <CharComponent style={charComponentStyle} key={index} letter={element} onCharClicked={(e)=>this.onCharComponentClicked(index, e)}/>;
          })
        }        
      </div>
      */
     <div>
      <button className={klasses.red}>Samo proba za stil</button>
      <ErrorBoundary>
        <StyledButton />
      </ErrorBoundary>      
     </div>
    );
  } 
}

export default App;
