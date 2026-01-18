import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HeroJobs from '../components/Herojobs'
import BenefitsGlofer from '../components/JobsBenefits'
import Footer from '../components/Footer'
import CareerCTA from '../components/CareerCta'
import SecondFooter from '../components/SecondFooter'
import Testimonials from '../components/Testimonials'
import LogosSection from '../components/HeroSlider'

const Jobs = () => {
  return (
    <div>
        <Navbar/>
        <HeroJobs/>
        <LogosSection/>
        <BenefitsGlofer/>
        <Testimonials/>
        <CareerCTA/>
        <SecondFooter/>
        <Footer/>
    </div>
  )
}

export default Jobs