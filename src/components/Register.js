import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Input, Collapse } from "reactstrap";
import Axios from "axios";

import "../App.css";
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
    isRegistered: false,
    collapseCustomer: false,
    collapseWorker: false
  };

  toggleCustomer = () => {
    this.setState({ collapseCustomer: !this.state.collapseCustomer });
  };

  toggleWorker = () => {
    this.setState({ collapseWorker: !this.state.collapseWorker });
  };

  submitHandler = e => {
    e.preventDefault();
    const {
      username,
      password,
      accountType,
      fname,
      lname,
      jobTitle,
      tagline
    } = this.state;

    const user = {
      username: username,
      password: password,
      accountType: accountType,
      fname: fname,
      lname: lname,
      jobTitle: jobTitle,
      tagline: tagline
    };

    Axios.post("https://tipease-server.herokuapp.com/api/register", user)
      .then(response => {
        this.setState({ isRegistered: true });
        //this.props.history.push("/");
        // <Redirect to="/" />
      })
      .catch(error => {
        console.log("Axios Error Msg: ", error);
      });
    // store username on localStorage so user doesn't have to re-log back in
    // Next line loads our Home component set up by Router as "/"
    // Next line loads our Home component set up by Router as "/"
    //this.props.history.push("/");
  };

  handleInput = async e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
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

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const user = {
  //     username: this.state.username,
  //     password: this.state.password,
  //     isWorker: this.state.isWorker
  //   };
  //   console.log(user);
  // };

  render() {
    if (this.state.isRegistered) {
      return <Redirect to="/login" />;
    }

    if (!this.state.isWorker) {
      return (
        <div className="registration-container">
          <h3 className="registration-legend">Registration</h3>
          <div className="register-buttons">
            <Button
              outline
              color="primary"
              onClick={this.toggleCustomer}
              style={{ marginBottom: "1rem" }}
            >
              Customer
            </Button>
            <Button
              outline
              color="success"
              onClick={this.toggleWorker}
              style={{ marginBottom: "1rem" }}
            >
              Worker
            </Button>
          </div>
          <Collapse isOpen={this.state.collapseCustomer}>
            <Form className="input-form" onSubmit={this.submitHandler}>
              <FormGroup>
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
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleInput}
                />
              </FormGroup>
              <Button outline type="submit">
                Register
              </Button>
            </Form>
          </Collapse>
          <Collapse isOpen={this.state.collapseWorker}>
            <Form className="input-form" onSubmit={this.submitHandler}>
              <FormGroup>
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
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleInput}
                />
              </FormGroup>
              <FormGroup>
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
              <Button outline type="submit">
                Register
              </Button>
            </Form>
          </Collapse>
          {/* <FormGroup tag="fieldset">
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
            </FormGroup> */}
          {/* </Form>
        </div>
      );
    } else {
      return (
        <div className="registration-container">
          <legend className="registration-legend">Registration</legend>
          <Form className="input-form" onSubmit={this.submitHandler}>
            <FormGroup>
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
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
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
                <h6 className="additional-info">
                  Please fill out additional information
                </h6> */}
        </div>
      );
    }
  }
}

export default Register;
