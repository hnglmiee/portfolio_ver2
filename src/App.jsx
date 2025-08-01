import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import Projects from './sections/Projects'
import Testimonial from './sections/Testimonial'
import Footer from './components/Footer'

function App() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Testimonial />
      <Footer />
    </main>
  )
}

export default App
