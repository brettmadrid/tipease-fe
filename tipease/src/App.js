import React, { Component } from "react";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Home />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} /> 
        {/* <Route path="/register" component={Register} />*/}
      </div>
    );
  }
}

export default App;
