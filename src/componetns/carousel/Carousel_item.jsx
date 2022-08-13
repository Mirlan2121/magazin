import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import s from './carousel.module.css'

const Carousel_item = () => {
    return (
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className={s.slide_img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2aXbjfj4pJpV0-kijfdKzkVKX5jfHdOqew&usqp=CAU"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className={s.slide_img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2aXbjfj4pJpV0-kijfdKzkVKX5jfHdOqew&usqp=CAU"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={s.slide_img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2aXbjfj4pJpV0-kijfdKzkVKX5jfHdOqew&usqp=CAU"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Carousel_item;