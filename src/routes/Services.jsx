import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/service.jpg';
import Repairs from '../components/Repairs';
import Footer from '../components/Footer';
import Calendly from '../components/Calendly';

function Services () {
  return (
    <>
      <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg={AboutImg}
      title="Services"
      />
      <Calendly />
      <Repairs />
      <Footer />
    </>
  )
}

export default Services