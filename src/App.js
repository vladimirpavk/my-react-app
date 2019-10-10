import React from 'react';
import WelcomeComponent from './welcomeComponent';
import ClockComponent from './clock/clockComponent';
import GreetingComponent from './greeting/greetingComponent'
import LoginControlComponent from './login/loginControlComponent';
import NumberListComponent from './number/numberListComponent';
import FormComponent from './forms/formComponents';
import TemperatureComponent from './temperature/temperatureComponent';

import './App.css';

function formatName(user){
  return user.name + ' ' + user.lastname;
}

const user1 = {
  name: 'Pavle',
  lastname: 'Pavković'
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        { formatName(user1) }
      </header>
      <WelcomeComponent name={formatName(user1)} />
    </div>
  );
} */

function App() {
  return(
    <div>
      <ClockComponent />
      <LoginControlComponent />
      <NumberListComponent numbers={[1, 2, 3, 4, 5, 6]} />
      <FormComponent />
      <TemperatureComponent />
    </div>
  )
}

export default App;
