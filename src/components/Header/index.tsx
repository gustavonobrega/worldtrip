import { Flex, Box, Image, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Link from 'next/link';


export function Header() {
  const { asPath } = useRouter();
  const continentPage = asPath != '/';

  return (
    <Box 
      as="header" 
      h="6.25rem" 
      width="100%"
    >

      {continentPage ? (
        <Flex
          maxWidth={1160}
          h="24" 
          mx="auto"
          align="center"
          justify="center"
          position="relative"
        >
          <Link href="/" >
            <Icon  position="absolute" left={0} cursor="pointer" as={RiArrowLeftSLine} w="8" h="8" />
          </Link>
          <Image src="/logo.svg" alt="Worldtrip logo"/>
        </Flex>
      ) : (
        <Flex
          maxWidth={1160}
          h="24" 
          mx="auto"
          align="center"
          justify="center"
        >
          <Image src="/logo.svg" alt="Worldtrip logo"/>
        </Flex>
      )}
    </Box>
  )
}