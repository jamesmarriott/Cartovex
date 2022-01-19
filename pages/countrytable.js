import FlagTableMaster from '../src/components/fl-components/FlagTablemaster'
import WithSubnavigation from "../src/components/nav/Nav"

import * as React from "react"
import {
  ChakraProvider,
  theme,
  Box,
  Grid,
  VStack,

} from "@chakra-ui/react"

function App() {

    return (
        
        <ChakraProvider theme={theme}>
                    <WithSubnavigation/>
        <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
            <FlagTableMaster/>
            </VStack>
        </Grid>
        </Box>
        </ChakraProvider>
    )
}
export default App;
