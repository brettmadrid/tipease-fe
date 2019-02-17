import React, { Component } from "react";

import '../App.css'

class WorkerDashboard extends Component {
  state = {
    id: 1,
    photo: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
    fname: "Jesse",
    lname: "Anderson",
    jobTitle: "Back End Developer",
    tagline: "NodeJS for life!",
    totalTips: 120
  };

  componentDidMount() {
    /* This is where an axios.get would be done to get worker by id */
  }

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
