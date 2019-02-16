import React, { Component } from "react";
class WorkerInfo extends Component {
  state = {
    fname: "",
    lname: "",
    jobTitle: "",
    tagline: "",
    isRegistered: false
  };

  render() {
    // if (this.state.isRegistered) {
    //   return <Redirect to="/signin" />;
    // }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="fname"
            placeholder="first name"
            value={this.state.fname}
            onChange={this.handleInput}
          />
          <br />
          <input
            type="text"
            name="lname"
            placeholder="last name"
            value={this.state.lname}
            onChange={this.handleInput}
          />
          <br />
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={this.state.jobTitle}
            onChange={this.handleInput}
          />
          <br />
          <input
            type="text"
            name="tagline"
            placeholder="tagline"
            value={this.state.tagline}
            onChange={this.handleInput}
          />
        </form>
      </div>
    );
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
}

export default WorkerInfo;
