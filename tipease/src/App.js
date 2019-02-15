import React, { Component } from "react";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import MainArea from "./components/MainArea";

class App extends Component {
  constructor() {
    super();
    this.state = {
      validated: false
    };
  }

  componentDidMount() {
    if (!localStorage.getItem('user')) {
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
        <Route exact path="/login" component={Login} />
        {/* <Route path="/register" component={Register} />*/}

        <Authenticate validated ={this.state.validated}>
          <MainArea />
        </Authenticate>

      </div>
    );
  }
}

const Authenticate = props => {
  return props.validated ? (
    <div>{props.children}</div>
  ) : (
      <Login />
  );
};

export default App;
