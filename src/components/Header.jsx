import React from 'react';
import { Link } from 'react-router-dom';

var navStyling = 
  {
    display: 'block'
    // margin: '20px 0px'
  }

var linkStyleLeft = 
  {
    color: 'black',
    paddingLeft: '102px',
    float: 'left',
    // textDecoration: 'none',
    fontSize: '16px',
    fontFamily: 'didot'
  }

var linkStyleRight = 
  {
    color: 'black',
    marginTop: '-53px',
    paddingRight: '130px',
    // textDecoration: 'none',
    float: 'right',
    fontSize: '16px',
    fontFamily: 'didot'
  }

function Header() {
  return (

    <div style={navStyling}>
      <p style={linkStyleLeft}><Link to='/'>Home</Link> | <Link to='/KegList'>On tap now</Link></p>
      <center>
      <h2>
        <style jsx> {`
      h2 {
        color: orange;
        letter-spacing: 3px;
        padding-right: 223px;
        font-style: italic;
        font-size: 34px;
        font-family: monospace no. 20;
      }
      h2:hover {
        color: orange;
      }
      `}</style> 
       seattle brewery</h2>
       </center>
       <p style={linkStyleRight}><Link to='/'>About Us</Link> | <Link to='/'>Visit</Link> | <Link to='/'>Careers</Link></p>
      {/* <hr/> */}
    </div>
  );
}

export default Header;