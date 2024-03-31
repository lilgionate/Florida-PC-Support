import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/repair.jpg';

function Contact () {
  return (
    <>
      <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg={AboutImg}
      title="Contact"
      />
    </>
  )
}

export default Contact