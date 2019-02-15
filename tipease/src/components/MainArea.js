import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import WorkerCards from "./WorkerCards";

class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      worker: [
      {
        id: 1,
        photoURL: 'https://images.pexels.com/photos/684387/pexels-photo-684387.jpeg?cs=srgb&dl=achievement-adult-agent-684387.jpg&fm=jpg',
        username: 'AgentSmith',
        role: 'worker',
        fname: 'Agent',
        lname: 'Smith',
        jobTitle: 'cyber hit man',
        tagline: 'It\'s the smell!',
        totalTips: 0
      },
      {
        id: 2,
        photoURL: 'https://i.pinimg.com/originals/c2/56/6a/c2566a7498ba5b9e59e338bfb79d6b30.jpg',
        username: 'Sub Cmdr TPol',
        role: 'worker',
        fname: 'T',
        lname: 'Pol',
        jobTitle: 'Vulcan Science Officer',
        tagline: 'It is only logical',
        totalTips: 500
      },
      {
        id: 3,
        photoURL: 'http://ethnicelebs.com/wp-content/uploads/2015/05/Kim-Thayil.jpg',
        username: 'Kim Thayil',
        role: 'worker',
        fname: 'Kim',
        lname: 'Thayil',
        jobTitle: 'Lead Guitarist, Soundgarden',
        tagline: 'Knight\'s of the Sound Table',
        totalTips: 50
      },
      {
        id: 4,
        photoURL: 'https://cdn.vox-cdn.com/thumbor/klyANmgQ72jpj-Q-tsR0d2HmkRg=/0x0:2522x3456/1200x800/filters:focal(1060x1527:1462x1929)/cdn.vox-cdn.com/uploads/chorus_image/image/63034645/usa_today_12109396.0.jpg',
        username: 'JulianEdelman',
        role: 'customer',
        fname: 'Julian',
        lname: 'Edelman',
        jobTitle: 'Wide Receiver, The Patriots',
        tagline: 'Tom, I\'m open!',
        totalTips: 0
      },
      ],
      people: [
        {
          id: 3,
          name: "Julian Edelman",
          company: "The Patriots, Inc.",
          description: "Cool dude.  Nice mangy beard!",
          image: "https://cdn.vox-cdn.com/thumbor/klyANmgQ72jpj-Q-tsR0d2HmkRg=/0x0:2522x3456/1200x800/filters:focal(1060x1527:1462x1929)/cdn.vox-cdn.com/uploads/chorus_image/image/63034645/usa_today_12109396.0.jpg"
        }
      ]
    };
  }

  render() {
    // let WorkerCards = this.state.people.map(person => {
    //   return (
    //     <Col sm="4">
    //       <WorkerCards person={person}/>
    //     </Col>
    //   );
    // });
    return (
      <Container fluid>
        <Row>
          {this.state.worker.map(worker => {
            return (
              <Col key={worker.id} sm="3">
                <WorkerCards key={worker.id} worker={worker} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default MainArea;
