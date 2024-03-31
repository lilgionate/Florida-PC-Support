import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/img.jpg';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

function About () {
  return (
    <>
      <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg={AboutImg}
      title="About"
      />
      <AboutUs />
      <Footer />
    </>
  )
}

export default About