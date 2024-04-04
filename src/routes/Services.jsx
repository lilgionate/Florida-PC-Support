import Navbar from '../components/Nav/Navbar';
import Repairs from '../components/Repairs/Repairs';
import Footer from '../components/Footer/Footer';
import Calendly from '../components/Services/Calendly';

function Services () {
  return (
    <>
      <Navbar/>
      <Calendly />
      <Repairs />
      <Footer />
    </>
  )
}

export default Services