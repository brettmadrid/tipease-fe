import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Input, Collapse } from "reactstrap";
import Axios from "axios";

import "../App.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      password2: "",
      passwordMessage: "",
      accountType: "",
      isWorker: false,
      fname: "",
      lname: "",
      jobTitle: "",
      tagline: "",
      isRegistered: false,
      collapseCustomer: false,
      collapseWorker: false,
      invalidInput: false
    };
  }

  toggleCustomer = () => {
    // this.setState({ collapseCustomer: !this.state.collapseCustomer });
    this.setState({
      collapseCustomer: !this.state.collapseCustomer,
      accountType: "customer",
      isWorker: false
    });
  };

  toggleWorker = () => {
    //this.setState({ collapseWorker: !this.state.collapseWorker });
    this.setState({
      collapseWorker: !this.state.collapseWorker,
      accountType: "worker"
      //isWorker: true
    });
  };

  submitHandler = e => {
    e.preventDefault();

    const {
      username,
      password,
      password2,
      passwordMessage,
      accountType,
      fname,
      lname,
      jobTitle,
      tagline,
      invalidInput,
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

    if (password !== password2) {
      this.setState({
        passwordMessage: "Passwords do not match!",
        invalidInput: true
      })
    } else {
      this.setState({
        passwordMessage: "Passwords match!",
        invalidInput: false
      });
    }

    

    if (!invalidInput) {
      console.log("right after if: ", invalidInput, passwordMessage)
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
    }
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
                {this.state.passwordMessage ? <span>{this.state.passwordMessage}</span> : null}<br />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password2"
                  id="password2"
                  placeholder="repeat password"
                  value={this.state.password2}
                  onChange={this.handleInput}
                />
                {this.state.passwordMessage ? <span>{this.state.passwordMessage}</span> : null}<br />
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
                  type="password"
                  name="password2"
                  id="password2"
                  placeholder="repeat password"
                  value={this.state.password2}
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
        </div>
      );
    }
  }
}

export default Register;
