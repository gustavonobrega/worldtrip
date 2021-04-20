import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

import { CitiesInfo } from './CitiesInfo';

export function Cities() {
  return (
    <Box width="100%" maxWidth="1160" mx="auto" mt="20" mb="20"  >
      <Heading fontSize="5xl" mb="10">Cidades +100</Heading>

      <SimpleGrid columns={[2, null, 4]} spacing="40px">
        <CitiesInfo 
          city="Londres" 
          country="Reino Unido" 
          image="/images/londres.png" 
          icon="/icons/reinounido.svg"
        />
        <CitiesInfo 
          city="Paris" 
          country="França" 
          image="/images/paris.png" 
          icon="/icons/franca.svg"
        />
        <CitiesInfo 
          city="Roma" 
          country="Itália" 
          image="/images/roma.png" 
          icon="/icons/italia.svg"
        />
        <CitiesInfo 
          city="Praga" 
          country="República Tcheca" 
          image="/images/praga.png" 
          icon="/icons/republica.svg"
        />
        <CitiesInfo 
          city="Amsterdã" 
          country="Holanda" 
          image="/images/amsterda.png" 
          icon="/icons/holanda.svg"
        />
      </SimpleGrid>
    </Box>
  )
}