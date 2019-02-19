import React, { Component } from "react";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import WorkerDashboard from './components/WorkerDashboard';

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
        {/* {localStorage.getItem("jwt") ? ( */}
          <Route exact path="/" render={props => <Home {...props} /> } />
        {/* //) : ( */}
          <Route exact path="/login" render={props => <Login {...props} /> } />
        {/* //)} */}

        <Route exact path="/register" component={Register} />

        <Route exact path="/dashboard" component={WorkerDashboard} />

      </div>
    );
  }
}

export default App;
