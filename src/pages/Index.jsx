import { Container, Text, VStack, Box, Heading, Button, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Travel Booking</Heading>
        <Text fontSize="lg" textAlign="center">Explore the world with our travel booking services. Find the best deals on flights, hotels, and vacation packages.</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/travel-hero.jpg" alt="Travel" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg" mt={6}>Start Your Journey</Button>
      </VStack>
    </Container>
  );
};

export default Index;