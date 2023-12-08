import React from 'react'
import pressTop from '../assets/images/press-line-top.png';
import press1 from '../assets/images/press-1.png';
import press2 from '../assets/images/press-2.png';
import press3 from '../assets/images/press-3.png';
import press4 from '../assets/images/press-4.png';
import press5 from '../assets/images/press-5.png';
import press6 from '../assets/images/press-6.png';
import press7 from '../assets/images/press-7.png';
import press8 from '../assets/images/press-8.png';
import press9 from '../assets/images/press-9.png';
import pressBottom from '../assets/images/press-line-bottom.png';
import Marquee from 'react-fast-marquee';

const Press = () => {
  return (
    <>
        <h1 className='text-white bold text-[25px] lg:text-[55px] text-center'>Pre<span className='text-purple'>ss</span></h1>
        <div className='py-6'>
        <img src={pressTop} className='bg-cover w-full'/>
        </div>
        <div className='px-0 lg:px-20 '>
      <Marquee speed={150}>
      <div className='flex justify-between items-center gap-20'>
       <img src={press1} className=''/>
        <img src={press2} className=''/>
        <img src={press3} className=''/>
        <img src={press4} className=''/>
        <img src={press5} className=''/>
        <img src={press6} className=''/>
        <img src={press7} className=''/>
        <img src={press8} className=''/>
        <img src={press9} className='pr-[90px]'/>
       </div>
      </Marquee>
        </div>
        <div className='py-6'>
        <img src={pressBottom} className='bg-cover w-full'/>
        </div>
    </>
  )
}

export default Press