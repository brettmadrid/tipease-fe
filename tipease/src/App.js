import React, { Component } from "react";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import Register from "./components/Register";
import WorkerDashboard from "./components/WorkerDashboard";

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

        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />

        {/* {localStorage.getItem("user") ? (
          <Route
            exact
            path="/workers"
            render={props => <WorkerDashboard {...props} />}
          />
        ) : null} */}

        {/* <Route
          exact
          path="/workers/:id"
          render={props => <Worker {...props} worker={this.state.worker} />}
        /> */}
      </div>
    );
  }
}

export default App;
