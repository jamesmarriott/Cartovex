// import FlagTableMaster from './components/fl-components/FlagTablemaster'
import MapMaster from '../src/components/worldmap/MapMaster'

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
