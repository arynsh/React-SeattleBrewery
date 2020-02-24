import React from 'react';
import PropTypes from 'prop-types';


class Keg extends React.Component { 
  constructor(props){ 
    super(props);
    this.state = {
      pints: 124
    };
    
    this.decreasePint = this.decreasePint.bind(this);
  }

  decreasePint(){
    let newPints = this.state.pints -1;
    this.setState({pints: newPints});
  }

  render(){

    var buttonStyle = {
    backgroundColor: 'pink',
    color: 'black',
    padding: '8px'
   }
    return (
      <div>
        <h3>{this.props.name} - {this.props.alcoholContent}</h3>
        <p><em>{this.props.brand}</em></p>
        <p>{this.props.location}</p>
        <p>${this.props.price} /pint</p>
        <p>{this.state.pints} pints avail.</p>
        <button style={buttonStyle} onClick={this.decreasePint}>Decrease</button>
        <hr />
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  alcoholContent: PropTypes.number,
  price: PropTypes.number
};

export default Keg; 


