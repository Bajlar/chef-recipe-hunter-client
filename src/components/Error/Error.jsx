import React from 'react';
import { Button, Container } from 'react-bootstrap';
import error from '../../assets/images/error.jpg';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Container className='text-center mt-4'>
      <h2 className='text-danger mb-4'>This is a error page</h2>
      <img src={error} alt="" />
      <div className="d-block mt-4">
        <Link to='/'><Button variant="dark">Go To Homepage</Button></Link>
      </div>
    </Container>
  );
};

export default Error;