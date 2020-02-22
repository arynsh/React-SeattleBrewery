import React from 'react';

function AddNewKegForm() {
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name of Beer' />
        <input
          type='text'
          id='brand'
          placeholder='Beer Brand' />
        <input
          type='number'
          id='price'
          placeholder='Price Per Pint' />
        <input
          type='text'
          id='alcoholContent'
          placeholder='Alcohol Content' />
        <button type='submit'>Add!</button>
      </form>
    </div>
  );
}

export default AddNewKegForm;

  
import React from 'react';

function NewTicketForm(){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log(_names.value);
    console.log(_location.value);
    console.log(_issue.value);
    _names.value = ''
    _location.value = ''
    _issue.value = ''
  }

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
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

export default NewTicketForm;