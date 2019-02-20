import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import CustomerHomePage from "./CustomerHomePage";
import WorkerDashboard from "./WorkerDashboard";
import Login from "./Login";

class Home extends Component {
  /* when a user logs in, we will check the accountType field on the JWT to determine what compnent needs to be rendered */
  state = {
    accountType: "worker",
    username: "Brett",
    id: "1",
    isReloaded: false
  };


  componentDidMount() {
    this.checkForToken()
  };

  checkForToken(){
    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
        Authorization: token
      }
    };

    if (token) {
      const decoded = jwt_decode(token);
      const { accountType, username, id } = decoded;
        this.setState({
          accountType: accountType,
          username: username,
          id: id,
        })
    }
  }

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