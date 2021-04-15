import { Flex, Box, Image } from '@chakra-ui/react';

export function Header() {
  return(
    <Box 
      as="header" 
      h="6.25rem" 
      width="100%"
    >
      <Flex
        maxWidth={1160}
        h="24" 
        mx="auto"
        align="center"
        justify="center"
      >
        <Image src="logo.svg" alt="Worldtrip logo"/>
      </Flex>
    </Box>
  )
}