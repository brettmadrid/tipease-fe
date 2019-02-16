import React, { Component } from "react";

class CustomerHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: this.props.username,
      workers: [
        {
          photo: "",
          fname: "Jesse",
          lname: "Anderson",
          jobTitle: "Back End Developer"
        },
        {
          photo: "",
          fname: "Brett",
          lname: "Madrid",
          jobTitle: "Front End Developer"
        },
        {
          photo: "",
          fname: "Brandon",
          lname: "Desselle",
          jobTitle: "UI Developer"
        },
        {
          photo: "",
          fname: "Edward",
          lname: "Gonzalez",
          jobTitle: "Scrum Master"
        }
      ]
    };
  }

  componentDidMount() {
    /* This is where an axios.get would be done to get all of the workers from the database, then set your this.state.workers to the response.data */
  }

  render() {
    return (
      <>
        <p>Welcome, {this.state.customer}. Who would you like to tip?</p>
        <hr />
        <div>
          {this.state.workers.map(worker => {
            return (
              <>
                <h2>
                  {worker.fname} {worker.lname}
                </h2>
                <h3>{worker.jobTitle}</h3>
                <hr />
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default CustomerHomePage;
