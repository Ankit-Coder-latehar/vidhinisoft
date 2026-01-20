import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SecondFooter from '../components/SecondFooter'
import AboutHero from '../components/AboutHero'
import OurStory from '../components/OurStory'
import OurProcess from '../components/OurProcess'
import StatsAchievements from '../components/StatsSection'
import AboutComponets from '../components/About componets'
import WhatWeDo from '../components/About componets'
import HowWeWork from '../components/AboutFunctions'
import AboutChooseUs from '../components/Aboutchoose'

const About = () => {
  return (
    <div>
        <Navbar/>
        <AboutHero/>
        <OurStory/>
        <AboutComponets/>
        <HowWeWork/>
        <AboutChooseUs/>
        <OurProcess/>
        <StatsAchievements/>
        <SecondFooter />
        <Footer/>
    </div>
  )
}

export default About