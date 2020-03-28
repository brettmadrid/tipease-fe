import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

class Home extends Component {
  /* when a user logs in, we will check the accountType field on the JWT to determine what compnent needs to be rendered */
  state = {
    username: "",
    accountType: "",
    id: "",
    isLoading: true
  };

  componentDidMount() {
    const token = localStorage.getItem("jwt");

    if (token) {
      const { username, accountType, id } = jwt_decode(token);
      this.setState({ username, accountType, id, isLoading: false });
    }
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    if (this.state.accountType === "customer") {
      return (
        <Redirect
          to={{
            pathname: "/customer",
            state: { username: this.state.username }
          }}
        />
      );
    } else if (this.state.accountType === "worker") {
      return (
        <Redirect
          to={{
            pathname: "/dashboard",
            state: { id: this.state.id }
          }}
        />
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default Home;
