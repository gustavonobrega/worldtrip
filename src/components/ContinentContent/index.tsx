import { Box, Flex, Grid, Text } from "@chakra-ui/react";

import { RiInformationLine } from 'react-icons/ri';
import { Infos } from './Infos';

export function ContinentContent() {
  return (
    <Box w="100%" mt={["10", "20"]} maxWidth="1160px" px={["20px", "20px", "0"]} mx="auto">
      <Flex align="center" display={["block", "block", "flex"]} justify="space-between" >
        <Text maxWidth="600px" fontSize={["1rem","1.5rem"]} textAlign="justify" > 
          A Europa é, por convenção, um dos seis continentes do mundo. 
          Compreendendo a península ocidental da Eurásia, 
          a Europa geralmente divide-se da Ásia a leste pela divisória de águas 
          dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Grid 
          mt={["5", "5", "0"]} 
          display={["flex", "flex"]} 
          templateColumns={["1fr", "1fr", "1fr 1fr", "repeat(3, 1fr)"]} 
          gap={[10, 16]}
        >
          <Infos quantity="50" info="países" />
          <Infos quantity="60" info="línguas" />
          <Infos quantity="27" info="cidades +100" icon={RiInformationLine} />
        </Grid>
      </Flex>
    </Box>
  );
}