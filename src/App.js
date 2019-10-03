import React from 'react';
import './App.css';

function formatName(user){
  return user.name + ' ' + user.lastname;
}

const user1 = {
  name: 'Pavle',
  lastname: 'Pavković'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { formatName(user1) }
      </header>
    </div>
  );
}

export default App;
