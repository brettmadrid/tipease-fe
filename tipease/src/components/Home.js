import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import CustomerHomePage from "./CustomerHomePage";
import WorkerDashboard from "./WorkerDashboard";
import Login from "./Login";

class Home extends Component {
  /* when a user logs in, we will check the accountType field on the JWT to determine what compnent needs to be rendered */
  state = {
    accountType: "",
    username: "",
    id: "",
    isReloaded: false
  };


  componentDidMount() {
    /* This is where the JWT would be decoded and the state would be set */
    const token = localStorage.getItem('jwt');

    if (token) {
      const decoded = jwt_decode(token);

      console.log(token)
      this.setState({
        accountType: decoded.accountType,
        username: decoded.username,
        id: decoded.id
      })
    }
    if (!this.state.isReloaded) {
      this.setState({ isReloaded: true })
      window.location.reload();
    }
  };

  render() {
    if (this.state.accountType === "customer") {
      return <CustomerHomePage username={this.state.username} />;
    } else if (this.state.accountType === "worker") {
      return <WorkerDashboard workerID={this.state.id} />
    } else {
      return <Login />;
    }
  }
}

export default Home;
