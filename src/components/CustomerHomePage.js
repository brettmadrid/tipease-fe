import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  Button,
  Input,
  Form,
  FormText,
  FormGroup
} from "reactstrap";
import CurrencyInput from "react-currency-input";
import Modal from "react-responsive-modal";

import "../App.css";

class CustomerHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: [
        {
          id: 1,
          photo:
            "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
          fname: "Jesse",
          lname: "Anderson",
          jobTitle: "Back End Developer"
        },
        {
          id: 2,
          photo:
            "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
          fname: "Brett",
          lname: "Madrid",
          jobTitle: "Front End Developer"
        },
        {
          id: 3,
          photo:
            "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
          fname: "Brandon",
          lname: "Desselle",
          jobTitle: "UI Developer"
        },
        {
          id: 4,
          photo:
            "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
          fname: "Edward",
          lname: "Gonzalez",
          jobTitle: "Scrum Master"
        }
      ],
      open: false,
      amount: "0.00"
    };
  }

  componentDidMount() {
    /* This is where an axios.get would be done to get all of the workers from the database, then set your this.state.workers to the response.data */
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleChange(event, maskedvalue, floatvalue) {
    this.setState({ amount: maskedvalue });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleInput = async e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const amount = this.state.amount;
    // Update server with amount
    //  close modal
  };

  render() {
    const { open } = this.state;
    return (
      <>
        <legend className="welcome-tip">
          Welcome, {this.props.username}. Who would you like to tip?
        </legend>
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
                  <CardSubtitle>
                    {worker.fname} {worker.lname}
                  </CardSubtitle>
                  <CardText>{worker.jobTitle}</CardText>
                  <Button color="danger" onClick={this.onOpenModal}>
                    Tip
                  </Button>
                </CardBody>
              </Card>
            );
          })}
          <div className="modal-container">
            <Modal
              className="modal"
              open={open}
              onClose={this.onCloseModal}
              center
            >
              <Form onSubmit={this.submitHandler}>
              <FormText className="tip-amount-text">Enter Tip Amount</FormText>
                <FormGroup>
                  <Input
                    className="tip-input-field"
                    bsSize="sm"
                    type="currency"
                    name="amount"
                    value={this.state.amount}
                    onChange={this.handleInput}
                  />
                  <Button className="tip-button" type="submit">Process</Button>
                </FormGroup>
              </Form>
            </Modal>
          </div>
        </div>
      </>
    );
  }
}

export default CustomerHomePage;
