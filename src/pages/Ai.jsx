import React from 'react'
import Navbar from '../components/Navbar'
import AiHero from '../components/AiHero'
import Roles from '../components/AiRoles'
import Footer from '../components/Footer'
import ContactForm from '../components/Contact'
import AiBenefits from '../components/AiBenefits'
import AiTestimonials from '../components/Aitestimonials'
import TeamOptimization from '../components/TeamOptimization'

const Ai = () => {
  return (
    <div>
        <Navbar/>
        <AiHero/>
        <Roles/>
        <AiBenefits/>
        <AiTestimonials/>
        <TeamOptimization/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Ai