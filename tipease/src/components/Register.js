import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import WorkerInfo from "./WorkerInfo";
// import { Redirect } from "react-router";
// import axios from "axios";

class Register extends Component {
  state = {
    username: "",
    password: "",
    accountType: "",
    isWorker: false
  };

  render() {
    if (!this.state.isWorker) {
      return (
        <div>
          <legend>Registration</legend>
          <Form onSubmit={this.handleSubmit}>
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
            <FormGroup tag="fieldset">
              <legend>Radio Buttons</legend>
              <FormGroup check>
                <Label check>
                  <input
                    type="radio"
                    name="accountType"
                    value="worker"
                    checked={this.state.accountType === "worker"}
                    onChange={this.handleOptionChange}
                  />{" "}
                  Worker
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <input
                    type="radio"
                    name="accountType"
                    value="customer"
                    checked={this.state.accountType === "customer"}
                    onChange={this.handleOptionChange}
                  />{" "}
                  Customer
                </Label>
              </FormGroup>
            </FormGroup>
            {/* <label>
              Account Type:
              <select
                value={this.state.accountType}
                name="accountType"
                onChange={this.handleInput}
              >
                <option value="">Select One</option>
                <option value="worker">Worker</option>
                <option value="customer">Customer</option>
              </select>
            </label> */}
            <Button>Register</Button>
          </Form>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Registration</h2>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleInput}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleInput}
            />
            <br />
            <label>
              Account Type:
              <select
                value={this.state.accountType}
                name="accountType"
                onChange={this.handleInput}
              >
                <option value="" />
                <option value="worker">Worker</option>
                <option value="customer">Customer</option>
              </select>
            </label>
            <WorkerInfo />
            <button>Register</button>
          </Form>
        </div>
      );
    }
  }

  handleInput = async e => {
    e.preventDefault();
    await this.setState({ [e.target.name]: e.target.value });
    (await this.state.accountType) === "worker"
      ? this.setState({ isWorker: true })
      : this.setState({ isWorker: false });
  };

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      department: this.state.department
    };
    console.log(user);
  };
}

export default Register;
