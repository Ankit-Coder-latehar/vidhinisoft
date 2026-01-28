import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LogosSection from '../components/HeroSlider'
import StaffingSection from '../components/CompanyMarque'
import CustomerServiceSection from '../components/containers'
import Footer from '../components/Footer'
import WorkProcess from '../components/Workprogress'
import Testimonials from '../components/Testimonials'
import Benefits from '../components/Benefits'
import OutsourcingBenefits from '../components/maps'
import ContactForm from '../components/Contact'
import TechnologiesSection from '../components/TechnologiesSection'
import SecondFooter from '../components/SecondFooter'
import RevenueComparison from '../components/CompanyMarque'
import OurStoryHero from '../components/OurStory'
import HowWeBuild from '../components/HowWeBuild'
import HowWeDeliver from '../components/HowWeDeliver'
import OurIdeas from '../components/OurIdeas'

const Home = () => {
  return (
    <div className="bg-black min-h-screen w-full rounded-md">
      <Navbar />
      <Hero />
      <LogosSection />
      <RevenueComparison/>
      <OurStoryHero/>
      <HowWeBuild/>
      <HowWeDeliver/>
      {/* <CustomerServiceSection />
      <Benefits />
      <OutsourcingBenefits />
      <WorkProcess /> */}
      <OurIdeas/>
      <Testimonials />
      {/* <TechnologiesSection/> */}
      <ContactForm />
      <SecondFooter/>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
