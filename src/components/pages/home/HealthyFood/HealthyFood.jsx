import React from 'react';
import first from '../../../../assets/images/healthy-food-1.png.webp';
import second from '../../../../assets/images/healthy-food-2.png.webp';
import third from '../../../../assets/images/healthy-food-3.png.jpg';
import { Card, Col, Container, Row } from 'react-bootstrap';

const HealthyFood = () => {
  return (
    <Container>
      <Row>
        <h2 className='text-center mb-4'>Healthy Food</h2>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>Healthy Food</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>Healthy Food</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>Healthy Food</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HealthyFood;