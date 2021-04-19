import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      w="100%"
      h={338}
      bgImage="url('/banner.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex maxWidth={1160} mx="auto" align="center" justify="space-between" >
        <Box maxWidth={524}>
          <Text as="h2" fontSize="2.25rem" color="light.text" fontWeight="500">
            5 Continentes, 
            <br/> 
            infinitas possibilidades.
          </Text>
          <Text
            fontSize="1.25rem"
            color="light.info"
            mt="5"
          >
            Chegou a hora de tirar do papel a viagem que voçê sempre sonhou.
          </Text>
        </Box>
        <Image src="airplane.svg" alt="Avião" position="relative" top="20" />
      </Flex>
    </Box>
  );
}