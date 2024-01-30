import { Box, Heading, Text, VStack, Grid, GridItem } from '@chakra-ui/react';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const AboutPage = () => {
  // Create a ref for the about section
  // const aboutSectionRef = React.createRef();

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
            About Airways Catering
          </Heading>
          <Text fontSize="xl">
            Serving In-Flight Meals Since 1969
          </Text>
          <Text mt={4}>
            Airways Catering Limited (ACL) was incorporated as a Limited Liability Company in 1976. In 2006, the government of Ghana divested its interests in the company, and it was subsequently privatized.
          </Text>
          <Text mt={4} fontWeight={"bold"}>
            PERFORMANCE AWARDS:
          </Text>
          <Text mt={4}>
            ACL, over the past years, has provided delicious meals to very important dignitaries like:
          </Text>
          <Box ml={4}>
            <Text>- QUEEN OF ENGLAND</Text>
            <Text>- POPE JOHN PAUL II</Text>
            <Text>- SULTAN OF BRUNEI</Text>
            <Text>- BRITISH PRIME MINISTER</Text>
          </Box>
          <Text mt={4} fontWeight="bold">
            Other functions through state protocol
          </Text>
          <Box ml={4}>
            <Text>- Confederation of African Nations Cup-2008</Text>
            <Text>- African Union Summit Dignitaries: (Ethiopia, Morocco, Algeria)</Text>
          </Box>
          <Text mt={4}>
            There are lots of awards arrayed to support that our catering company is second to none in terms of efficient and quality delivery. Currently, we are providing catering services for the following airlines:
          </Text>
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap={2}  
            mt={2}
          >
            <GridItem>
              <Text>
                - EgyptAir
              </Text>
              <Text>
                - GHANA INTERNATIONAL AIRLINES
              </Text>
              <Text>
                - ETHIOPIAN AIRLINES
              </Text>
            </GridItem>
            <GridItem>
              <Text>
                - ALITALIA
              </Text>
              <Text>
                - AFRIJET
              </Text>
              <Text>
                - ANTRAK
              </Text>
            </GridItem>
            <GridItem>
              <Text>
                - STATE PROTOCOL
              </Text>
              <Text>
                - CHARTERED AIRLINES
              </Text>
              <Text>
                - NON-SCHEDULED AIRLINES
              </Text>
              <Text>
                - VIP flights
              </Text>
            </GridItem>
          </Grid>
        </VStack>
      </Box>
      <ContactSection />
      <Footer />
    </>
  );
};

export default AboutPage;
