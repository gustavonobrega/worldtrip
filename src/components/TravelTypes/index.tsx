import {  Grid  } from "@chakra-ui/react";

import { TravelIcons } from './TravelIcons';

export function TravelTypes() {
  return (
      <Grid width="100%" mt="20" py="10" maxWidth={1160} mx="auto" templateColumns="repeat(5, 1fr)" gap={6} >
        <TravelIcons image="./icons/cocktail.svg" text="vida noturna"/>
        <TravelIcons image="./icons/surf.svg" text="praia"/>
        <TravelIcons image="./icons/building.svg" text="moderno"/>
        <TravelIcons image="./icons/museum.svg" text="clássico"/>
        <TravelIcons image="./icons/earth.svg" text="e mais..."/>
      </Grid>
  );
}