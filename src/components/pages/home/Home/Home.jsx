import React from 'react';
import Banner from '../Banner/Banner';
import Favorite from '../Favorite/Favorite';
import HealthyFood from '../HealthyFood/HealthyFood';
import BannerCard from '../BannerCard/BannerCard';

const Home = () => {
  return (
    <div className='my-4'>
      <div>
        <Banner></Banner>
      </div>
      <div className="my-5">
        <BannerCard></BannerCard>
      </div>
      <div className="my-5">
        <Favorite></Favorite>
      </div>
      <div className="my-5">
        <HealthyFood></HealthyFood>
      </div>
    </div>
  );
};

export default Home;