import React from "react";
import { Redirect, Link } from 'react-router-dom';
import Axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "../App.css";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
    accountType: "",
    isLoggedIn: false
  };

  submitHandler = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      accountType: this.state.accountType
    }

    Axios.post("https://tipease-server.herokuapp.com/api/login", user)
      .then(response => {
        localStorage.setItem('jwt', response.data.token)
        this.setState({ isLoggedIn: true })
        // window.location.reload();
      })
      .catch(error => {
        console.log("Axios Error Msg: ", error);
      });
    // store username on localStorage so user doesn't have to re-log back in
    //localStorage.setItem("user", this.state.username);
    // Next line loads our Home component set up by Router as "/"
  };

  handleInput = async e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    // (await this.state.accountType) === "worker"
    //   ? this.setState({ isWorker: true })
    //   : this.setState({ isWorker: false });
  };

  render() {

    if (this.state.isLoggedIn) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-container">
        <legend className="login-legend">Login</legend>
        <Form className="input-form" onSubmit={this.submitHandler}>
          <FormGroup>
            <Label for="username">username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="******"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </FormGroup>
          <Button outline type="submit">
            Submit
          </Button>
          <Link to="/register">
            <Button outline type="button" >
              Register
            </Button>
          </Link>
        </Form>
      </div>
    );
  }
}
