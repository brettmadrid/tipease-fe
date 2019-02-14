import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">TipEase</h1>
        <p className="lead">Your perfect solution to ensure that you get all your tips....all the time by allowing your customer blah blah blah blah blah blah blah</p>
        <hr className="my-2" />
        <p>The easiest way to make sure that your favorite service worker receives the entire tip that you leave them.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;