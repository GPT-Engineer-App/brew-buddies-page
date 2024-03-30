import React from "react";
import { Box, Heading, Text, Button, Stack, Image, SimpleGrid, Container } from "@chakra-ui/react";
import { FaLeaf } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwwfHx8fDE3MTE3OTU1Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080')" bgSize="cover" bgPosition="center" py={40} textAlign="center" color="white">
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Best Coffee Shop in Split
          </Heading>
          <Text fontSize="xl" mb={8}>
            Discover the rich flavors of our organic, sustainably sourced coffee
          </Text>
          <Button colorScheme="green" size="lg" rightIcon={<FaLeaf />}>
            Shop Now
          </Button>
        </Container>
      </Box>

      {/* Services and Products Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Our Services and Products
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXB8ZW58MHx8fHwxNzExNzk1NTI5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Coffee" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Organic Coffee
              </Heading>
              <Text>Enjoy our selection of organic, fair-trade coffee beans from around the world.</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1550559256-32644b7a2993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmV3aW5nfGVufDB8fHx8MTcxMTc5NTUzMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Brewing" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Brewing Equipment
              </Heading>
              <Text>Find the perfect brewing equipment to elevate your coffee experience at home.</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzExNzk1NTMwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Coffee Shop" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Cozy Atmosphere
              </Heading>
              <Text>Visit our cozy coffee shop and savor our delicious organic coffee in a welcoming environment.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
