import React, { Component } from "react";
import Axios from "axios";
import { Form, Input, FormText, Button, FormGroup, Label } from "reactstrap";

import "../App.css";

class WorkerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = []
  }

  componentDidMount() {
    const id = this.props.workerID;
    /* This is where an axios.get would be done to get worker by id */
    Axios.get(`https://tipease-server.herokuapp.com/api/worker/${id}`)
      .then(response => this.setState(response.data[0]))
      .catch(err => console.log(err));
  }

  updateAccount = user => {
    
    // Axios.put(`https://tipease-server.herokuapp.com/api/worker/${id}`, user)
    //   .then(response => { 
    //     this.refresh();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  handleInput = async e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    // (await this.state.accountType) === "worker"
    //   ? this.setState({ isWorker: true })
    //   : this.setState({ isWorker: false });
  };

  fileSelectedHandler = async e => {
    e.preventDefault();
    console.log(e.target.files[0]);
  }


  render() {
    const { photo, fname, lname, jobTitle, tagline, totalTips } = this.state;
    return (
      <div className="worker-dashboard">
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
          <Button outline type="submit">Update Information</Button>
        </Form>
      </div>
    );
  }
}

export default WorkerDashboard;
