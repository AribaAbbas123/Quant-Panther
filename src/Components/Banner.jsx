import { useState, useEffect } from 'react'
import heroImage from '../assets/images/banner.png';
import light from '../assets/images/Light.png';
import lightb from '../assets/images/Light-Blue.png';
import lightp from '../assets/images/Light-Pink.png';
import lightblack from '../assets/images/Light-Black.png';
import lightlblue from '../assets/images/Light-L-blue.png';
import person from '../assets/images/person-group.png';


const Banner = () => {
    const [imageSrc, setImageSrc] = useState(light);
    const handleClick = () => {
      if (imageSrc === light) {
        setImageSrc(lightb);
      } else if (imageSrc === lightb) {
        setImageSrc(lightp);
      } else if (imageSrc === lightp) {
        setImageSrc(lightblack);
      } else if (imageSrc === lightblack) {
        setImageSrc(lightlblue);
      } else {
        setImageSrc(light);
      }
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        handleClick();
      }, 5000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [imageSrc]);
  return (
    <>
 <div className='relative'>
        <img src={heroImage} className='bg-cover' width="100%" />
        <div className='pl-5 lg:pl-20 md:pl-10'>
          <div className='absolute top-0 banner-width'>
            <h1 className="bold text-purple text-[29px] lg:text-[55px] md:text-[29px] leading-normal banner-h-p">Giving You an <span className='text-headingClr'>Edge in The Wild West of Crypto</span></h1>
            <div className='shadow-padding'>
              <p className='semiBold text-[13px] lg:text-[25px] md:text-[13px] text-white pl-5 py-3 pr-8 border-2 border-[#CECACA] rounded-[9px] baner-shadow'>Panther Quant is the first NFT marketplace built on BNB SmartChain, seamlessly integrated with an AI based Layer 2 platform for the CEX/DEX/DeFi playfield.
              </p></div>
              <div className='block lg:hidden md:hidden pt-16'>
                <button className='text-white py-3 px-8 nav-btn rounded-lg regular  text-[14px] lg:text-[18px]'>Litepaper</button>
            </div>
          </div>
        </div>


        </div>
        {/* 2nd  */}
        <div className='relative banner-2nd my-16 my-lg-0 md:my-0'>
        <div className='px-5 lg:px-20 md:px-10  absolute light-style'>
          <div className='flex justify-between'>
            { /* 2.1 px */}
            <div className='pt-20'>
              <h1 className='text-headingClr text-[19px] lg:text-[55px] md:text-[27px]  leading-normal bold'>Abou<span className='text-purple'>t Us.</span></h1>
            </div>
            {/* 2.2 */}
            <div className='absolute z-10 light-img '>
              <img id="Light" src={imageSrc} alt="Light" onClick={handleClick} className='' />

            </div>
            {/* 2.3 */}
            <div>
              <h1 className=' text-headingClr text-lg lg:text-4xl md:text-lg leading-normal medium'>Re-<span className='text-purple'>DeFi</span>(n)ing the Web3,<br />
                Crypto & NFT Space!
              </h1>
            </div>
          </div>

          {/* 3rd */}

          <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1'>

            <div className='relative person'>
              <img src={person} />
            </div>

            <div className='text-pClr leading-normal flex justify-end flex-col '>
              <p className='semiBold text-[11px] lg:text-[22px] md:text-[11px]'>A newbie to Crypto? Afraid of losing all your money? A veteran trader? Yet, making uninformed trading decisions too often?</p>
              <p className='regular text-[11px] lg:text-base md:text-[11px] py-3'> We know that you are tired of making these random trading decisions, as such, we are bringing to you the first AI based "One-stop-Trading Destination" to guard your exposure in the crypto market by analysing the market sentiments in Real Time while automating your Trading strategies</p>
              <p className='regular text-[11px] lg:text-base md:text-[11px]'> Founded by an innovative team with over 37 years of combined experience in Cryptocurrency and Blockchain Technology, Panther Quant also offers tradable NFTs as incentives for successful trading strategies. Trade with an edge!</p>
            </div>
          </div>

        </div>
</div>
    </>
  )
}

export default Banner