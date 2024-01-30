import React from 'react';
import { Box, HStack, VStack, Text, Center, Image } from '@chakra-ui/react'; // Import necessary components

const Footer = () => {
  // Function to handle newsletter signup (to be implemented)
  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    // Newsletter signup logic here
    console.log('Newsletter signup submitted');
  };

  return (
    <Box bg="gray.900" color="gray.100" px={{ base: 5, sm: 10 }} py={10} w="full"> {/* Darker shade for footer */}
      <VStack spacing={10} align="start" w="full">
        {/* First Column: "Get in Touch" with Contact Info and Social Media Links */}
        {/* Add your content here */}

        {/* Mobile: Center Content and Include Image */}
        {/* Mobile: Stack Copyright Text below the content */}
        <HStack spacing={2} align="center" display={{ base: 'flex', md: 'none' }}>
          <Text fontSize="sm">© {new Date().getFullYear()} Airways Catering</Text>
          <Text fontSize="sm">All rights reserved.</Text>
        </HStack>
        <Center display={{ base: 'flex', md: 'none' }}>
          {/* Mobile: Image */}
          <Image src="/public/airlines-logo.jpg" alt="Your Alt Text" style={{ maxWidth: '100%', height: 'auto' }} />
        </Center>
        

        {/* Desktop: Arrange Copyright Text and Image in an HStack */}
        <HStack spacing={10} justify="space-between" align="start" w="full" display={{ base: 'none', md: 'flex' }}>
          {/* Second Column: Copyright Text on the left */}
          <HStack spacing={2} align="start">
            <Text fontSize="sm">© {new Date().getFullYear()} Airways Catering</Text>
            <Text fontSize="sm">All rights reserved.</Text>
          </HStack>

          {/* Third Column: Image on the right */}
          <Image src="/airlines-logo.jpg" alt="Your Alt Text" style={{ maxWidth: '100%', height: 'auto' }} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;
