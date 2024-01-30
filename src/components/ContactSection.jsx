import React from 'react';
import { VStack, Text } from '@chakra-ui/react';

const ContactSection = () => {
  return (
    <VStack id="contact" bg="#012F3F"  p={10} spacing={4} align="center">
      <Text fontSize="3xl" fontWeight="bold" textAlign="center">Get in Touch</Text>
      <Text textAlign="center">Contact us for more information.</Text>

      {/* Contact Information */}
      <VStack spacing={3} align="center">
        <Text fontSize="lg">Our Facility:</Text>
        <Text textAlign="center">Kotoka International Airport, adjacent to the Airport Post Office</Text>
        <Text textAlign="center">Very near to the tarmac, allowing quick response to last-minute requirements</Text>

        <Text>P.O. Box 9460</Text>
        <Text>Kotoka International Airport</Text>
        <Text>Accra.</Text>

        <Text fontSize="lg">Tel/Fax: 233-21-777962</Text>

        <Text fontSize="lg">E-mail Addresses:</Text>
        <Text>Front Office: info@airwayscatering.com</Text>
        <Text align="center">Gladys Teni Abulu, Director: gteni@airwayscatering.com</Text>
      </VStack>
    </VStack>
  );
};

export default ContactSection;
