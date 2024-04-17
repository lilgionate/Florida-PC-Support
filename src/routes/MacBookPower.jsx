import Navbar from '../components/Nav/Navbar';
import Hero from '../components/Header/Hero-Top';
import MacBookPowerUp from '../components/MacBookPowerUp';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WalkIn () {
  return (
    <>
      <Navbar />
      <Hero
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="MacBook Won’t Power Up Fix"/>
      <MacBookPowerUp />
      <Footer />
    </>
  )
}

export default WalkIn