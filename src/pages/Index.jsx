import { useState } from "react";
import { Container, Text, VStack, Box, Heading, Button, Image, Input, FormControl, FormLabel, Select, SimpleGrid, Alert, AlertIcon } from "@chakra-ui/react";

const Index = () => {
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSearch = async () => {
    // Mock API call
    const results = [
      { id: 1, airline: "Airline A", price: "$200", duration: "3h 20m" },
      { id: 2, airline: "Airline B", price: "$250", duration: "4h 10m" },
    ];
    setSearchResults(results);
  };

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
  };

  const handleConfirmBooking = () => {
    // Mock booking confirmation
    setBookingConfirmed(true);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Travel Booking</Heading>
        <Text fontSize="lg" textAlign="center">Explore the world with our travel booking services. Find the best deals on flights, hotels, and vacation packages.</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/travel-hero.jpg" alt="Travel" borderRadius="md" />
        </Box>
        <FormControl id="departure-city" isRequired>
          <FormLabel>Departure City</FormLabel>
          <Input value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} placeholder="Enter departure city" />
        </FormControl>
        <FormControl id="destination-city" isRequired>
          <FormLabel>Destination City</FormLabel>
          <Input value={destinationCity} onChange={(e) => setDestinationCity(e.target.value)} placeholder="Enter destination city" />
        </FormControl>
        <FormControl id="departure-date" isRequired>
          <FormLabel>Departure Date</FormLabel>
          <Input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </FormControl>
        <FormControl id="return-date">
          <FormLabel>Return Date</FormLabel>
          <Input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </FormControl>
        <FormControl id="passengers" isRequired>
          <FormLabel>Number of Passengers</FormLabel>
          <Select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="teal" size="lg" mt={6} onClick={handleSearch}>Search Flights</Button>
        {searchResults.length > 0 && (
          <Box mt={6} width="100%">
            <Heading as="h2" size="lg" mb={4}>Search Results</Heading>
            <SimpleGrid columns={1} spacing={4}>
              {searchResults.map((result) => (
                <Box key={result.id} p={4} borderWidth="1px" borderRadius="md">
                  <Text>Airline: {result.airline}</Text>
                  <Text>Price: {result.price}</Text>
                  <Text>Duration: {result.duration}</Text>
                  <Button mt={2} colorScheme="blue" onClick={() => handleSelectFlight(result)}>Select Flight</Button>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        )}
        {selectedFlight && (
          <Box mt={6} width="100%">
            <Heading as="h2" size="lg" mb={4}>Selected Flight</Heading>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Text>Airline: {selectedFlight.airline}</Text>
              <Text>Price: {selectedFlight.price}</Text>
              <Text>Duration: {selectedFlight.duration}</Text>
              <Button mt={2} colorScheme="green" onClick={handleConfirmBooking}>Confirm Booking</Button>
            </Box>
          </Box>
        )}
        {bookingConfirmed && (
          <Alert status="success" mt={6}>
            <AlertIcon />
            Booking confirmed! Thank you for choosing our service.
          </Alert>
        )}
      </VStack>
    </Container>
  );
};

export default Index;