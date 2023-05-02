import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <div className='p-5 bg-dark text-white'>
     <Container fluid>
      <Row>
        <Col md>
          <h3>Services</h3>
          <p>Branding <br /> Design <br /> Marketing <br /> Advertisement</p>
        </Col>
        <Col md>
          <h3>Company</h3>
          <p>About us <br /> Contact <br /> Jobs <br /> Press kit</p>
        </Col>
        <Col md>
          <h3>Legal</h3>
          <p>Terms of use <br /> Privacy policy <br /> Cookie policy</p>
        </Col>
        <Col md>
          <h3>Newsletter</h3>
          <form>
            <div>
              <label htmlFor="email">Enter Your Email address</label>
              <InputGroup className="mt-3">
                <Form.Control
                  placeholder="Username@site.com"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="primary">Subscribe</Button>
              </InputGroup>
            </div>
          </form>
        </Col>
      </Row>
      <Row className='text-center mt-5'>
        <Col md>Copyright © 2023 - All right reserved</Col>
      </Row>
    </Container>
    </div>
  );
};

export default Footer;