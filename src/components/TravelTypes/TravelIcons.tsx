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
        w={["16", "16", "85px"]}
        h={["16", "16", "85px"]}
      />
      <Text fontSize={["1.3rem", "1.3rem", "1.5rem"]} fontWeight="600" mt="6">{text}</Text>
  </Flex>
  );
}