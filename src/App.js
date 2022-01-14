// import FlagTableMaster from './components/fl-components/FlagTablemaster'
import MapMaster from './components/worldmap/MapMaster'

import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

function App() {

    return (
          <ChakraProvider theme={theme}>
            <MapMaster/>
          </ChakraProvider>
    )

}
export default App;


// <ChakraProvider theme={theme}>
// <Box textAlign="center" fontSize="xl">
//   <Grid minH="100vh" p={3}>
//     <VStack spacing={8}>
//       <FlagTableMaster/>

//     </VStack>
//   </Grid>
// </Box>
// </ChakraProvider>


// import FlagTableMaster from './components/fl-components/FlagTablemaster'
