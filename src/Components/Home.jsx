import React from 'react'
import Banner from './Banner';
import CardFlip from './CardFlip';
import NftStrategy from './NftStrategy';
import MobileTextImg from './MobileTextImg';
import Optimization from './Optimization';
import Token from './Token';
import Roadmap from './Roadmap';
import Platform from './Platform';
import Team from './Team';
import Advisors from './Advisors';
import Partners from './Partners';
import Press from './Press';


const Home = () => {




  return (
    <>

      <Banner />
      <CardFlip />
      <div className='gradient'>
        <NftStrategy />
        <MobileTextImg />
      </div>
      <Optimization />
      <Token />
      <Roadmap />
      <Platform />
      <div className='gradient-left'>
        <Team />
        <Advisors />
        <Partners />
      </div>
      <Press />
    </>
  )
}

export default Home