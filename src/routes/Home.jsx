import Navbar from '../components/Nav/Navbar';
import Hero from '../components/Header/Hero';
import image1 from '../assets/01.webp';
import image2 from '../assets/02.jpg';
import HomeImg from '../assets/hero.webp';
import Builds from '../components/Builds/Builds';
import Repairs from '../components/Repairs/Repairs';
import Certification from '../components/Certification/certification';
import Footer from '../components/Footer/Footer';

function Home() {
    // Define the array of cards
    const cards = [
        { title: 'GTA 6', image: image1 },
        { title: 'Spider-Man PS5', image: image2 },
        // Add other card data similarly
    ];

    return (
        <>
            <Navbar />
            {/* Pass the cards array as a prop to the Hero component */}
            <Hero 
                cName="hero"
                heroImg={HomeImg}
                cards={cards}
            />
            <Builds />
            <Repairs />
            <Certification />
            <Footer />
        </>
    )
}

export default Home;
