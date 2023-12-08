import React from 'react';
import hyperOpti from '../assets/images/hyper-optimization 1.png';

const Optimization = () => {
  return (
    <>
    <div className='my-16 px-5 lg:px-20 md:px-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-12 lg:gap-0 md:gap-5'>
        <div className='flex justify-center items-center order-1 lg:order-none md:order-none'>
            <p className='text-pClr text-xs lg:text-base md:text-base'>The hyper optimization feature of Panther quant, singles out the most suitable trading strategy through machine learning algorithm. It helps you make better trading decisions, while simultaneously reducing the stress in figuring out the best trading strategy.</p>
        </div>
        <div className='relative'>
            <img src={hyperOpti}/>
            <div className='absolute text-white bold text-[25px] lg:text-[55px] md:text-[35px] leading-normal optimize-h'>Hyper <br/>
Optimi<span className='text-purple'>zation</span></div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Optimization