import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import VisionPage from './pages/VisionPage'
import ContactPage from './pages/ContactPage'
import theme from './theme'; 

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/vision-objectives" element={<VisionPage />} />
          <Route path="/contact" element={<ContactPage />} />
        
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
