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
                Pmint
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
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