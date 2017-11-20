import React, { Component } from 'react';
import './App.css';
import Main from './components/main'
import Header from './components/header'
import 'bootstrap/less/bootstrap.less'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
