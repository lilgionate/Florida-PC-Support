import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeImg from '../assets/background2.jpeg';
import Builds from '../components/Builds';
import Repairs from '../components/Repairs';
import Footer from '../components/Footer';

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
      <Repairs />  
      <Footer />
    </>
  )
}

export default Home