import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DetailsCard from '../DetailsCard/DetailsCard';

const BannerCard = () => {
  const [chefs, setChefs] = useState([]);

  useEffect( () => {
    fetch('http://localhost:5000/chefs')
      .then(res => res.json())
      .then(data => setChefs(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <Container>
      <h2 className='text-center'>All Chefs Details</h2>
      {
        chefs.map(chef => <DetailsCard
          key={chef.id}
          chef={chef}
        ></DetailsCard>)
      }
    </Container>
  );
};

export default BannerCard;