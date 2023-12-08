import React from 'react'
import greenf from '../assets/images/green-front.png';
import greenb from '../assets/images/green-back.png';
import bluef from '../assets/images/blue-front.png';
import blueb from '../assets/images/blue-back.png';
import redf from '../assets/images/red-front.png';
import redb from '../assets/images/red-back.png';
import lineLeft from '../assets/images/lines-left.png';
import lineCenter from '../assets/images/line-center1.png';
import lineRight from '../assets/images/lines-right.png';

const CardFlip = () => {


  return (
    <>
{/* largeScreen */}
<div className='largeScreen'>
<div className='my-3 lg:my-16 md:my-8'>
        <div className='flex justify-between '>


        <div className='linesleft flex justify-center flex-grow lg:flex-grow-0'>
          <div className='card'>
          <div class="card__face card__face--front">
      <img src={greenf} className='hidden lg:block md:hidden' />
    </div>
    <div class="card__face card__face--back">
      <img src={greenb}  className='hidden lg:block md:hidden' />
    </div>
          </div>
        </div>
          
          <div className='linescenter flex justify-center flex-grow lg:flex-grow-0'>
          <div className='card'>
          <div class="card__face card__face--front">
      <img src={bluef}  className='hidden lg:block md:hidden' />
    </div>
    <div class="card__face card__face--back">
      <img src={blueb}  className='hidden lg:block md:hidden' />
    </div>
          </div>
          </div>


         
          <div className='linesright flex justify-center flex-grow lg:flex-grow-0'>
          <div className='card'>
          <div class="card__face card__face--front">
      <img src={redf}  className='hidden lg:block md:hidden' />
    </div>
    <div class="card__face card__face--back">
      <img src={redb}  className='hidden lg:block md:hidden' />
    </div>
          </div>

          </div>
       
        </div>
      </div>
</div>
{/* smallScreen */}
<div className='smallScreen'>
<div className='my-4 lg:my-16 md:my-8'>
<div className='flex'>
  <div className=''>
    <img src={lineLeft} className='h-full'/>
  </div>
  <div className=''>
    <img src={lineCenter}/>
  </div>
  <div className=''>
    <img src={lineRight} className='h-full'/>
  </div>
  </div>
  </div>
</div>
    </>
  )
}

export default CardFlip