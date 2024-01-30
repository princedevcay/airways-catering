import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Heading, Text, VStack, Icon } from '@chakra-ui/react';
import { GiKnifeFork, GiCook, GiCookingPot, GiMeal, GiCookingGlove } from 'react-icons/gi';

const Services = () => {
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Box id="services" w="full" py={10} px={6} bg="white">
      <Heading as="h2" size="xl" color="#012F3F" textAlign="center" mb={6}>
        Our Services
      </Heading>
      <Text color="black" textAlign="center" mb={8}>
        Explore our range of services that make us a leading airline catering company.
      </Text>
      <Slider {...settings}>
        {servicesList.map((service, index) => (
          <Box key={index} px={2} py={2}>
            <VStack
              backdropFilter="blur(10px)"
              rounded="lg"
              overflow="hidden"
              transition="transform 0.3s"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Box color={"#140E72"}>
                {service.icon}
              </Box>
              <Box p={5}>
                <Heading as="h3" size="lg" textAlign={"center"} color="#012F3F">{service.name}</Heading>
                <Text color="black" textAlign={"center"} noOfLines={2}>{service.description}</Text>
              </Box>
            </VStack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Services;
