/* eslint-disable no-unused-vars */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Flex, Box, Image, IconButton,
  Stack, useDisclosure,
  Drawer, DrawerOverlay, DrawerContent,
  DrawerHeader, DrawerBody, VStack, HStack, Button, Text, Link, Icon
} from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavigationLink = ({ to, children }) => (
    <RouterLink to={to} onClick={onClose}>
      <Text textTransform="uppercase" color="white" mr={{ base: 0, md: 4 }}>
        {children}
      </Text>
    </RouterLink>
  );

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="full"
      h="80px"
      px={{ base: 6, md: 0 }}
      bg="#012F3F"
      color="white"
    >
      {/* Logo Column */}
      <Box flexBasis={{ base: '50%', md: '33.333%' }}>
        <NavigationLink to="/">
          <Image src="/logo.png" alt="Airways Catering" />
        </NavigationLink>
      </Box>

      {/* Navigation Links Column - Hidden on mobile */}
      <Stack
        direction="row"
        display={{ base: 'none', md: 'flex' }}
        width={{ md: '33.333%' }}
        justifyContent="center"
        alignItems="center"
        _hover={{ color: 'gold' }}
        flexBasis={{ md: '50%' }}
      >
         <NavigationLink to="/">
          Home
        </NavigationLink>
        <NavigationLink to="/about">
          About Us
        </NavigationLink>
        <NavigationLink to="/services">
          Services
        </NavigationLink>
        <NavigationLink to="/vision-objectives">
          Vision & Objectives
        </NavigationLink>
        <NavigationLink to="#">
          Testimonials
        </NavigationLink>
        <NavigationLink to="/contact">
          Contact
        </NavigationLink>
      </Stack>

      {/* Mobile Menu Icon */}
      <Box display={{ base: 'block', md: 'none' }} flexBasis="50%" textAlign="right">
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Open Menu"
          onClick={onOpen}
          bgColor={"white"}
          border={"none"}
          colorScheme='blue'
        />
      </Box>

      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" bg={"#012F3F"}>
            <IconButton
              icon={<CloseIcon />}
              variant="outline"
              aria-label="Close Menu"
              onClick={onClose}
              color={"white"}
            />
          </DrawerHeader>
          <DrawerBody color={"white"} bg={"#012F3F"}>
            <VStack>
            <NavigationLink to="/">Home</NavigationLink>
              <NavigationLink to="/about">About</NavigationLink>
              <NavigationLink to="/services">Services</NavigationLink>
              <NavigationLink to="/vision-objectives">Vision & Objectives</NavigationLink>
              <NavigationLink to="#">Testimonials</NavigationLink>
              <NavigationLink to="/contact">Contact</NavigationLink>
            </VStack>

            {/* Contact Info */}
            <VStack spacing={2} mt={20}>
              <Text fontSize="lg" color="white">Tel/Fax: 233-21-777962</Text>
              <Text fontSize="lg" color="white">info@airwayscatering.com</Text>
              <Text fontSize="lg" color="white">gteni@airwayscatering.com</Text>
              <HStack mt={4}>
                <Link href="https://facebook.com" isExternal>
                  <Icon as={FaFacebookF} w={5} h={5} color={"white"} />
                </Link>
                <Link href="https://twitter.com" isExternal>
                  <Icon as={FaTwitter} w={5} h={5} color={"white"} />
                </Link>
                <Link href="https://instagram.com" isExternal>
                  <Icon as={FaInstagram} w={5} h={5} color={"white"} />
                </Link>
                <Link href="https://linkedin.com" isExternal>
                  <Icon as={FaLinkedinIn} w={5} h={5} color={"white"} />
                </Link>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
