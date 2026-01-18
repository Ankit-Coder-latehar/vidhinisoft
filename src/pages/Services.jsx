import React from 'react'
import Navbar from '../components/Navbar'
import ServicesHero from '../components/Hero'
import StaffingSection from '../components/CompanyMarque'
import Footer from '../components/Footer'
import SecondFooter from '../components/SecondFooter'

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