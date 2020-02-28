import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Main from './components/main';
import About from './components/about';
import { BrowserRouter as Router } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>

        <Main />
      
      </Router>
    );
  }
}

export default App;
