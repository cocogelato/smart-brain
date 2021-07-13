import React from 'react';
// import Tilt from 'react-tilt';
import Tilty from 'react-tilty';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilty className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner pa3"><img style ={{paddingTop: '5px'}} alt ='logo' src={brain}/> </div>
      </Tilty>
    </div>
  );
}

export default Logo;