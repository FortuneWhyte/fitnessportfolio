import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Results from './components/Results.jsx'
import Approach from './components/Approach.jsx'
import Strengths from './components/Strengths.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <div className="grain" />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Results />
      <Approach />
      <Strengths />
      <Testimonials />
      <Contact />
    </>
  )
}
