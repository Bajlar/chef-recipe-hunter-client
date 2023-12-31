import React from 'react';
import Header from '../components/shared/Header/Header';
import Footer from '../components/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;