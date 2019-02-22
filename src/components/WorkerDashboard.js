import React, { Component } from "react";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import { Form, Input, Button, FormGroup, Label } from "reactstrap";

import "../App.css";

class WorkerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      photo: "",
      fname: "",
      lname: "",
      jobTitle: "",
      tagline: "",
      totalTips: null
    };
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    const token = localStorage.getItem("jwt");
    const options = {
      headers: {
        Authorization: token
      }
    };
    const { id } = jwt_decode(token);
    /* This is where an axios.get would be done to get worker by id */
    Axios.get(`https://tipease-server.herokuapp.com/api/worker/${id}`, options)
      .then(response => {
        const {
          id,
          photo,
          fname,
          lname,
          jobTitle,
          tagline,
          totalTips
        } = response.data[0];
        this.setState({
          id,
          photo,
          fname,
          lname,
          jobTitle,
          tagline,
          totalTips
        });
      })
      .catch(err => console.log("Dashboard error:", err));
  };

  deleteAccount = id => {
    Axios.delete(`https://tipease-server.herokuapp.com/api/worker/delete/${id}`)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  updateAccount = e => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
    const options = {
      headers: {
        Authorization: token
      }
    };
    const {
      id,
      photo,
      fname,
      lname,
      jobTitle,
      tagline,
      totalTips
    } = this.state;
    const user = {
      id,
      photo,
      fname,
      lname,
      jobTitle,
      tagline,
      totalTips
    };
    console.log(id, user);
    Axios.put(
      `https://tipease-server.herokuapp.com/api/worker/update/${id}`,
      user,
      options
    )
      .then(response => {
        this.refresh();
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleInput = async e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  fileSelectedHandler = async e => {
    e.preventDefault();
    console.log(e.target.files[0]);
  };

  render() {
    const { photo, fname, lname, jobTitle, tagline, totalTips } = this.state;
    return (
      <div className="worker-dashboard">
        <h3>Service Worker Update Form</h3>
        <img src={photo} alt="a pic" />
        <Form className="worker-dashboard-form" onSubmit={this.updateAccount}>
          <FormGroup>
            <Label for="fname-input">First Name</Label>
            <Input
              type="text"
              id="fname-input"
              value={fname}
              name="fname"
              placeholder="First Name"
              onChange={this.handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lname-input">Last Name</Label>
            <Input
              type="text"
              id="lname-input"
              value={lname}
              name="lname"
              placeholder="Last Name"
              onChange={this.handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="jobTitle-input">Job Title</Label>
            <Input
              type="text"
              id="jobTitle-input"
              value={jobTitle}
              name="jobTitle"
              placeholder="Job Title"
              onChange={this.handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="tagline-input">Tagline</Label>
            <Input
              type="text"
              id="tagline-input"
              value={tagline}
              name="tagline"
              placeholder="Tagline"
              onChange={this.handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="photo-input">Upload Image file</Label>
            <Input type="file" onChange={this.fileSelectedHandler} />
          </FormGroup>
          <h3>Total Tips Recieved: ${totalTips}</h3>
          <div className="worker-btns">
            <Button outline type="submit">
              Update Information
            </Button>
            <Button
              outline
              type="button"
              onClick={() => this.deleteAccount(this.props.workerID)}
            >
              Delete Profile
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default WorkerDashboard;
