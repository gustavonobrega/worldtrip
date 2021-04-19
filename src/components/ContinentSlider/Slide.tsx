import {Flex, Heading, Text} from '@chakra-ui/react';
import Link from 'next/link';

interface SlideProps {
  slug: string;
  image: string;
  continent: string;
  description: string;
}

export function Slide({ image, continent, description, slug }: SlideProps) {
  return (
    <Flex 
      h={450}
      align="center"
      justify="center" 
      bgImage={`url(${image})`}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      textAlign="center"
    >
      <Link href={`/continent/${slug}`} >
        <a>
          <Heading  fontSize="5xl" fontWeight="700" color="light.text" _hover={{ color: 'highlight' }} >
            {continent}
          </Heading>
          <Text fontSize="1.5rem"  fontWeight="700" color="light.info" mt="4" >{description}</Text>
        </a>
      </Link>
    </Flex>
  );
}