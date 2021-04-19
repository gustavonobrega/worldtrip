import { Box ,Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, A11y, EffectFade, EffectFlip } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from './Slide';

SwiperCore.use([ Navigation, Pagination, A11y ]);

export function ContinentSlider() {
  return (
    <Box w="100%" maxWidth={1240} mx="auto" h={450} mb="10" >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >

        <SwiperSlide>
          <Slide image="./continents/europe.png"  slug="europe" continent="Europe" description="O continente mais antigo" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image="./continents/asia.jpeg" slug="asia" continent="Asia" description="O maior dos continentes" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image="./continents/oceania.jpg" slug="oceania" continent="Oceania" description="O continente mais isolado do mundo" />
        </SwiperSlide>
      </Swiper>
    </Box>

  );
}

