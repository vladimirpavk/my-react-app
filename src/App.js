
/* import WelcomeComponent from './welcomeComponent';
import ClockComponent from './clock/clockComponent';
import GreetingComponent from './greeting/greetingComponent'
import LoginControlComponent from './login/loginControlComponent';
import NumberListComponent from './number/numberListComponent';
import FormComponent from './forms/formComponents';
import TemperatureComponent from './temperature/temperatureComponent';
import FancyBoxComponent from './composition/fancyBox';

import { ThemeContext } from './Context';
import ToolBar from './context/toolbar'; */
//import UdemyComponent from './udemy/udemyComponent';

import React from 'react';
import './App.css';
import Person from './Person/Person';
import Persons from './Persons/Persons';

/* function formatName(user){
  return user.name + ' ' + user.lastname;
}

const user1 = {
  name: 'Pavle',
  lastname: 'Pavković'
} */

function App() {
  return(
    <div>
      {/* <Person name="Pavle Pavković" age="6"/>
      <Person name="Vladimir Pavković" age="42"/>
      <Person name="Nataša Pavković" age="45">
        <h2>My hobbie is knitting</h2>
      </Person> */}

      <Persons />
       {/* <ThemeContext.Provider theme="lightThemeFromContext">
        <ToolBar />
      </ThemeContext.Provider>  

      <ClockComponent />
      <LoginControlComponent />
      <NumberListComponent numbers={[1, 2, 3, 4, 5, 6]} />
      <FormComponent />
      <TemperatureComponent />
      <FancyBoxComponent
        heading={<h3>Post heading</h3>}
        post={<p>Post body</p>}>
        <p>Pavle Pavković</p>
      </FancyBoxComponent> 

      <UdemyComponent />*/}

    </div>
  )
}

export default App;
