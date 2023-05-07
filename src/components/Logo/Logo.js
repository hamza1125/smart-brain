import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'; 
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt0'>
		    <Tilt className='Tilt br2 shadow-2' style={{ height: '130px', width: '130px' }}>
		      <div className='Tilt-inner pa3'>
		        <img style={{paddingTop: '2px'}} alt='' src={brain}/>
		      </div>
			</Tilt>
		</div>
	);	
}

export default Logo;