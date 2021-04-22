import { Flex, Heading, Text, Icon, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from "@chakra-ui/react";

import { IconBaseProps } from 'react-icons';

interface InfoProps {
  quantity: string;
  info: string;
  icon?: React.ComponentType<IconBaseProps>
}

export function Infos({ quantity, info, icon }: InfoProps) {
  return (
  <Flex flexDir="column" align={['flex-start', "center"]}>
    <Heading  fontSize={["3xl","5xl"]} color="highlight" fontWeight="600">{quantity}</Heading>
    <Text fontSize={["1rem","1.5rem"]} fontWeight="600" >
      {info}

      {icon && (

        <Popover>
          <PopoverTrigger>
            <span>
              <Icon 
                as={icon} 
                cursor="pointer"
                w="4" 
                h="4" 
                ml="5px"
                color="light.info"
              />
            </span>
          </PopoverTrigger>
          <PopoverContent bg="dark.text" color="highlight" >
            <PopoverArrow bg="dark.text" />
            <PopoverCloseButton/>
            <PopoverHeader fontSize="lg" borderColor="highlight" >Cidades</PopoverHeader>
            <PopoverBody fontSize="1rem">Londres, Paris, Roma, Praga, Amsterdã</PopoverBody>
          </PopoverContent>
      </Popover>
      )}
    </Text>

  </Flex>
  );
}