import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SecondFooter from '../components/SecondFooter'
import CustomerHero from '../components/CustomerHero.jsx'
import CaseStudies from '../components/CaseStudy'
import CustomerStory from '../components/Customerstory'
import ProblemsWeSolve from '../components/Customerproblem.jsx'
import OurApproach from '../components/CustomerApproach.jsx'
import NumbersThatBuildTrust from '../components/CustomerTrust.jsx'

const CustomersPage = () => {
  return (
    <div>
        <Navbar/>
        <CustomerHero/>
        <CaseStudies/>
        <CustomerStory/>
        <ProblemsWeSolve/>
        <OurApproach/>
        <NumbersThatBuildTrust/>
        <SecondFooter/>
        <Footer/>
    </div>
  )
}

export default CustomersPage