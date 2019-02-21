import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
  CardSubtitle, Button } from 'reactstrap';

import '../App.css'

class CustomerHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: [
        {
          id: 1,
          photo: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
          fname: "Jesse",
          lname: "Anderson",
          jobTitle: "Back End Developer"
        },
        {
          id: 2,
          photo: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
          fname: "Brett",
          lname: "Madrid",
          jobTitle: "Front End Developer"
        },
        {
          id: 3,
          photo: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
          fname: "Brandon",
          lname: "Desselle",
          jobTitle: "UI Developer"
        },
        {
          id: 4,
          photo: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
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
        <legend className="welcome-tip">Welcome, {this.props.username}. Who would you like to tip?</legend>
        <div className="card-container">
          {this.state.workers.map(worker => {
            return (
              <Card className="card" key={worker.id}>
                <CardImg
                  key={worker.id}
                  className="card-img"
                  top
                  width="100%"
                  src={worker.photo}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle>{worker.fname} {worker.lname}</CardSubtitle>
                  <CardText>
                    {worker.jobTitle}
                  </CardText>
                  <Button>Tip</Button>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </>
    );
  }
}

export default CustomerHomePage;
