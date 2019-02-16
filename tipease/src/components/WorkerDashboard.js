import React, { Component } from "react";

class WorkerDashboard extends Component {
  state = {
    photo: "https://images.pexels.com/photos/684387/pexels-photo-684387.jpeg?cs=srgb&dl=achievement-adult-agent-684387.jpg&fm=jpg",
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
      <div>
        <img src={this.state.photo} alt="a pic"></img>
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
