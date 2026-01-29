import React from 'react'
import Navbar from '../components/Navbar'

import StaffingSection from '../components/CompanyMarque'
import Footer from '../components/Footer'
import SecondFooter from '../components/SecondFooter'
import ServicesHero from '../components/ServiceHero'
import ServicesSection from '../components/ServicwCards'

const Services = () => {
  return (
    <div>
        <Navbar/>
        <ServicesHero/>
        <StaffingSection/>
        <ServicesSection/>
        <SecondFooter/>
        {/* <Footer/> */}
    </div>
  )
}

export default Services