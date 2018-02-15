import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import DcDashboard from './dc-dashboard'
import GamesByLaneReport from './games-by-lane/games-by-lane-report'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/dc-js-dashboard' component={DcDashboard}/>
          <Route exact path='/games-by-lane' component={GamesByLaneReport}/>
        </Switch>
      </main>
    );
  }
}

export default Main;