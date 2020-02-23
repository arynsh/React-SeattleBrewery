import React from 'react';
import PropTypes from 'prop-types';


class Keg extends React.Component { 
  constructor(props){ 
    super(props);
    this.state = {
      pints: 124
    };
    console.log(this.state.pints);
    this.decreasePint = this.decreasePint.bind(this);
  }

  decreasePint(){
    let newPints = this.state.pints -1;
    this.setState({pints: newPints});
  }

  render(){
    var buttonStyle = {
      backgroundColor: 'pink',
      color: 'grey',
      border: '1px solid white'
    }

    return (
      <div>
        <h3>{props.name} - {props.alcoholContent}</h3>
        <p><em>{props.brand}</em></p>
        <p>{props.location}</p>
        <p>${props.price} /pint</p>
        <p>{props.pintsAvailable}</p>
        <hr />
        <button onClick={this.decreasePint}>Decrease</button>
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pintsAvailable: PropTypes.number,
  alcoholContent: PropTypes.number,
  price: PropTypes.number
};

export default Keg; 


{/* <Button 
className="btn btn-success" style={buttonStyle}
onClick={() => this.setState({pints: this.state.pints += 1})}>
Decrease Pint
</Button> */}