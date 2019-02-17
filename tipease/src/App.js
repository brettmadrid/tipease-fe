import React, { Component } from "react";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login"

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
          <Route exact path="/" render={props => <Home {...props} /> } />
        ) : null}

        <Route exact path="/register" component={Register} />

        <Route path="/login" render={props => <Login {...props} /> } />

      </div>
    );
  }
}

export default App;
