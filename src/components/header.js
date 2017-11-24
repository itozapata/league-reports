import React, { Component } from 'react'

import { LinkContainer } from 'react-router-bootstrap'
// eslint-disable-next-line
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
                Pmint
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <LinkContainer to="/home">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/another-thing">
              <NavItem eventKey={2}>Another Thing</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;