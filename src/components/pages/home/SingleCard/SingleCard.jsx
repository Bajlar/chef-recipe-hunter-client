import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const SingleCard = () => {
  // const [details, setDetails] = useState([]);
  const data = useLoaderData();
  // console.log(data);

  return (
    <Container className='my-5'>
      <Card>
        <Card.Img variant="top" src={data[0].chefPicture} />
        <Card.Body>
          <Card.Title>{data[0].chefName}</Card.Title>
          <Card.Text>
            {data[0].description}
            <div className="mt-4">
              <p>Likes: {data[0].likes}</p>
              <p>Number of Recipes: {data[0].numbersOfRecipes}</p>
              <p>Experience: {data[0].yearsOfExperience}</p>
              </div>
          </Card.Text>
          <Button variant="dark">Favorite button</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleCard;