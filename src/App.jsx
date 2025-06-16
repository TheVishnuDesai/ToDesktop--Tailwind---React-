import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SlidingLogos from './components/SlidingLogos'
import AppsSection from './components/AppsSection'
import HowItWorks from './components/HowItWorks'
import BentoGrid from './components/BentoGrid'
import CustomStories from './components/CustomStories'
import Download from './components/Download'
import Price from './components/Price'
import FAQs from './components/FAQs'
import Footer from './components/Footer'


function App() {

  return (
    <div> 
      <Navbar/>
      <Hero/>
      <SlidingLogos/>
      <AppsSection/>
      <HowItWorks/>
      <BentoGrid/>
      <CustomStories/>
      <Download/>
      <Price/>
      <FAQs/>
      <Footer/>
    </div>
  )
}

export default App
