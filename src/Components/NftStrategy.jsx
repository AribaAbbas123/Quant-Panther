import React from 'react'
import Aibased from '../assets/images/icon-1.png';
import NFT from '../assets/images/icon-2.png';
import Loan from '../assets/images/icon-3.png';
import Yield from '../assets/images/icon-4.png';

const NftStrategy = () => {
  return (
    <>
         <h1 className='bold text-[25px] lg:text-[55px] md:text-[35px] text-center text-purple pt-0 lg:pt-20 md:pt-0'>PANTHER QUANT: <span className='text-white'> Create An NFT <br />  Of Your Trading Strategy </span></h1>
     
        <p className='text-pClr regular text-center m-auto text-base px-5 Nft-main-p'>Panther quant offers a golden opportunity of owning an nft for being a successful trader. It offers individual with tested trading strategy, the priviledge to tokenize that ultimate guide in which one can make the best investment.
          With Panther Quant platform one can have the sense of ownership of their trading strategy NFTs & lease it out to others on the Panther Quant marketplace and earn creator rewards.</p>
        <div className='px-5 lg:px-20 md:px-10 py-20'>
          <h1 className='bold text-[25px] lg:text-[55px] md:text-[35px] text-white'>Platform Fea<span className='text-purple'>tures</span></h1>
          <p className='text-pClr text-base lg:text-xl semiBold Nft-p'>Panther Quant is a revolutionary platform that aims to provide a transformative experience for the crypto space.
            It has several features that will make it stand out
            from the crowd. In synopsis, these features are:</p>
        </div>
        <div className='px-5 lg:px-20 md:px-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
            <div></div>
            {/* 2nd  */}
            <div>
              <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-16'>
                {/* icon-1 */}
                <div className='flex gap-5 flex-col'>
                  <div className='flex items-end gap-5'>
                    <h1 className='text-base lg:text-xl md:text-base bold text-pClr'>AI-based Signal</h1>
                    <img src={Aibased} className='duration-700 cursor-pointer hover:scale-150' />
                  </div>
                  <p className='text-base regular text-pClr Nft-icon1-p'>It uses machine learning technology and Artificial Intelligence to analyze real-time market sentiment.It then forecasts an asset's value based on the data collected by social media platforms.</p>
                </div>
                {/* icon-2 */}
                <div className='flex gap-5 flex-col '>
                  <div className='flex items-end gap-5 justify-end lg:justify-start md:justify-end'>
                    <h1 className='text-base lg:text-xl md:text-base bold text-pClr order-1 lg:order-none md:order-none'>NFT Marketplace</h1>
                    <img src={NFT} className='duration-700 cursor-pointer hover:scale-150'/>
                  </div>
                  <p className='text-base regular text-pClr text-end lg:text-left Nft-icon1-p ms-auto lg:ms-0 '>The NFT Marketplace will allow users to convert their trading strategies into NFTs, and trade it with other users.</p>
                </div>
                {/* icon-3 */}
                <div className='flex gap-5 flex-col'>
                  <div className='flex items-end gap-5'>
                    <h1 className='text-base lg:text-xl md:text-base bold text-pClr Nft-icon3-h'>DEX Arbitrage & Flash Loan</h1>
                    <img src={Loan} className='duration-700 cursor-pointer hover:scale-150' />
                  </div>
                  <p className='text-base regular text-pClr Nft-icon1-p'>It will automate DEXs arbitrage while scanning for loan opportunities in top DEXs to execute an order based on predefined parameters and sends profits directly to the user's wallet.</p>
                </div>
                {/* icon-4 */}
                <div className='flex gap-5 flex-col'>
                  <div className='flex items-end gap-5 justify-end lg:justify-start md:justify-end'>
                    <h1 className='text-base lg:text-xl md:text-base bold text-pClr order-1 lg:order-none md:order-none Nft-icon4-h'>Auto Compound Yield & Yield Swap</h1>
                    <img src={Yield} className='duration-700 cursor-pointer hover:scale-150' />
                  </div>
                  <p className='text-base regular text-pClr text-end lg:text-left Nft-icon4-p ms-auto lg:ms-0 md:ms-0 '>User's funds will be automatically moved and auto-compound into a cryptocurrency and keep them in their wallet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default NftStrategy