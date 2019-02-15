import React, { Component } from 'react';
import LoginPage from './LoginPage';
import Home from './Home'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      role: ""
    }
  }

  updateInput = (key, value) => {
    this.setState({ [key]: value })
  }

  submitHandler = e => {
    e.preventDefault();
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <div>
        <LoginPage
          username={this.state.username}
          password={this.state.password}
          updateInput={this.updateInput}
          submitHandler={this.submitHandler}
        />
      </div>
    )
  }
}

export default Login;