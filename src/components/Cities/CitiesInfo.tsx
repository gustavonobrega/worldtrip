import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CitiesProps {
  city: string;
  country: string;
  image: string;
  icon: string
}

export function CitiesInfo({ city, country, image, icon }: CitiesProps) {
  return (
    <Box 
      height="279px" 
      width="256px" 
      border="1px"
      borderColor="highlight"
      borderRadius="4px"  
    >
      <Image src={image} alt={city}/>

      <Flex p="6" align="center" justify="space-between" >
        <Flex flexDir="column">
          <Text fontWeight="500" fontSize="1.25rem">
            {city}
          </Text>
          <Text mt="1" color="dark.info" fontSize="1rem" >
            {country}
          </Text>
        </Flex>
        <Image src={icon} alt={country}/>
      </Flex>
    </Box>
  );
}