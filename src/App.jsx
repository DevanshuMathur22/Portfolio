import React from 'react'
import Navbar from "../src/components/ Navbar"
import Hero from "../src/components/Hero"
import About from "../src/pages/About"
import Contact from '../src/pages/Contact'
import Services from "../src/pages/Service"
import Work from "../src/pages/Work"
import TimeLine from "../src/pages/Time-Line"
import Footer from "../src/components/Footer"
import Fullstack from "../src/pages/Fullstack"
// import Roadmap from "../src/pages/Roadmap"
import Certificates from '../src/pages/Certificates'
import Slider from "../src/pages/Slider"

export default function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Certificates />
        <TimeLine />
        <Fullstack />
        {/* <Roadmap /> */}
       
        <Work />
         <Services />
        <Slider/>
       
        <Contact />
        <Footer />
    </div>
  )
}
