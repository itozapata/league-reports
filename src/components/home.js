import React, { Component } from 'react';
import logo from '../logo.svg';
import BarChart from './graphs/bar-chart'
import StackedToGroupedBarChart from './graphs/stacked-to-grouped-bar-chart'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/*<BarChart data={[5, 10, 1, 3]} size={[500, 500]}/>*/}
        <div>
          <form>
            <label><input type="radio" name="mode" value="grouped" />Grouped</label>
            <label><input type="radio" name="mode" value="stacked" checked />Stacked</label>
          </form>
          <StackedToGroupedBarChart/>
        </div>
      </div>
    )
  }
}

export default Home;