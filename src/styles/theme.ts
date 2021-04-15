import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: { 
    highlight: "#FFBA08",
    dark: {
      "text": "#47585B",
      "info": "#999999",
    },
    light: {
      "text": "#F5F8FA",
      "info": "#DADADA",
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'light.text',
        color: 'dark.text'
      },
    },
  },
})