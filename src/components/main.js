import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import DcDashboard from './dc-dashboard'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/dc-js-dashboard' component={DcDashboard}/>
        </Switch>
      </main>
    );
  }
}

export default Main;