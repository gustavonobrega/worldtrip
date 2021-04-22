import { Divider, Heading, Box } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';
import { ContinentSlider } from '../components/ContinentSlider';

export default function Home() {
  return (
    <Box w="100vw">
      <Banner />
      <TravelTypes />

      <Divider w="90px" mx="auto" mt="40px" border="1px" borderColor="dark.text"/>
      <Heading textAlign="center" lineHeight="3rem" mt="14" mb="14" fontSize={["3xl", "3xl", "4xl"]} fontWeight="500" >
        Vamos nessa ? 
        <br />
        Então escolha seu continente
      </Heading>

      <ContinentSlider />
    </Box>
  );
}
