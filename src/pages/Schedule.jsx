import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/Contact'
import SecondFooter from '../components/SecondFooter'
import ContactHero from '../components/ContactHero'
import GetInTouch from '../components/GetInTouch'
import ContactSplitSection from '../components/Contactslast'

const Schedule = () => {
  return (
    <div>
        <Navbar/>
        <ContactHero/>
        <GetInTouch/>
        <ContactSplitSection/>
        <ContactForm/>
        <SecondFooter/>
        {/* <Footer/> */}

    </div>
  )
}

export default Schedule