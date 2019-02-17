import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import '../App.css';
// import { Redirect } from "react-router";
// import axios from "axios";

class Register extends Component {
  state = {
    username: "",
    password: "",
    accountType: "",
    isWorker: false,
    fname: "",
    lname: "",
    jobTitle: "",
    tagline: "",
    isRegistered: false
  };

  submitHandler = e => {
    // Might need to send this object to the server
    const user = {
      username: this.state.username,
      password: this.state.password,
      isWorker: this.state.isWorker
    };
    // store username on localStorage so user doesn't have to re-log back in
    localStorage.setItem('user', this.state.username);
    this.setState({isRegistered: true});
    // Next line loads our Home component set up by Router as "/"
    this.props.history.push("/");
  };

  render() {
    if (!this.state.isWorker) {
      return (
        <div className="registration-container">
          <legend className="registration-legend">Registration</legend>
          <Form className="input-form">
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
              <h5 className="account-type">Account Type</h5>
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
            <Button outline onClick={e => this.submitHandler()}>Register</Button>
          </Form>
        </div>
      );
    } else {
      return (
        <div className="registration-container">
          <legend className="registration-legend">Registration</legend>
          <Form className="input-form">
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
              <h5 className="account-type">Account Type</h5>
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
              <FormGroup>
                <h6 className="additional-info">Please fill out additional information</h6>
                <Input
                  type="text"
                  name="fname"
                  placeholder="first name"
                  value={this.state.fname}
                  onChange={this.handleInput}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="lname"
                  placeholder="last name"
                  value={this.state.lname}
                  onChange={this.handleInput}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="jobTitle"
                  placeholder="job title"
                  value={this.state.jobTitle}
                  onChange={this.handleInput}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="tagline"
                  placeholder="tagline"
                  value={this.state.tagline}
                  onChange={this.handleInput}
                />
              </FormGroup>
            </FormGroup>
            <Button outline onClick={e => this.submitHandler()}>Register</Button>
          </Form>
        </div>
      );
    }
  }

  handleInput = async e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    // (await this.state.accountType) === "worker"
    //   ? this.setState({ isWorker: true })
    //   : this.setState({ isWorker: false });
  };

  handleOptionChange = e => {
    const accntType = e.target.value;
    if (accntType === "worker") {
      this.setState({
        accountType: accntType,
        isWorker: true
      });
    } else {
      this.setState({
        accountType: accntType,
        isWorker: false
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      isWorker: this.state.isWorker
    };
    console.log(user);
  };
}

export default Register;
