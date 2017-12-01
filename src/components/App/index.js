import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <nav className='App-nav'>
          <Link to='/'>Home</Link>
          &nbsp; &nbsp;
          <Link to='/about'>About</Link>
          &nbsp; &nbsp;
          <Link to='/marvel'>Marvel</Link>
        </nav>
        </header>

        {this.props.children}

      </div>
    );
  }
}

export default App;
