import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import first from '../../../../assets/images/banner-img/banner-pic1.png.webp';
import second from '../../../../assets/images/banner-img/banner-pic2.png.jpg';
import third from '../../../../assets/images/banner-img/banner-pic3.png.jpg';
import four from '../../../../assets/images/banner-img/banner-pic4.png.jpg';
import five from '../../../../assets/images/banner-img/banner-pic5.png.jpg';
import six from '../../../../assets/images/banner-img/banner-pic6.png.jpg';

const Banner = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={first}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Chef Ahmed Hossain</h3>
            <p>A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={second}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Chef Fakruddin</h3>
            <p>A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={third}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Chef Asad Latif</h3>
            <p>A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={four}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Chef Tony</h3>
            <p>A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={five}
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3>Manik Miah</h3>
            <p>A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={six}
            alt="Six slide"
          />
          <Carousel.Caption>
            <h3>Shelly Nuruzzaman</h3>
            <p>A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;