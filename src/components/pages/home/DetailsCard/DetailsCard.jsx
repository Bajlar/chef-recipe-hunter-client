import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const DetailsCard = ({chef}) => {
  // console.log(chef);
  const {id, chefName, chefPicture, yearsOfExperience, numbersOfRecipes, likes, description} = chef;
  return (
    <Container>
      <Card className='mt-3'>
        <Card.Img variant="top" src={chefPicture} />
        <Card.Body>
          <Card.Title>{chefName}</Card.Title>
          <Card.Text>
            <span>Experience: <span className='text-primary'>{yearsOfExperience}</span></span> <br />
            <span>Numbers Of Recipes: <span className='text-primary'>{numbersOfRecipes}</span></span> <br />
            <span>Total Likes: <span className='text-primary'>{likes}</span></span>
          </Card.Text>
          <Button variant="dark">View Recipes Button</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetailsCard;