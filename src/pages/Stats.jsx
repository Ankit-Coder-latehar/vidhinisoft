import React from 'react'
import Navbar from '../components/Navbar'
import StatHero from '../components/OurStatHero'
import Footer from '../components/Footer'
import SecondFooter from '../components/SecondFooter'
import TechnologiesSection from '../components/TechnologiesSection'

const Stats = () => {
  return (
    <div>
        <Navbar/>
        <StatHero/>
        <TechnologiesSection/>
        <SecondFooter/>
        <Footer/>
    </div>
  )
}

export default Stats