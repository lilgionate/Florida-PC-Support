import Navbar from '../components/Nav/Navbar';
import Hero from '../components/Header/Hero';
import AboutImg from '../assets/img.jpg';
import AboutUs from '../components/About/AboutUs';
import Footer from '../components/Footer/Footer';

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