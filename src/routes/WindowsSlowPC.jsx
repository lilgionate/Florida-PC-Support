import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsSlowPCIssue from '../components/WindowsSlowPCIssue/WindowsSlowPCIssue';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsScreen () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Slow PC Issue"/>
      <WindowsSlowPCIssue />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsScreen;