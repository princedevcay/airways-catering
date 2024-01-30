import React from 'react';
import { Box, VStack, Heading, Text, Input, Select, Button } from '@chakra-ui/react';

const Consultation = () => {
  return (
    <Box
      id="consultation"
      w="full"
      p={10}
      bg="white" // Background color for the container
      color="black"
    >
      <VStack
        w={{ base: 'full', md: '70%' }} // Adjust the width as needed
        spacing={4}
        align="center"
        mx="auto" // Center the container horizontally
      >
        <Heading as="h3" color='#012F3F' size="lg">
          Free Consultation
        </Heading>
        <Text>
          Let us assist you with your catering needs. Fill out the form for a free consultation on our catering services.
        </Text>

        {/* Form Section */}
        <VStack
          w="full"
          spacing={4}
          align="flex-start"
          color={"black"}
        >
          <Input placeholder="Your Name" />
          <Input placeholder="Email Address" />
          <Input placeholder="Phone Number" />
          {/* Catering Services Select Box */}
          <Select placeholder="Select Catering Service">
            <option value="in-flight-meals">In-Flight Meals</option>
            <option value="tailored-orders">Tailored Orders</option>
            <option value="menu-planning">Menu Planning</option>
            <option value="consultation">Consultation</option>
            {/* ... more options ... */}
          </Select>
          <Button color="white" bg={"#012F3F"} w="full">
            Submit
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Consultation;
