import React, { Component } from 'react';

import Dashboard from './graphs/nasdaq-chart-example'

class DcDashboard extends Component {
  render() {
    return (
      <div>
        <Dashboard foo="bar"/>
      </div>
    );
  }
}

export default DcDashboard;