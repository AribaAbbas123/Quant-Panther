import React from 'react';
import footerImg from '../assets/images/footer.png';
import { FaLinkedinIn, FaTelegramPlane, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className='footer-gradient'>
        <div className='px-5 lg:px-20 md:px-10-20 pt-14 lg:pt-36'>

          <div className='flex justify-between flex-wrap pb-16'>

            <div className='grow'>
              <h1 className='text-white bold text-2xl lg:text-4xl'>Reach U<span className='text-purple'>s Now</span></h1>
              <div className='flex flex-col'>
                <div>  <form className='flex justify-end gap-4 input-footer-main my-5 lg:my-14'>
                  <input type='email' required className='input-footer my-4' />
                  <div className='input-btn-main'><button type='submit' className='mt-1 mr-1 px-4 lg:px-10 py-2 lg:py-3 bg-black text-white input-btn'>Send</button></div>
                </form></div>
                <div className='flex justify-between lg:justify-between md:justify-between gap-3 lg:gap-0 md:gap-0'>
                  {/* 1 */}
                  <div className='flex gap-4 flex-col footer-icon'>
                    <FaLinkedinIn className='footer-icon-size' />
                    <FaTelegramPlane className='footer-icon-size' />
                    <FaTwitter className='footer-icon-size' />

                  </div>
                  {/* 2 */}
                  <div className='flex gap-2 lg:gap-4 flex-col text-lightwhite semiBold font-normal text-xs lg:text-base '>
                    <p className='transition1s cursor-pointer hover:text-hoverClr'>FAQs</p>
                    <p className='transition1s cursor-pointer hover:text-hoverClr'>Privacy Policy</p>
                    <p className='transition1s cursor-pointer hover:text-hoverClr'>Terms And Conditions</p>
                    <p className='transition1s cursor-pointer hover:text-hoverClr'>Audit Report</p>
                    <p className='transition1s cursor-pointer hover:text-hoverClr'>Legal</p>
                  </div>
                  {/* 3 */}
                  <div >
                    <p className='text-lightwhite regular text-xs lg:text-base footer-p'>Pantherquant is coming to guard your exposure to the crypto market</p>
                  </div>

                </div>
              </div>
            </div>
            <div className='flex items-center justify-center flex-wrap'>

              {/* 4 */}
              <div className='flex order-1 lg:order-none md:order-none'>
                <p className='bold text-white text-[29px]'>Powered By</p>
              </div>
              <img src={footerImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer