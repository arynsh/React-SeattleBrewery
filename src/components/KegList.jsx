import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import image1 from '../assets/images/image1.jpg';

var KegListStyling=
  {
    fontFamily: 'didot',
    paddingLeft: '34px',
    paddingRight: '34px',
  }

function KegList(props) {
  return (
      <div style={KegListStyling}>
        <center>
        {props.kegList.map((keg, index) =>
          <Keg 
            name={keg.name}
            brand={keg.brand}
            location={keg.location}
            alcoholContent={keg.alcoholContent} 
            pintsAvailable={keg.pintsAvailable} 
            price={keg.price}
            img={keg.img}
            key={index} />
        )}
        </center>
       </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;



// var masterKegList = [
//   {
//     name: 'Mango Sour',
//     brand: 'Seattle Keg Company',
//     location:'Seattle, Washington',
//     alcoholContent: '5%',
//     price: 5,
//     img: {image1}
//   },
//   {
//     name: 'Pineapple Sour',
//     brand: 'PNW Keg Co.',
//     location:'Bend, Oregon',
//     alcoholContent: '6.5%',
//     price: 6,
//     img: {image1}
//   },
//   {
//     name: 'The best dang Keg ever!',
//     brand: 'I Love Donkeys',
//     location:'Shi Shi Beach, Washington',
//     alcoholContent: '8%',
//     price: 8,
//     img: {image1}
//   },
//   {
//     name: 'Nordic Berry Cider',
//     brand: 'Kopparberg',
//     location:'Sweden',
//     alcoholContent: '4%',
//     price: 8,
//     img: {image1}
//   },
//   {
//     name: 'Blackberry Cider',
//     brand: 'Pescadero Cidery',
//     location:'Pescadero, California',
//     alcoholContent: '6%',
//     price: 9,
//     img: {image1}
//   }
// ];