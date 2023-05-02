import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import first from '../../../../assets/images/chef-pic-1.png.jpg';
import second from '../../../../assets/images/chef-pic-2.png.png';
import third from '../../../../assets/images/chef-pic-3.png.jpg';
import four from '../../../../assets/images/chef-pic-4.png.jpg';
import five from '../../../../assets/images/chef-pic-5.png.jpg';
import six from '../../../../assets/images/chef-pic-6.png.jpg';

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
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
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
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
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
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
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
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;