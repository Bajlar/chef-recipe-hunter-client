import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import first from '../../../../assets/images/favorite-list-1.png.jpg';
import second from '../../../../assets/images/favorite-list-2.png.jpg';
import third from '../../../../assets/images/favorite-list-3.png.jpg';
import four from '../../../../assets/images/favorite-list-4.png.jpg';
import five from '../../../../assets/images/favorite-list-5.png.jpg';

const Favorite = () => {
  return (
    <Container>
      <h2 className='text-center mb-4'>Favorite Food List</h2>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={first} />
        </Card>
        <Card>
          <Card.Img variant="top" src={second} />
        </Card>
        <Card>
          <Card.Img variant="top" src={third} />
        </Card>
        <Card>
          <Card.Img variant="top" src={four} />
        </Card>
        <Card>
          <Card.Img variant="top" src={five} />
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Favorite;