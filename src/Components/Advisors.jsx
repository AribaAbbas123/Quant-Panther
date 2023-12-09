import { useState, useEffect } from 'react';
import bRightAdvi from '../assets/images/border-right-advisor.png';
import bLeftAdvi from '../assets/images/border-left-advisor.png';
import Advisor1 from '../assets/images/Advisor-1.png';
import Advisor2 from '../assets/images/Advisor-2.png';
import Advisor3 from '../assets/images/Advisor-3.png';
import Advisor4 from '../assets/images/Advisor-4.png';
import Advisor5 from '../assets/images/Advisor-5.png';
import Advisor6 from '../assets/images/Advisor-6.png';
import bLeft from '../assets/images/border-left.png';
import bRight from '../assets/images/border-right.png';
import team2 from '../assets/images/team-m-2.png';

const Advisors = () => {
    const [advImg, setadvImg] = useState(Advisor1);
    const [advheadi, setadvheadi] = useState("Scott Kelly");
    const [advpara, setadvpara] = useState("Strategic Advisor CEO, Black Dog Venture Partners ");
    const [animatH, setanimatH] = useState(1);
    const [animatP, setanimatP] = useState(2);
    const [animatImg, setanimatImg] = useState(3);
    const handleClick = () => {
        if (advImg === Advisor1) {
            setadvImg(Advisor2);
            setadvheadi("Pablo Di ció");
            setadvpara("Creative Consultant");
            setanimatH(1);
            setanimatP(2);
            setanimatImg(3);
            console.log('animatImg:', animatImg);
        } else if (advImg === Advisor2) {
            setadvImg(Advisor3);
            setadvheadi("Keyur Shah");
            setadvpara("Financial Advisor Ex-VP, Polygon (Matic)");
            setanimatH(1);
            setanimatP(2);
            setanimatImg(3);
        } else if (advImg === Advisor3) {
            setadvImg(Advisor4);
            setadvheadi("Ian Scarffe");
            setadvpara("Blockchain Advisor");
            setanimatH(1);
            setanimatP(2);
            setanimatImg(3);
        } else if (advImg === Advisor4) {
            setadvImg(Advisor5);
            setadvheadi("Jason Kidd");
            setadvpara("");
            setanimatH(1);
            setanimatP(2);
            setanimatImg(3);
        } else if (advImg === Advisor5) {
            setadvImg(Advisor6);
            setadvheadi("Suresh Nakhua");
            setadvpara("Digital Marketing Advisor");
            setanimatH(1);
            setanimatP(2);
            setanimatImg(3);
        } else {
            setadvImg(Advisor1);
            setadvheadi("Scott Kelly");
            setadvpara("Strategic Advisor CEO, Black Dog Venture Partners");
            setanimatH(1);
            setanimatP(2);
            setanimatImg(3);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleClick();
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, [advImg, advheadi ,animatP,animatImg]);
    return (
        <>
        {/* largeScreen */}
        <div className='largeScreen'>
            
        <div className='px-5 lg:px-20 md:px-10 pt-5 lg:pt-20 md:pt-10 '>
                <h1 className='text-white bold text-[25px] lg:text-[55px] md:text-[35px]'>Advis<span className='text-purple'>ors</span></h1>
             <div className='py-5 lg:py-20 md:py-10'>
             <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1'>
                    {/* 1 */}
                    <div className='flex justify-center items-center relative order-1 lg:order-none'>
                        <h1 className={`text-white lg:text-[45px] md:text-base bold ${animatH === 1? 'advi-h-animat': ''}`} >{advheadi}</h1>
                        <p className={`text-white regular lg:text-base md:text-base text-center pt-5 ${animatP === 2? 'advi-p-animat': ''}`}>{advpara}</p>
                    </div>
                    {/* 2 */}
                    <div className='img-body'>
                        <div className='relative'>
                            <img src={bLeftAdvi} className='absolute team1-main border-left-advi' />
                      
                            <img src={advImg} onClick={handleClick} className={`absolute team1-main ${animatImg === 3? 'advi-Img-animat': ''}`} />
                       
                            <img src={bRightAdvi} className='absolute team1-main border-right-advi' />
                        </div>
                    </div>
                </div>
             </div> 
            </div>
        </div>
        {/* smallScreen */}
        <div className='smallScreen'>
        <div className='px-5 lg:px-20 md:px-10 py-20'>
                <h1 className='text-white bold text-[25px] lg:text-[55px] md:text-[35px]'>Advis<span className='text-purple'>ors</span></h1>
             <div className='py-5 lg:py-20 md:py-10'>
             {/* 1 */}
             <div className='grid-row'> <div className='team1 relative'>
                <img src={bLeft} className='absolute' />
                <h1 className='text-white bold text-xs absolute team1-main border-left-h'>{advheadi}</h1>
                <p className={`text-white regular text-xs text-center pt-5 ${animatP === 2? 'advi-p-animat': ''}`}>{advpara}</p>
                <img src={advImg} className={`absolute  team1-img-advi  ${animatImg === 3? 'advi-Img-animat': ''}`} />
                <img src={bRight} className='absolute border-right-advi-m' />

              </div></div>
             </div> 
            </div>
        </div>
        </>
    )
}

export default Advisors