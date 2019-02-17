import React, { Component } from "react";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import Register from "./components/Register";
import WorkerDashboard from "./components/WorkerDashboard";
import CustomerHomePage from "./components/CustomerHomePage";
import LeaveTip from "./components/LeaveTip";

class App extends Component {
  constructor() {
    super();
    this.state = {
      validated: false
    };
  }

  componentDidMount() {
    if (!localStorage.getItem("user")) {
      this.setState({ validated: false });
    } else {
      this.setState({ validated: true });
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        {localStorage.getItem("user") ? (
          <Route
            exact path="/"
            render={props => <Home {...props} /> }
            component={Home}
          />
          ) : null}
        <Route exact path="/register" component={Register} />
        {/* {localStorage.getItem("user") ? (
          <Route
          exact
          path="/workerDashboard"
          render={props => <WorkerDashboard {...props} />}
          />
        ) : null} */}

        {/* <Route
          exact
          path="/workers"
          render={props => <CustomerHomePage {...props} />}
          />
          <Route
          exact
          path="/workers/:id"
          render={props => <LeaveTip {...props} />}
        /> */}
      </div>
    );
  }
}

export default App;
