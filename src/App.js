import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Hero">
          <p className="name">
            Marina McGrath
          </p>
          <p id="icons">
          <a href="https://github.com/MarinaMcGrath"  target="_blank">
            <img src="/img/GitHub.png" alt="github"  className="icon"/>
          </a>
          <a href="https://www.linkedin.com/in/marinamcgrath"  target="_blank">
            <img src="/img/LI.png" alt="linkedin"  className="icon"/>
          </a>
          <a href="https://medium.com/@marinamcgrath"  target="_blank">
            <img src="/img/medium.png" alt="medium"  className="icon"/>
          </a>
            <a href='/resume'>
            <img src="/img/resume.png" alt="resume"  className="icon"/>
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
