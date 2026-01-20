import React from 'react'
import Footer from '../components/Footer'
import CareersHero from '../components/CareerPage'
import SecondFooter from '../components/SecondFooter'
import Navbar from '../components/Navbar'
import OpenPositions from '../components/OpenPositions'
// import Footer from '../components/Footer'

const Carrer = () => {
  return (
    <div>
        <Navbar/>
        <CareersHero/>
        <OpenPositions/>
        <SecondFooter/>
        <Footer/>
    </div>
  )
}

export default Carrer