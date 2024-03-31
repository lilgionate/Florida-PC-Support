import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/service.jpg';

function Services () {
  return (
    <>
      <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg={AboutImg}
      title="Services"
      />
    </>
  )
}

export default Services