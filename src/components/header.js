import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

class Header extends Component {
  render() {
    return (
      <header>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}><Link to='/'>Home</Link></Col>
            <Col xs={6} md={4}><Link to="/another-thing">Another Thing</Link></Col>
          </Row>
        </Grid>
      </header>
    );
  }
}

export default Header;