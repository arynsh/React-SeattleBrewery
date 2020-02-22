import React from 'react';
import PropTypes from 'prop-types';
import image1 from '../assets/images/image1.jpg';

function Keg(props) {
  return (
    <div>
      {/* <style global jsx>{`
          div {
            background-color: red;
          }
        `}</style> */}
      <h3>{props.name} - {props.alcoholContent}</h3>
      <p><em>{props.brand}</em></p>
      <p>{props.location}</p>
      <p>${props.price} /pint</p>
      <img src={props.img}></img>
      <hr />
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pintsAvailable: PropTypes.number,
  alcoholContent: PropTypes.string,
  price: PropTypes.number
};

export default Keg; 