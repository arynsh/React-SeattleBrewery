import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _location = null;
  let _alcoholContent = null;
  let _pintsAvailable = null;

    function handleNewKegFormSubmission(event) {
      event.preventDefault();
      props.onNewKegCreation({name: _name.value, location: _location.value, brand: _brand.value, price: _price.value, _alcoholContent: _alcoholContent.value, _pintsAvailable: _pintsAvailable.value});
      _name.value = ''
      _brand.value = ''
      _price.value = ''
      _location.value = ''
      _alcoholContent.value = ''
      _pintsAvailable.value = ''
    }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='brand'
          ref={(input) => {_brand = input;}}/>
         <input
          type='text'
          id='alcoholContent'
          placeholder='alcohol content'
          ref={(input) => {_alcoholContent = input;}}/>
        <input
          type='number'
          id='price'
          placeholder='price / pint'
          ref={(textarea) => {_price = textarea;}}/>
         <input
          type='number'
          id='pintsAvailable'
          placeholder='pints available'
          ref={(textarea) => {_pintsAvailable = textarea;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;