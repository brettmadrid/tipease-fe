import React, { Component } from "react";
import CustomerHomePage from "./CustomerHomePage";
import WorkerDashboard from "./WorkerDashboard";
import Register from "./Register";

class Home extends Component {
  /* when a user logs in, we will check the accountType field on the JWT to determine what compnent needs to be rendered */
  state = {
    accountType: "customer",
    username: "Brett",
    id: "1"
  }

  componentDidMount() {
    /* This is where the JWT would be decoded and the state would be set */
    /* const token = jwt_decode(localStorage.getItem('jwt')) */
    /* this.setState({accountType: token.accountType}) */
  }

  render() {
    if (this.state.accountType === "customer") {
      return <CustomerHomePage username={this.state.username} />;
    } else if (this.state.accountType === "worker") {
      return <WorkerDashboard workerId={this.state.id} />;
    } else {
      return <Register />;
    }
  }
}

export default Home;
