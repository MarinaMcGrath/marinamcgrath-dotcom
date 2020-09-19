import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Marina McGrath
        </p>
        <p>
          <a href='https://github.com/marinamcgrath'>Github</a> | 
          <a href='https://www.linkedin.com/in/marinamcgrath'> LinkedIn</a> |
          <a href='https://medium.com/@marinamcgrath'> Medium</a> |
          <a href='/resume'> Resume</a>
        </p>
      </header>
    </div>
  );
}

export default App;
