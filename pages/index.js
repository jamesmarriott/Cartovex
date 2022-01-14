import CallToActionWithAnnotation from '../src/components/landing/landing.js'
import * as React from "react"
import {
  ChakraProvider,
  theme,
  Box,
  Grid,
  VStack,

} from "@chakra-ui/react"

function HomePage() {
  return (          
  <ChakraProvider theme={theme}>
     <CallToActionWithAnnotation/>
  </ChakraProvider>
  )
}

export default HomePage