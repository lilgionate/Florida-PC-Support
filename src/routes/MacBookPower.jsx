import Navbar from '../components/Nav/Navbar';
import Hero from '../components/Header/Hero';
import MacBookPowerUp from '../components/MacBookPowerUp';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WalkIn () {
  return (
    <>
      <Navbar />
      <Hero
      cName="hero"
      heroImg={HomeImg}/>
      <MacBookPowerUp />
      <Footer />
    </>
  )
}

export default WalkIn