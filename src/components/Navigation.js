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
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  logout = () => {
    localStorage.removeItem("token");
  };

  render() {
    return (
      <div>
        <Navbar dark style={{ backgroundColor: "#008C17" }} light expand="md">
          <NavbarBrand href="/" style={{ fontSize: "2rem", color: "#30393A" }}>
            TIPEASE
          </NavbarBrand>
          <NavbarToggler className="nav-toggler" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  style={{ color: "#FFAFA" }}
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
                  style={{ color: "#FFAFA" }}
                  tag={RRNavLink}
                  exact
                  to="/login"
                  activeClassName="activeNavButton"
                >
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "#FFAFA" }}
                  tag={RRNavLink}
                  exact
                  to="/register"
                  activeClassName="activeNavButton"
                >
                  Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "#FFAFA" }}
                  onClick={this.logout}
                  tag={RRNavLink}
                  exact
                  to="/login"
                  activeClassName="activeNavButton"
                >
                  Log Out
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
