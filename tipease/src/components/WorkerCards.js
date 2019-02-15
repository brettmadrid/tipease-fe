import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class WorderCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src={this.props.worker.photoURL}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.worker.username}</CardTitle>
            <CardSubtitle>{this.props.worker.jobTitle}</CardSubtitle>
            {/* <CardText>
               {this.props.worker.description}
            </CardText> */}
            <Button outline color="secondary" size="sm">Send tip</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default WorderCards;
