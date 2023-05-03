import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer/Footer';

const DetailsLayout = () => {
  return (
    <Container>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Container>
  );
};

export default DetailsLayout;