import React from 'react'
import Navbar from '../components/Navbar'
import ClientsHero from '../components/ClientsHero'
import Footer from '../components/Footer'
import SecondFooter from '../components/SecondFooter'
import ClientsLogos from '../components/Clinetslogo'
import Benefits from '../components/Benefits'

const Clients = () => {
  return (
    <div>
        <Navbar/>
        <ClientsHero/>
        <ClientsLogos/>
        <Benefits/>
        <SecondFooter/>
        <Footer/>
    </div>
  )
}

export default Clients