import React from 'react'
import light from '../assets/images/Light.png';
import lightb from '../assets/images/Light-Blue.png';
import lightp from '../assets/images/Light-Pink.png';
import lightblack from '../assets/images/Light-Black.png';
import lightlblue from '../assets/images/Light-L-blue.png';
import person from '../assets/images/person-group.png';

const Light = () => {
  return (
    <>
  <img id="Light" src={light} alt="Light" className='lightChange' />
  {/* <div className='lightChange bg-cover'></div> */}
    </>
  )
}

export default Light