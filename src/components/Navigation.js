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

  logout = () => {
    localStorage.removeItem("token")
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#63DA00" }} light expand="md">
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
                >Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to="/login"
                  activeClassName="activeNavButton"
                >Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to="/register"
                  activeClassName="activeNavButton"
                >Register
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
