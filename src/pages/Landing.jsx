import Hero from '../components/Hero'
import Services from '../components/Services';
import Footer from '../components/layout/Footer';
import Projects from '../components/Projects';
// import Resume from './Resume';

function Landing() {
  return (
    <>
      <div id='landing'>
        <Hero />
        <Services />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default Landing