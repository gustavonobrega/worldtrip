import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelIconsProps {
  image: string;
  text: string;
}

export function TravelIcons({ image, text }: TravelIconsProps) {
  return (
    <Flex flexDir="column" align="center" >
      <Image 
        src={image} 
        alt={text}
      />
      <Text fontSize="1.5rem" fontWeight="600" mt="6">{text}</Text>
  </Flex>
  );
}