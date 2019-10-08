import React from 'react';
import WelcomeComponent from './welcomeComponent';
import ClockComponent from './clock/clockComponent';
import GreetingComponent from './greeting/greetingComponent'

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
      <GreetingComponent isLoggedIn={false} />
    </div>
  )
}

export default App;
