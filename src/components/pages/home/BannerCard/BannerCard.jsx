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
      <h2 className='text-center'>All Chefs Here</h2>
      <div className='row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex flex-wrap'>
        {
          chefs.map(chef => <DetailsCard
            key={chef.id}
            chef={chef}
          ></DetailsCard>)
        }
      </div>
    </Container>
  );
};

export default BannerCard;