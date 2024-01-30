import { Box, Heading, Text, VStack, Grid, GridItem } from '@chakra-ui/react';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const VisionPage = () => {
  return (
    <>
      <Header />
      <Box
        w="full"
        py={10}
        px={{ base: 4, md: 16 }}
        bgImage="url('your-bg-image.jpg')" // Update with your image path
        bgColor={"white"}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        color="black"
      >
        <VStack spacing={4} align="stretch" textAlign="center">
          <Heading as="h2" size="xl" color="#012F3F">
            Vision and Objectives
          </Heading>
          <Text fontSize="xl">
            Forward-Thinking Goals for Long-Term Success
          </Text>
          <Text mt={4}>
            The company’s goals and vision are forward-thinking with plans well in place for its long-term survival in an ever-growing competitive market. As an investment for future growth, the management has a positive orientation and attitude for the future.
          </Text>
          <Text mt={4}>
            We have been approached by other professional bodies and institutes within Ghana to develop different types of catering facilities, such as staff restaurants for a cook chill / cook freeze operation. Additionally, we use our management knowledge as a base to help the training of catering students in some of the well-known technical catering schools and colleges.
          </Text>
          <Heading as="h2" size="xl" color="#012F3F" mt={8}>
            Conclusion
          </Heading>
          <Text mt={4}>
            We have been associated with most of our customer airlines or catering clients for over thirty years and believe in the value of long-term relationships, which have proved mutually beneficial to all stakeholders.
          </Text>
        </VStack>
      </Box>
      <ContactSection />
      <Footer />
    </>
  );
};

export default VisionPage;
