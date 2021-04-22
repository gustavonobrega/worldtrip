import { Box, Heading, SimpleGrid, Grid } from "@chakra-ui/react";

import { CitiesInfo } from './CitiesInfo';

export function Cities() {
  return (
    <Box 
      width="100%" 
      maxWidth="1160" 
      mx="auto" 
      mt={["10", "10", "20"]} 
      mb="5"
    >
      <Heading fontSize={["2xl","5xl"]} px={["20px", "20px", "0"]} mb="5">Cidades +100</Heading>

      <Grid 
        templateColumns={["1fr", "1fr", "1fr 1fr", "repeat(4, 1fr)"]} 
        gap={['20px','45px']}
        px={["60px", "120px", "0"]}
      >
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
      </Grid>
    </Box>
  )
}