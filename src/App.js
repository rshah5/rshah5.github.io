import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div>
          <img src={logo} className="logo" alt="longshah"/>
        </div>
        <a
          className="link"
          href="/"
          target="_blank"
        >
          LongShah LLC.
        </a>
      </header>
      <div>
        <div href="#" title="Button One" className="button one">
          welcome to LongShah LLC. We are working on amazing things coming soon this Summer! stay tuned...
        </div>
      </div>
    </div>
  );
}

export default App;
