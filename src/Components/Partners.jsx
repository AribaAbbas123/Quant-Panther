import React from 'react';
import partner1 from '../assets/images/partner-1.png';
import line1 from '../assets/images/p-line1.png';
import partner2 from '../assets/images/partner-2.png';
import line2 from '../assets/images/p-line2.png';
import partner3 from '../assets/images/partner-3.png';
import partner4 from '../assets/images/partner-4.png';
import line4 from '../assets/images/p-line4.png';
import partner5 from '../assets/images/partner-5.png';
import partner6 from '../assets/images/partner-6.png';
import partner7 from '../assets/images/partner-7.png';
import partner8 from '../assets/images/partner-8.png';
import partner9 from '../assets/images/partner-9.png';

const Partners = () => {
    return (
        <>
            {/* largeScreen */}
            <div className='largeScreen'>
            <h1 className='text-white text-[55px] bold text-center'>Partners & B<span className='text-purple'>ackers</span></h1>
            <div className='px-5 lg:px-20 md:px-10 py-20'>
            
                    <div className='flex justify-between'>
                        {/* 1 */}
                        <div className='flex items-center text-center flex-col gap-1.5 partner-1'>
                            <img src={partner1} />
                            <h1 className='bold text-base text-white'>Gotbit Foundation</h1>
                            <img src={line1} className='line-1' />
                        </div>
                        {/* 2 */}
                        <div className='flex items-center text-center flex-col gap-1.5 pt-40 partner-1'>
                            <img src={partner2} />
                            <h1 className='bold text-base text-white'>The CoinRecruit Capital</h1>
                            <img src={line2} className='line-2' />
                        </div>
                        {/* 3 */}
                        <div className='flex items-center text-center flex-col gap-1.5 partner-1'>
                            <img src={partner3} />
                            <h1 className='bold text-base text-white'>The Launch Hive</h1>
                            <p className='text-white regular '>Growth Partner</p>
                            <img src={line2} className='line-3' />
                        </div>
                        {/* 4 */}
                        <div className='flex items-center text-center flex-col gap-1.5 pt-72 partner-1'>
                            <img src={partner4} className='partner4-style' />
                            <h1 className='bold text-base text-white'>Sheesha</h1>
                            <p className='text-white regular '>FINANCE</p>
                            <img src={line4} className='line-4' />
                        </div>
                        {/* 5 */}
                        <div className='flex items-center text-center flex-col gap-1.5 pt-40 partner-1'>
                            <img src={partner5} />
                            <h1 className='bold text-base text-white'>BitBns</h1>
                            <img src={line2} className='line-5' />
                        </div>
                        {/* 6 */}
                        <div className='flex items-center text-center flex-col gap-1.5 pt-72 partner-1'>
                            <img src={partner6} className='partner4-style' />
                            <h1 className='bold text-base text-white'>ANYPAD</h1>
                            <img src={line4} className='line-6' />
                        </div>
                        {/* 7 */}
                        <div className='flex items-center text-center flex-col gap-1.5 partner-1'>
                            <img src={partner7} />
                            <h1 className='bold text-base text-white'>Black Dog </h1>
                            <h1 className='bold text-base text-white'>Venture Partners</h1>
                            <img src={line2} className='line-7' />
                        </div>
                        {/* 8 */}
                        <div className='flex items-center text-center flex-col gap-1.5 pt-40 partner-1'>
                            <img src={partner8} />
                            <h1 className='bold text-base text-white'>Alpha Blockz</h1>
                            <img src={line2} className='line-8' />
                        </div>
                        {/* 9 */}
                        <div className='flex items-center text-center flex-col gap-1.5 partner-1'>
                            <img src={partner9} />
                            <h1 className='bold text-base text-white'>Kaizen Finance</h1>
                            <p className='text-white regular'>Strategic & Launch Partner</p>
                            <img src={line1} className='line-9' />
                        </div>
                    </div>
                    </div>
                </div>
                {/* smallScreen */}
                <div className='smallScreen'>
                <h1 className='text-white text-[25px] lg:text-[55px] bold text-center'>Part<span className='text-purple'>ners</span></h1>
            <div className='px-5 lg:px-20 md:px-10 py-10 lg:py-20 md:py-10'>
                    <div className='grid grid-cols-2 gap-12'>
                    {/* 1 */}
                        <div className='flex items-center flex-col gap-1.5 partner-1 partner-1-img'>
                            <img src={partner7} />
                            <h1 className='bold text-xs lg:text-base text-white'>Black Dog </h1>
                            <h1 className='bold text-xs lg:text-base text-white'>Venture Partners</h1>
                        </div>
                        {/* 2 */}
                        <div className='flex items-center flex-col gap-1.5 partner-1 partner-1-img'>
                            <img src={partner9} />
                            <h1 className='bold text-xs lg:text-base text-white'>Kaizen Finance</h1>
                            <p className='text-white text-xs lg:text-base regular text-center'>Strategic & Launch Partner</p>
                        </div>
                        {/* 3 */}
                        <div className='flex items-center flex-col gap-1.5 partner-1 partner-1-img'>
                            <img src={partner8} />
                            <h1 className='bold text-base text-white'>Alpha Blockz</h1>
                        </div>
                        {/* 4 */}
                        <div className='flex items-center flex-col gap-1.5 partner-1 partner-1-img'>
                            <img src={partner3} />
                            <h1 className='bold text-xs lg:text-base text-white'>The Launch Hive</h1>
                            <p className='text-white text-xs lg:text-base regular'>Growth Partner</p>  
                        </div>
                        {/* 5 */}
                        <div className='flex items-center flex-col gap-1.5 partner-1 partner-1-img'>
                            <img src={partner5} />
                            <h1 className='bold text-xs lg:text-base text-white'>BitBns</h1>
                        </div>
                        {/* 6 */}
                        <div className='flex items-center flex-col gap-1.5 partner-1 partner-1-img'>
                            <img src={partner2} />
                            <h1 className='bold text-xs lg:text-base text-white'>The CoinRecruit Capital</h1>
                            <p className='text-white text-xs lg:text-base regular'>Strategic Partner</p>
                        </div>
                        {/* 7 */}
                        <div className='flex items-center flex-col gap-1.5 partner-1'>
                            <img src={partner6} className='partner4-style' />
                            <h1 className='bold text-xs lg:text-base text-white'>ANYPAD</h1>
                        </div>
                        {/* 8 */}
                        <div className='flex items-center flex-col gap-1.5 partner-1 partner-1-img'>
                            <img src={partner1} />
                            <h1 className='bold text-xs lg:text-base text-white'>Gotbit Foundation</h1>
                        </div>
                    </div>
                </div>
                </div>
          
        </>
    )
}

export default Partners