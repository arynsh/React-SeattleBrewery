import React from 'react';
import PropTypes from 'prop-types';


function Keg(props) {
  return (
    <div>
      <h3>{props.name} - {props.alcoholContent}</h3>
      <p><em>{props.brand}</em></p>
      <p>{props.location}</p>
      <p>${props.price} /pint</p>
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