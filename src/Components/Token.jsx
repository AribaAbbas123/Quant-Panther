import React from 'react';
import tokenObject from '../assets/images/Tokens.png';
import tokenText from '../assets/images/text.png';

const Token = () => {
  return (
    <>
      <div className='px-5 lg:px-20 md:px-10'>
        <h1 className='text-white text-[55px] bold'>Tokeno<span className='text-purple'>mics</span></h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 mb-16'>
          <div className=''>
            <div className='my-16'>
              <div className='relative' >
                <img src={tokenObject} />
                <img src={tokenText} className='absolute token-text' />
              </div>
            </div>

          </div>
          <div>
            {/* largeScreen-token */}
            <div className='largeScreen-token'>
              <div className='flex flex-col gap-4 text-center lg:text-justify'>
                {/* 1 */}
                <div className='flex gap-3 flex-col lg:text-end token-main team lg:ms-auto'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Team</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding team-shadow'>12 months cliff, then 2% monthly unlock </p>
                </div>
                {/* 2 */}
                <div className='flex gap-3 flex-col token-main Marketing ms-auto'>
                  <p className='text-xs lg:text-base semiBold pr-[14px] '>Marketing</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Marketing-shadow'>3  months cliff, then 2% monthly unlock </p>
                </div>
                {/* 3 */}
                <div className='flex gap-3 flex-col token-main Bounty ms-auto'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Bounty</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Bounty-shadow'>10% at TGE, then 2% monthly unlock </p>
                </div>
                {/* 4 */}
                <div className='flex gap-3 flex-col lg:text-end token-main Advisors ms-auto'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Advisors</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Advisors-shadow'>6 months cliff, 10% quarterly unlock </p>
                </div>
                {/* 5 */}
                <div className='flex gap-3 flex-col lg:text-end token-main Ecosystem ms-auto'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Ecosystem</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Ecosystem-shadow'>6 months cliff, 5% quaterly unlock </p>
                </div>
                {/* 6 */}
                <div className='flex gap-3 flex-col token-main Staking-Rewards ms-auto'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Staking Rewards</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Staking-Rewards-shadow'>3 months cliff, 2% monthly unlock for liquidity mining rewards </p>
                </div>
                {/* 7 */}
                <div className='flex gap-3 flex-col lg:text-end token-main Product-Development ms-auto'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Product Development</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Product-Development-shadow'>3 months cliff, 10% Quarterly  unlocked </p>
                </div>
                {/* 8 */}
                <div className='flex gap-3 flex-col token-main Partnership ms-auto'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Partnership</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Partnership-shadow'>1  month cliff, 10% unlock every 60 days.</p>
                </div>
                {/* 9 */}
                <div className='flex gap-3 flex-col token-main Pre-sale ms-auto'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Pre-sale</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Pre-sale-shadow'>10% unlocked at TGE, then 10% unlock every 60 days.</p>
                </div>
                {/* 10 */}
                <div className='flex gap-3 flex-col lg:text-end token-main Public-Sale ms-auto'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Public Sale</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Public-Sale-shadow'>10% unlocked at TGE, then 10% unlock every 60 days.</p>
                </div>
                {/* 11 */}
                <div className='flex gap-3 flex-col lg:text-end token-main Liquidity lg:ms-auto'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Liquidity</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Liquidity-shadow'>10% unlocked at TGE, then 10% unlock every 60 days.</p>
                </div>
              </div>
            </div>
            {/* smallScreen-token */}
            <div className='smallScreen-token'>
              {/* 1st row  */}
              <div className='flex justify-between pt-4'>
                {/* 1 */}
                <div className='flex gap-3 flex-col lg:text-end token-main-tab team ms-0 lg:ms-auto md:ms-0'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Team</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding team-shadow-tab'>12 months cliff, then 2% monthly unlock </p>
                </div>
                {/* 2 */}
                <div className='flex gap-3 flex-col token-main-tab Marketing-tab ms-0 lg:ms-auto md:ms-0'>
                  <p className='text-xs lg:text-base semiBold pr-[14px] md:text-end '>Marketing</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Marketing-shadow-tab md:text-end'>3  months cliff, then 2% monthly unlock </p>
                </div>
              </div>
              {/* 2nd row */}
              <div className='flex justify-between pt-4'>
                {/* 3 */}
                <div className='flex gap-3 flex-col token-main-tab Bounty-tab ms-0 lg:ms-auto md:ms-0'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Bounty</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Bounty-shadow-tab'>10% at TGE, then 2% monthly unlock </p>
                </div>
                {/* 4 */}
                <div className='flex gap-3 flex-col lg:text-end token-main-tab Advisors-tab ms-0 lg:ms-auto md:ms-0'>
                  <p className='text-xs lg:text-base semiBold pr-[14px] md:text-end'>Advisors</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Advisors-shadow-tab md:text-end'>6 months cliff, 10% quarterly unlock </p>
                </div>
              </div>
              {/* 3rd row  */}
              <div className='flex justify-between pt-4'>
                {/* 5 */}
                <div className='flex gap-3 flex-col lg:text-end token-main-tab Ecosystem-tab ms-0 lg:ms-auto md:ms-0'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Ecosystem</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Ecosystem-shadow-tab'>6 months cliff, 5% quaterly unlock </p>
                </div>
                {/* 6 */}
                <div className='flex gap-3 flex-col token-main-tab Staking-Rewards-tab ms-0 lg:ms-auto md:ms-0'>
                  <p className='text-xs lg:text-base semiBold pr-[14px] md:text-end'>Staking Rewards</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Staking-Rewards-shadow-tab md:text-end'>3 months cliff, 2% monthly unlock for liquidity mining rewards </p>
                </div>
              </div>
              {/* 4th row  */}
              <div className='flex justify-between pt-4'>
                {/* 7 */}
                <div className='flex gap-3 flex-col lg:text-end token-main-tab Product-Development-tab ms-0 lg:ms-auto md:ms-0'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Product Development</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Product-Development-shadow-tab'>3 months cliff, 10% Quarterly  unlocked </p>
                </div>
                {/* 8 */}
                <div className='flex gap-3 flex-col token-main-tab Partnership-tab ms-0 lg:ms-auto md:ms-0'>
                  <p className='text-xs lg:text-base semiBold pr-[14px] md:text-end'>Partnership</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Partnership-shadow-tab md:text-end'>1  month cliff, 10% unlock every 60 days.</p>
                </div>
              </div>
              {/* 5th row  */}
              {/* 9 */}
              <div className='flex pt-4 justify-center '>
                <div className='flex gap-3 flex-col token-main-tab Pre-sale-tab ms-0 lg:ms-auto md:ms-0'>
                  <p className='text-xs lg:text-base semiBold pr-[14px] text-center'>Pre-sale</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Pre-sale-shadow-tab text-center'>10% unlocked at TGE, then 10% unlock every 60 days.</p>
                </div>
              </div>
              {/* 6th row  */}
              <div className='flex pt-4 justify-center '>
                {/* 10 */}
                <div className='flex gap-3 flex-col lg:text-end md:text-center token-main-tab Public-Sale-tab ms-0 lg:ms-auto md:ms-0'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Public Sale</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Public-Sale-shadow-tab'>10% unlocked at TGE, then 10% unlock every 60 days.</p>
                </div>
              </div>
              {/* 7th row  */}
              <div className='flex pt-4 justify-center '>
                {/* 11 */}
                <div className='flex gap-3 flex-col lg:text-end md:text-center token-main-tab Liquidity-tab ms-0 lg:ms-auto md:ms-0'>
                  <p className='text-xs lg:text-base semiBold pr-[14px]'>Liquidity</p>
                  <p className='border-2 border-borderPink text-xs lg:text-base rounded-[32px] regular token-p-padding Liquidity-shadow-tab'>10% unlocked at TGE, then 10% unlock every 60 days.</p>
                </div>
                </div>
            </div>



          </div>
        </div>
        <div className='bold text-base text-center lg:text-left text-white'>Initially, 2% liquidity <br />
          `will be locked for 18 months.</div>
      </div>
    </>
  )
}

export default Token