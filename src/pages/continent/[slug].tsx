import { Box } from '@chakra-ui/react';

import { ContinentBanner } from '../../components/ContinentBanner';
import { ContinentContent } from '../../components/ContinentContent';
import { Cities } from '../../components/Cities'

export default function Continent() {
  return (
    <>
      <ContinentBanner />
      <ContinentContent />
      <Cities />
    </>
  )
}