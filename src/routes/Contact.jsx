import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/repair.jpg';
import ContactForm from '../components/ContactForm';
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
      <ContactForm /> 
      <Footer />
    </>
  )
}

export default Contact