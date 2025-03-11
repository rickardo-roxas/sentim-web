import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/Sentim Logo.png'

function Home() {
  return (
    <Container fluid className="home-container">
      <section className="hero text-center">
        <img src={logo} alt="Hero" className="img-fluid logo-img" />        
        <h1 className="hero-title">Home</h1>
      </section>

      {/* Features Section */}
      <Row className="justify-content-center mt-4">
        {/* First Two Cards Side by Side */}
        <Col md={5}>
          <Card className="before-midnight feature-card">
            <Card.Body>
              <Card.Title>Before Midnight</Card.Title>
              <Card.Text>Date Ideas Generator</Card.Text>
              <Link to="/before-midnight" className="btn btn-primary">Start</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card className="always-in-my-head feature-card">
            <Card.Body>
              <Card.Title>Always In My Head</Card.Title>
              <Card.Text>This or That Game</Card.Text>
              <Button variant="success">Start</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Third Card Below the First Two */}
      <Row className="justify-content-center mt-3">
        <Col md={6}>
          <Card className="feature-card text-center">
            <Card.Body>
              <Card.Title>Picture of the Day</Card.Title>
              <Card.Text>Share special moments with your partner.</Card.Text>
              <Button variant="warning">View</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Footer */}
      <footer className="footer text-center mt-5">
        <p>More Features Coming <strong>July 11, 2025</strong></p>
      </footer>
    </Container>
  );
}

export default Home;
