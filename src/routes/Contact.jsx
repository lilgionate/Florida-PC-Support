import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/repair.jpg';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function Contact () {
  return (
    <>
      <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg={AboutImg}
      title="Contact"
      />
      <ContactSection /> 
      <Footer />
    </>
  )
}

export default Contact