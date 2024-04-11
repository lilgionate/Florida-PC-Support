import Navbar from '../components/Nav/Navbar';
import Hero from '../components/Header/Hero';
import HomeImg from '../assets/hero.webp';
import Builds from '../components/Builds/Builds';
import Repairs from '../components/Repairs/Repairs';
import Passion from '../components/OurPassion/OurPassion';
import Featured from '../components/Featured/FeaturedCarousel';
import Supported from '../components/Supported/SupportedCarousel';
import ExpandingCards from '../components/ExpandingCards/ExpandingCards';
import OurServices from '../components/OurServices/OurServices';
import Footer from '../components/Footer/Footer';
import img1 from '../assets/repairicon.jpg';
import img2 from '../assets/repairicon.jpg';
import img3 from '../assets/repairicon.jpg';
import img4 from '../assets/repairicon.jpg';
import img5 from '../assets/repairicon.jpg';
import img6 from '../assets/repairicon.jpg';


const images = [
  { 
    id: 1, 
    title: "Schedule Your free Diagnostic",
    src: img1,
    active: true,
    linkUrl: "https://www.google.com",
  },
  { 
    id: 2, 
    title: "Remote IT Support",
    src: img2,
    active: false,
    linkUrl: "https://www.google.com",
  },
  { 
    id: 3, 
    title: "Onsite Tech Visit",
    src: img3,
    active: false,
    linkUrl: "https://www.google.com",
  },
  { 
    id: 4, 
    title: "Custom PC Build & Reapir",
    src: img4,
    active: false,
    linkUrl: "https://www.google.com",
  },
  { 
    id: 5, 
    title: "Data Recovery",
    src: img5,
    active: false,
    linkUrl: "https://www.google.com",
  },
  { 
    id: 6, 
    title: "Tech Protection Warranty",
    src: img6,
    active: false,
    linkUrl: "https://www.google.com",
  }

  ];


function Home () {
  return (
    <>
      <Navbar />
      <Hero 
      cName="hero"
      heroImg={HomeImg}
      />
      <ExpandingCards data={images}/>
      <Featured />
      <Builds />
      <OurServices />
      <Repairs />  
      <Supported />
      <Passion />
      <Footer />
    </>
  )
}

export default Home