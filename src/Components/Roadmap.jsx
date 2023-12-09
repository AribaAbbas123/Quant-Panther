import React from 'react';
import roadMap from '../assets/images/roadmap.png';
import circleTop from '../assets/images/circle-top.png';
import circleBottom from '../assets/images/circle-bottom.png';

const Roadmap = () => {
  return (
    <>
<div className='relative'>
    <img src={roadMap} className='bg-cover w-full'/>
    {/* <h1 className='text-white bold text-[55px] absolute top-0'>Roa<span className='text-purple'>dmap</span></h1> */}
    <img src={circleTop} className='absolute roadmap-circle-top'/>
    <img src={circleBottom} alt='Circle Bottom' className='absolute circle-Bottom-Ani-road' />
</div>
    </>
  )
}

export default Roadmap