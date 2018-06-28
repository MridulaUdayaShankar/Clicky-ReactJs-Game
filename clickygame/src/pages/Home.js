import React, { Component } from "react";
import Container from '../components/Container';
import Row from "../components/Row";
import Col from "../components/Col";
import Main from "../components/Main";
import Card from "../components/Card";
import "./Home.css";
import images from "../images.json";

export class Home extends Component {

  // Setting this.state.friends to the friends json array
  state = {
    images,
    score: 0,
    high_score: 0,
    old_top_score: 0,
    message: ""
  };

  selectCharacter = id => {
    let message = this.state.message;
    let score = this.state.score;
    let high_score = this.state.high_score;
    let images = this.state.images.filter(images => images.id === id)[0];

    if (images.selected === false || images.selected === undefined) {

      message = "";
      score += 1;


      if (high_score < score) {
        high_score = score;
      }

      images.selected = true;

      this.setState({ score, high_score, message, images: this.shuffleArray(this.state.images) });

    } else {
      console.log(images.selected);
      this.endGame();

    }

  };

  shuffleArray = arr => {

    for (let k = arr.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * (k + 1));
      [arr[k], arr[j]] = [arr[j], arr[k]];
    }
    return arr;

  }

  endGame = () => {
    let high_score = this.state.high_score;
    let old_top_score = this.state.old_top_score;
    let score = this.state.score;
    let message = this.state.message;

    if (old_top_score < high_score) {
      old_top_score = high_score;
      message = `Congrats! new high score: ${old_top_score}`
    } else {
      message = "Game over! Try again though!"
    }

    score = 0;
    this.state.images.map((images) => {
      return images.selected = false;

    })
    this.setState({ score, high_score, old_top_score, message })
  }

  render() {
    return (
      <Container>
        <Row score={this.state.score} high_score={this.state.high_score} message={this.state.message}>
          <Col size="md-8">
            <Main>
              {this.state.images.map((images, index) => (
                <Card
                  id={images.id}
                  selectCharacter={this.selectCharacter}
                  image={images.image}
                  key={index}
                  index={index}
                />
              ))
              }
            </Main>
          </Col>
        </Row>
      </Container>

    );
  }
}