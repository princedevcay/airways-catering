import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import About from '../components//About';
import Services from '../components/Services';
import ConsultationSection from '../components/ConsultationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box>
    <Header />
    <HeroSection />
    <About />
    <Services />
    <ConsultationSection />
    <ContactSection/>
    <Footer />
  </Box>
  );
};

export default Home;
