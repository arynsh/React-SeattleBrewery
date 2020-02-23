import React from 'react';
import { Link } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';

var homeStyling = 
  {
    textAlign: 'center',
    fontFamily: 'didot'
  }

var imgStyling = 
  {
    height: '800px',
    textAlign: 'center',
    width: '1250px'
  }

var boxStyling =
{
  backgroundColor: 'rgba(180,100,104, 0.35)',
  margin: '0',
  position: 'absolute',
  fontFamily: 'didot',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '34px',
  color: 'ghostwhite'
}
var linkStyle= {
  backgroundColor: 'white',
  color: 'black',
  border: '2px solid #fed3c3',
  padding: '10px 20px',
  textAlign: 'center',
  margin: '12px',
  textDecoration: 'none',
  display: 'inline-block'
}

function Home() {
    return (
      <div style={homeStyling}>
       <img style={imgStyling} src="https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.kansascitymag.com/content/uploads/2019/06/435-Beer-Cover_CCastor_05-1024x683.jpg"></img>
       <div style={boxStyling}>
                <h1 class="title">
                    <p>You've reached the homepage. Go you.</p>
                    <p> Are you at least 21 years of age?</p>
                </h1>
                <p style={linkStyle}><Link to='/UnderAge'>No</Link></p> <p style={linkStyle}><Link to='/KegList'> Yes</Link></p>
       </div>
      </div>
    );
  }
  
  export default Home;