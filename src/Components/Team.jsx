import React from 'react';
import bLeft from '../assets/images/border-left.png';
import bRight from '../assets/images/border-right.png';
import team1 from '../assets/images/Mask group.png';
import team2 from '../assets/images/team-m-2.png';
import team3 from '../assets/images/team-m-3.png';
import team4 from '../assets/images/team-m-4.png';
import team5 from '../assets/images/team-m-5.png';
import team6 from '../assets/images/team-m-6.png';
import circleTop from '../assets/images/circle-top.png';
import circleBottom from '../assets/images/circle-bottom.png';


const Team = () => {
  return (
    <>
    
        <h1 className='text-white bold text- lg:text-[55px] md:text-[35px] text-center'>Our T<span className='text-purple'>eam</span></h1>
        <div className='px-5 lg:px-20 md:px-10'>
          <div className='py-16'>
            <div className='relative'>
              <img src={circleTop} alt='Circle Bottom' className='absolute circle-Bottom-Ani' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
              <div className='grid-row' >
                <div className='team1 relative'>
                  <img src={bLeft} className='absolute team1-main border-left' />
                  <h1 className='text-pClr regular text-xs lg:text-base md:text-base absolute team1-main border-left-h'>Founder/ <br />Lead Developer</h1>
                  <img src={team1} className='absolute team1-main team1-img' />
                  <img src={bRight} className='absolute team1-main border-right' />
                  <h1 className='text-pClr absolute team1-main border-right-h semiBold text-base lg:text-xl md:text-base'>Manav Bajaj</h1>
                </div>
              </div>
              {/* 2 */}
              <div className='grid-row'> <div className='team1 relative'>
                <img src={bLeft} className='absolute team1-main border-left-2' />
                <h1 className='text-pClr regular text-xs lg:text-base md:text-base absolute team1-main border-left-h'>Co Founder <br />
                  COO</h1>
                <img src={team2} className='absolute team1-main team1-img' />
                <img src={bRight} className='absolute team1-main border-right' />
                <h1 className='text-pClr absolute team1-main border-right-h semiBold text-base lg:text-xl md:text-base'>Chandni Shah</h1>
              </div></div>
              {/* 3 */}
              <div className='grid-row'> <div className='team1 relative'>
                <img src={bLeft} className='absolute team1-main border-left-2' />
                <h1 className='text-pClr regular text-xs lg:text-base md:text-base absolute team1-main border-left-h-3'>AI Programmer</h1>
                <img src={team3} className='absolute team1-main team1-img' />
                <img src={bRight} className='absolute team1-main border-right-3' />
                <h1 className='text-pClr absolute team1-main border-right-h-3 semiBold text-base lg:text-xl md:text-base'>Bhavya Gulati</h1>
              </div></div>
              {/* 4 */}
              <div className='grid-row'>
                <div className='team1 relative'>
                  <img src={bLeft} className='absolute team1-main border-left' />
                  <h1 className='text-pClr regular text-xs lg:text-base md:text-base absolute team1-main border-left-h'>Blockchain <br />Developer</h1>
                  <img src={team4} className='absolute team1-main team1-img' />
                  <img src={bRight} className='absolute team1-main border-right' />
                  <h1 className='text-pClr absolute team1-main border-right-h semiBold text-base lg:text-xl md:text-base'>Rajesh GV</h1>
                </div>
              </div>
              {/* 5 */}
              <div className='grid-row'> <div className='team1 relative'>
                <img src={bLeft} className='absolute team1-main border-left-2' />
                <h1 className='text-pClr regular text-xs lg:text-base md:text-base absolute team1-main border-left-h'>Business <br />Development</h1>
                <img src={team5} className='absolute team1-main team1-img' />
                <img src={bRight} className='absolute team1-main border-right' />
                <h1 className='text-pClr absolute team1-main border-right-h semiBold text-base lg:text-xl md:text-base'>Rishabh Kalra</h1>
              </div></div>
              {/* 6 */}
              <div className='grid-row'> <div className='team1 relative'>
                <img src={bLeft} className='absolute team1-main border-left-2' />
                <h1 className='text-pClr regular text-xs lg:text-base md:text-base absolute team1-main border-left-h-3'>Marketing Head</h1>
                <img src={team6} className='absolute team1-main team1-img' />
                <img src={bRight} className='absolute team1-main border-right-3' />
                <h1 className='text-pClr absolute team1-main border-right-h-3 semiBold text-base lg:text-xl md:text-base'>Ajay Kumar</h1>
              </div></div>
            </div>
            <div className='relative z-10'>
              <img src={circleBottom} alt='Circle Top' className='absolute top-[-200px] left-[-200px] circle-Bottom-Ani' />
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Team