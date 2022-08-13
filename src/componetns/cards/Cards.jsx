import React from 'react';
import Card from './CardItem'
const Cards = () => {

    const animals = [
        {
            name: 'kotik',
            description : `Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
            image: 'https://cdn.vox-cdn.com/thumbor/pxSnpJCZtA3-2gzfVsPZTrZyr-I=/0x0:7808x5506/1200x800/filters:focal(3246x2374:4494x3622)/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
            price: 500,
            id:1
        },
        {
            name: 'dogs',
            description : `Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
            image: 'https://cdn.vox-cdn.com/thumbor/pxSnpJCZtA3-2gzfVsPZTrZyr-I=/0x0:7808x5506/1200x800/filters:focal(3246x2374:4494x3622)/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
            price: 500,
            id:2
        },
        {
            name: 'David',
            description : `Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
            image: 'https://cdn.vox-cdn.com/thumbor/pxSnpJCZtA3-2gzfVsPZTrZyr-I=/0x0:7808x5506/1200x800/filters:focal(3246x2374:4494x3622)/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
            price: 1500 ,
            id:3
        }
    ]
    return (
        <div className="card">
             {
                animals.map((animale)=>{
                    return <Card item={animale} key={animale.id}/>
                })
            }
        </div>
    );
};

export default Cards;