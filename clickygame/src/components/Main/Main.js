import React, { Component } from "react";
import Container from '../Container';
import Row from "../Row";
import Col from "../Col";
import Pictures from "../Pictures";
import "./Main.css";
import gameOfThrones from "../../images.json";

class Main extends Component {
    state = {
        gameOfThrones
    };

    render() {
        return (
            <div className="main">
                <Container>
                    <Row>
                        <Col size="md-12">
                            <h1>Click on an image to begin!</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-8">
                            {this.state.gameOfThrones.map(gOfThrones => (
                                <Pictures key={gOfThrones.id}>
                                    id={gOfThrones.id}
                                    key={gOfThrones.id}
                                    image={gOfThrones.image}
                                </Pictures>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Main;