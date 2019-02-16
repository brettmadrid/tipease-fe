import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#A26CCC" }} light expand="md">
          <NavbarBrand href="/" style={{ fontSize: "2rem" }}>TipEASE</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to="/"
                  activeClassName="activeNavButton"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to="/register"
                  activeClassName="activeNavButton"
                >
                  Register
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to="/logout"
                  activeClassName="activeNavButton"
                >Logout
                </NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
