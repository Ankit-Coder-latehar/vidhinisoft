import React from 'react'
import Navbar from '../components/Navbar'

import StaffingSection from '../components/CompanyMarque'
import Footer from '../components/Footer'
import SecondFooter from '../components/SecondFooter'
import ServicesHero from '../components/ServiceHero'

const Services = () => {
  return (
    <div>
        <Navbar/>
        <ServicesHero/>
        <StaffingSection/>
        <SecondFooter/>
        <Footer/>
    </div>
  )
}

export default Services