// src/App.js
import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import userImage from './assets/user.jpg'; // Import the image

const App = () => {
  const userName = "omar"; // Remplacez par votre prénom ou laissez vide
  const greeting = userName ? `Bonjour, ${userName}` : 'Bonjour !';

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">  
        <Col md={6}>
          <Card>
            <Card.Body>
               <Image />
              <Card.Title><Name /></Card.Title>
              <Card.Text>
                <Price />
                <Description />
              </Card.Text>
            </Card.Body>
            
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          <h5>{greeting}</h5>
          {userName && <img src={userImage} alt="Product"  />}
        </Col>
      </Row>
    </Container>
  );
};

export default App;






