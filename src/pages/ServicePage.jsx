import React from 'react';
import { Box, Heading, Text, SimpleGrid, Icon } from '@chakra-ui/react';
import { GiKnifeFork, GiCook, GiCookingPot, GiMeal, GiCookingGlove } from 'react-icons/gi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const ServicePage = () => {
  const servicesList = [
    {
      name: "Domestically Prepared Meals",
      description: "All meals are domestically prepared by our experienced chefs.",
      icon: <Icon as={GiCook} boxSize={20} color="#012F3F" />,
    },
    {
      name: "Quality Ingredients",
      description: "We use both local and foreign materials for our meals, observing and adhering to culinary regulations including HACCP.",
      icon: <Icon as={GiCookingPot} boxSize={20} color="#012F3F" />,
    },
    {
      name: "Tailored Meal Orders",
      description: "We undertake tailored meal orders for all scheduled, non-scheduled, chartered, VIP, state protocol flights, etc.",
      icon: <Icon as={GiMeal} boxSize={20} color="#012F3F" />,
    },
    {
      name: "Variety of Meals",
      description: "We vary meals to suit clients' routes of operations.",
      icon: <Icon as={GiCookingGlove} boxSize={20} color="#012F3F" />,
    },
    {
      name: "Menu Planning",
      description: "We also plan menus for clients by offering them free consultation advice.",
      icon: <Icon as={GiKnifeFork} boxSize={20} color="#012F3F" />,
    },
  ];

  return (
    <>
      <Header />
      <Box id="services" w="full" py={10} px={6} bg="white">
        <Heading as="h2" size="xl" color="#012F3F" textAlign="center" mb={6}>
          Our Services
        </Heading>
        <Text color="black" textAlign="center" mb={8}>
          Explore our range of services that make us a leading airline catering company.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {servicesList.map((service, index) => (
            <Box
              key={index}
              backdropFilter="blur(10px)"
              rounded="lg"
              overflow="hidden"
              transition="transform 0.3s"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Box color="#140E72" textAlign="center">
                {service.icon}
              </Box>
              <Box p={5} textAlign="center">
                <Heading as="h3" size="lg" color="#012F3F">
                  {service.name}
                </Heading>
                <Text color="black" noOfLines={2}>
                  {service.description}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <ContactSection />
      <Footer />
    </>
  );
};

export default ServicePage;
