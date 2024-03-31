import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/img.jpg';

function About () {
  return (
    <>
      <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg={AboutImg}
      title="About"
      />
    </>
  )
}

export default About