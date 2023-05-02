import React from 'react';
import { Container } from 'react-bootstrap';
import error from '../../assets/images/error.jpg';

const Error = () => {
  return (
    <Container className='text-center mt-4'>
      <h2 className='text-danger mb-4'>This is a error page</h2>
      <img src={error} alt="" />
    </Container>
  );
};

export default Error;