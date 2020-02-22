import React from 'react';
import Beer from './Beer';
import image1 from '../assets/images/image1.jpg';

var BeerListStyling=
  {
    fontFamily: 'didot',
    paddingLeft: '34px',
    paddingRight: '34px',
  }

var masterBeerList = [
  {
    name: 'Mango Sour',
    brand: 'Seattle Beer Company',
    location:'Seattle, Washington',
    alcoholContent: '5%',
    price: 5,
    img: {image1}
  },
  {
    name: 'Pineapple Sour',
    brand: 'PNW Beer Co.',
    location:'Bend, Oregon',
    alcoholContent: '6.5%',
    price: 6,
    img: {image1}
  },
  {
    name: 'The best dang beer ever!',
    brand: 'I Love Donkeys',
    location:'Shi Shi Beach, Washington',
    alcoholContent: '8%',
    price: 8,
    img: {image1}
  },
  {
    name: 'Nordic Berry Cider',
    brand: 'Kopparberg',
    location:'Sweden',
    alcoholContent: '4%',
    price: 8,
    img: {image1}
  },
  {
    name: 'Blackberry Cider',
    brand: 'Pescadero Cidery',
    location:'Pescadero, California',
    alcoholContent: '6%',
    price: 9,
    img: {image1}
  }
];


function BeerList() {
  return (

      <div style={BeerListStyling}>
        <center>
        {masterBeerList.map((beer, index) =>
          <Beer 
            name={beer.name}
            brand={beer.brand}
            location={beer.location}
            alcoholContent={beer.alcoholContent} 
            price={beer.price}
            img={beer.img}
            key={index} />
        )}
        </center>
       </div>
  );
}

export default BeerList;