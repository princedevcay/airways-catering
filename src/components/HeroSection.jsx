import React from 'react';
import { Box, Heading, Text, Button, VStack, Image } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box id="hero" w="full" h="70vh" textAlign="center" position="relative" overflow="hidden">
      {/* Image Background */}
      <Image
        src="/slide1.jpg"  // Replace with the actual path to your image
        alt="Airways Catering"
        w="100%"
        h="100%"
        objectFit="cover"
        position="absolute"
        top="0"
        left="0"
        zIndex={-1}
      />

      {/* Overlay to ensure text is readable */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="blackAlpha.600"
        zIndex={0}
      />

      {/* Content */}
      <VStack zIndex={1} position="relative" spacing={4} justify="center" h="full">
        <Heading as="h1" size="2xl" color="white" mt="20vh">
          Airways Catering
        </Heading>
        <Text color="gray.300" my={4}>
          Providing High-Quality In-Flight Meals Since 1969
        </Text>
        <Button colorScheme="white" variant="outline">
          Learn More
        </Button>
      </VStack>
    </Box>
  );
};

export default HeroSection;
