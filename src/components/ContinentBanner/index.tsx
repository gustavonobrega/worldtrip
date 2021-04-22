import { Box, Text } from '@chakra-ui/react';

export function ContinentBanner() {
  return (
    <Box
      w="100%"
      h={500}
      bgImage={"url(/images/banner-europe.png)"}
      bgRepeat="no-repeat"
      bgPosition="bottom"
      bgSize="cover"
    >
      <Text 
        maxWidth="1160px" 
        mx="auto"
        fontSize="3rem"
        fontWeight="600"
        color="light.text"
        pt={["200px","369px"]}
        pl={["110px","18px"]}
      >
        Europa
      </Text>
    </Box>
  )
}