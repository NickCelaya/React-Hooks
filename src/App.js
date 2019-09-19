import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [greeting] = useState('This is state, Welcome to Hooks! ')
  const [userInput, setUserInput] = useState('')

  const userInputHandler = (event) => {
    setUserInput(event.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {greeting}
        </p>

        <input type="text" onChange={userInputHandler} placeholder="type to see state changes"/>
        <p>
          {userInput}
        </p>
        <p>Build another component and pass it props from this components useState state</p>
      </header>
    </div>
  );
}

export default App;
