import React, { useRef } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const About = () => {
  // Create a ref for the about section
  const aboutRef = useRef();

  return (
    // Attach the ref to the Box component
    <Box
      ref={aboutRef}
      id="about"
      w="full"
      py={10}
      px={{ base: 4, md: 16 }}
      bgImage="url('your-bg-image.jpg')" // Update with your image path
      bgColor={"#012F3F"}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      color="white"
    >
      <VStack spacing={4} align="stretch" textAlign="center">
        <Heading as="h2" size="xl" color="white">
          About Airways Catering
        </Heading>
        <Text fontSize="xl">
          Serving In-Flight Meals Since 1969
        </Text>
        <Text  mt={4}>
          Airways Catering Limited, the pioneer in airline catering in Ghana, has been serving high-quality in-flight meals since 1969. Originally the catering division of Ghana Airways, we have continued our legacy under private leadership, maintaining the highest standards in food safety and quality.
        </Text>
        <Text  mt={4}>
          Located close to the tarmac, our facility boasts top-notch communication systems, including fax, email, and walkie-talkies, ensuring seamless operations. Our commitment to excellence extends to security arrangements, aligning with the stringent HACCP guidelines.
        </Text>
        <Text  mt={4}>
          Today, under the directorship of Ms. Gladys Teni Abulu, Airways Catering Limited remains dedicated to providing exceptional in-flight dining experiences to airlines serving Accra.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
