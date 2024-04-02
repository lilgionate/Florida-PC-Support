import Navbar from '../components/Nav/Navbar';
import Hero from '../components/Header/Hero';
import AboutImg from '../assets/repair.jpg';
import ContactSection from '../components/Contact/ContactSection';
import Footer from '../components/Footer/Footer';

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