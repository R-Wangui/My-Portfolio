import NavBar from '../components/layout/NavBar'
import Hero from '../components/Hero'
import Services from '../components/Services';
import Footer from '../components/layout/Footer';
import Projects from '../components/Projects';
// import Resume from './Resume';

function Landing() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Projects />
      <Footer />
    </>
  )
}

export default Landing