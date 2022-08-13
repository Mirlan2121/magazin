import React from 'react';
import Cards from '../cards/Cards';
import Carousel_item from '../carousel/Carousel_item';

const Content = () => {
    return (
        <div className="container">
            <Carousel_item/>

            <Cards/>
        </div>
    );
};

export default Content;