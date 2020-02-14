import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <div>
      {/* <style global jsx>{`
          div {
            background-color: red;
          }
        `}</style> */}
      <h3>{props.name} - {props.alcoholContent}</h3>
      <p><em>{props.brand}</em></p>
      <p>${props.price}</p>
      <hr />
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string,
  price: PropTypes.number
};

export default Beer;