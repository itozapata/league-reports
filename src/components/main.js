import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import AnotherThing from './another-thing'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/another-thing' component={AnotherThing}/>
        </Switch>
      </main>
    );
  }
}

export default Main;