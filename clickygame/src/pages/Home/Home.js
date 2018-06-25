import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import Col from "../components/Col";

const Home = () => (
  <div>
  <Main>
    
      <Row>
        <Col size="md-12">
          <h1>Click on an image to begin!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
        <img src='./images/download.jpeg' />
        <img src='./images/download(1).jpeg' />
        <img src='./images/download(2).jpeg' />
        <img src='./images/download(3).jpeg' />
        <img src='./images/download(4).jpeg' />
        <img src='./images/download(5).jpeg' />
        <img src='./images/download(6).jpeg' />
        <img src='./images/images.jpeg' />
        <img src='./images/images(1).jpeg' />
        <img src='./images/images(2).jpeg' />
        <img src='./images/images(3).jpeg' />
        <img src='./images/images(4).jpeg' />
        </Col>
      </Row>
    
    </Main>
  </div>
);

export default Home;
