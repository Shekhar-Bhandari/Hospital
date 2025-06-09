import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Doctors from '../components/Doctors'
import Contact from '../components/Contact'
import News from '../components/News'
import About from '../components/About'

const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Services />
      <Doctors />
      <News />
      <Contact />
    </div>
  )
}

export default Home
