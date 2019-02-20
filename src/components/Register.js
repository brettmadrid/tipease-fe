import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Collapse } from "reactstrap";
import Axios from "axios";

import "../App.css";

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
    this.setState({
      collapseCustomer: !this.state.collapseCustomer,
      accountType: "customer",
      isWorker: false
    });
  };

  toggleWorker = () => {
    this.setState({
      collapseWorker: !this.state.collapseWorker,
      accountType: "worker",
      isWorker: true
    });
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
      username,
      password,
      accountType,
      fname,
      lname,
      jobTitle,
      tagline
    };

    if (accountType === "customer") {
      Axios.post("https://tipease-server.herokuapp.com/api/register", {
        username,
        password,
        accountType
      })
        .then(response => {
          this.setState({ isRegistered: true });
        })
        .catch(error => {
          console.log("Axios Error Msg: ", error);
        });
    } else {
      Axios.post("https://tipease-server.herokuapp.com/api/register", user)
        .then(response => {
          this.setState({ isRegistered: true });
        })
        .catch(error => {
          console.log("Axios Error Msg: ", error);
        });
    }
  };

  render() {
    if (this.state.isRegistered) {
      return <Redirect to="/login" />;
    }

    if (!this.state.isWorker) {
      return (
        <div className="registration-container">
          <legend className="registration-legend">Registration</legend>
          <div className="register-buttons">
            <Button outline color="primary" onClick={this.toggleCustomer}>
              Customer
            </Button>
            <Button outline color="success" onClick={this.toggleWorker}>
              Worker
            </Button>
          </div>
          <Collapse isOpen={this.state.collapseCustomer} >
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
          </Form >
        </div >
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
}

export default Register;
