import React, { Component } from 'react'

import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
// eslint-disable-next-line
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
                PMint
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/dc-js-dashboard">
              <NavItem eventKey={2}>DC.js Dashboard</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/login">
              <NavItem eventKey={3}>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;