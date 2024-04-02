import Navbar from '../components/Nav/Navbar';
import Hero from '../components/Header/Hero';
import HomeImg from '../assets/background2.jpeg';
import Builds from '../components/Builds/Builds';
import Repairs from '../components/Repairs/Repairs';
import Calendly from '../components/Services/Calendly';
import Footer from '../components/Footer/Footer';

function Home () {
  return (
    <>
      <Navbar />
      <Hero 
      cName="hero"
      heroImg={HomeImg}
      title="Your Journey Your PC"
      text="Check Out Our Products."
      btnText="Shop Now"
      url="/"
      btnClass="show"
      />
      <Builds />
      <Calendly />
      <Repairs />  
      <Footer />
    </>
  )
}

export default Home