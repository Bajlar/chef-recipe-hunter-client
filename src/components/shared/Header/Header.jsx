import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#" className='fw-bold'>Food Zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <div className="d-flex gap-4">
                <Link to='/' className='text-decoration-none fw-medium'>Home</Link>
                <Link to='/blog' className='text-decoration-none fw-medium'>Blog</Link>
                <Link to='/login' className='text-decoration-none fw-medium'>Login</Link>
                <Link to='/register' className='text-decoration-none fw-medium'>SignUp</Link>
              </div>
            </Nav>
            <Form className="d-flex align-items-center">
              <Nav.Link href="#action2"><FaUser style={{fontSize: '2rem'}}></FaUser></Nav.Link>
              <Button variant="btn btn-dark" className='ms-4'>Login</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;