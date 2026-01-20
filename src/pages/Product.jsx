import React from 'react'
import Navbar from '../components/Navbar'
import ProductsHero from '../components/ProductHero'
import SecondFooter from '../components/SecondFooter'
import Footer from '../components/Footer'
import ZewaProductSection from '../components/ProductSection'
import ZewaKeyFeatures from '../components/ProductFeeatures'
import FeaturesSection from '../components/Features'

const Product = () => {
  return (
    <div>
        <Navbar/>
        <ProductsHero/>
        <ZewaProductSection/>
        <ZewaKeyFeatures/>
        <FeaturesSection/>
        <SecondFooter/>
        <Footer/>
    </div>
  )
}

export default Product