import Navbar from '../components/Nav/Navbar';
import Hero from '../components/Header/Hero';
import AboutImg from '../assets/service.jpg';
import Repairs from '../components/Repairs/Repairs';
import Footer from '../components/Footer/Footer';
import Calendly from '../components/Services/Calendly';

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