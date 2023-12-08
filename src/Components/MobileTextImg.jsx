import { useState } from 'react';
import Mobile from '../assets/images/Mobile.png';
import circleTop from '../assets/images/circle-top.png';
import circleBottom from '../assets/images/circle-bottom.png';
import Mobile1 from '../assets/images/Mobile-top1.png';
import Mobile2 from '../assets/images/Mobile-top2.png';
import Mobile3 from '../assets/images/Mobile-top3.png';
import Mobile4 from '../assets/images/Mobile-top4.png';
import Mobile5 from '../assets/images/Mobile-top5.png';


const MobileTextImg = () => {
    const [cImg, setcImg] = useState(Mobile1);
    const [active, setactive] = useState(1);





    const MTopOne = () => {
        setcImg(Mobile1);
        setactive(1)
    }

    const MTopTwo = () => {
        setcImg(Mobile2);
        setactive(2);
    }
    const MTopThree = () => {
        setcImg(Mobile3);
        setactive(3)
    }
    const MTopFour = () => {
        setcImg(Mobile4);
        setactive(4)
    }

    const MTopFive = () => {
        setcImg(Mobile5);
        setactive(5)
    }
    return (
        <>

            <div className='px-5 lg:px-20 md:px-10 py-20'>
                <div className='mt-10 lg:mt-36 md:mt-20'>
                    <h1 className='text-white text-[25px] lg:text-[55px] md:text-[35px] bold text-center lg:text-end md:text-end ms-auto lg:ms-auto md:ms-auto mobile-text-h'>What Makes Pant<span className='text-purple'>herquant A </span>
                        Top-Dra<span className='text-purple'>wer Performer?</span></h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                    {/* 1 */}
                    <div>
                        <div className='relative'>
                            <img src={Mobile} alt='Mobile' className='relative z-10' />
                            <img src={circleTop} alt='Circle Top' className='absolute top-[-35px] left-[-90px] ' />
                            <img src={cImg} alt='Mobile Main' className='absolute z-20 mobile-top-img ' />
                            <img src={circleBottom} alt='Circle Bottom' className='absolute circle-Bottom-Ani-m' />
                        </div>
                    </div>
                    {/* 2 */}

                    <div className='flex justify-center gap-5 flex-col text-pClr regular text-end'>
                        <p className={`text-center leading-normal text-xs lg:text-base lg:text-right md:text-right opacity-60 cursor-pointer ${active === 1 ? 'activeClass' : ''} `} onClick={MTopOne}>AI enabled Market Sentiment analysis in real-time</p>
                        <p className={`text-center leading-normal text-xs lg:text-base lg:text-right md:text-right opacity-60 cursor-pointer  ${active === 2 ? 'activeClass' : ''} `} onClick={MTopTwo}>It integrates with CEXs and DEXs users' utilities.</p>
                        <p className={`opacity-60 leading-normal text-xs lg:text-base text-center md:text-right cursor-pointer  ${active === 3 ? 'activeClass' : ''}`} onClick={MTopThree}>Safeguarding of users by Liquidity risk calculation on DEXs</p>
                        <p className={`opacity-60 leading-normal text-xs lg:text-base text-center cursor-pointer  ${active === 4 ? 'activeClass' : ''}`} onClick={MTopFour} >Marketplace for trading strategies tokenized as NFTs</p>
                        <p className={`text-xs lg:text-base leading-normal opacity-60 text-center lg:text-left md:text-center cursor-pointer ${active === 5 ? 'activeClass' : ''}`} onClick={MTopFive}>Hyper Optimization of trading strategies</p>
                    </div>

                </div>
            </div>

        </>
    );
};

export default MobileTextImg