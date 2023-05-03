import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DetailsCard = ({chef}) => {
  // console.log(chef);
  const {id, chefName, chefPicture, yearsOfExperience, numbersOfRecipes, likes, description} = chef;
  return (
    <Container>
      <Col className='mt-3'>
        <Card>
          <Card.Img variant="top" src={chefPicture} />
          <Card.Body>
            <Card.Title>{chefName}</Card.Title>
            <Card.Text>
              <p>Experience: <span className='text-primary'>{yearsOfExperience}</span>
              </p>
              <p>Numbers Of Recipes: <span className='text-primary'>{numbersOfRecipes}</span>
              </p>
              <p>Total Likes: <span className='text-primary'>{likes}</span></p>
            </Card.Text>
            <Link to={`/chef/${chef.id}`}>
              <Button variant="dark">View Recipes Button</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default DetailsCard;