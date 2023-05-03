import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ChefInfo = () => {
  const {id} = useParams();

  return (
    <Container className='my-5'>
    </Container>
  );
};

export default ChefInfo;

