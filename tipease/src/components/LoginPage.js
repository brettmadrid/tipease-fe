import React from "react";

import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

import "../App.css";

const LoginPage = props => {
  console.log("LoginPageProps:", props);
  return (
    <Container className="login-container">
      <h2>Sign In</h2>
      <Form className="form">
        <Col>
          <FormGroup>
            <Label for="exampleUsername">Username</Label>
            <Input
              type="text"
              name="username"
              id="exampleUsername"
              placeholder="username"
              value={props.username}
              onChange={e => props.updateInput("username", e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={props.password}
                onChange={e => props.updateInput("password", e.target.value)}
              />
            </FormGroup>
          </Col>
        <Button onClick={e => props.submitHandler(e)}>Login</Button>
        <Button>Cancel</Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
