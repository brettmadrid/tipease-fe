import React, { Component } from "react";
import Axios from 'axios';

import '../App.css'

class WorkerDashboard extends Component {
  constructor(props) {
    super(props);
  this.state = []
}

  componentDidMount() {
    const id = this.props.workerID;
    /* This is where an axios.get would be done to get worker by id */
    Axios.get(`https://tipease-server.herokuapp.com/api/worker/${id}`)
      .then(response =>
        this.setState(
          response.data[0]
        )
      )
      .catch(err => console.log(err));
  }

  updateAccount = user => {
    // Axios.put(`http://localhost:5000/friends/${this.state.id}`, user)
    //   .then(response => {
    //     this.refresh();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  render() {
    const { photo, fname, lname, jobTitle, tagline, totalTips } = this.state;
    return (
      <div className="worker-dashboard">
        <img src={photo} alt="a pic"></img>
        <h2>
          {fname} {lname}
        </h2>
        <h3>{jobTitle}</h3>
        <p>{tagline}</p>
        <p>Total Tips Recieved: ${totalTips}</p>
      </div>
    );
  }
}

export default WorkerDashboard;
