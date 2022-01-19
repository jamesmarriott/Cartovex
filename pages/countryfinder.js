import MapMaster from '../src/components/worldmap/MapMaster'
import WithSubnavigation from "../src/components/nav/Nav"

import * as React from "react"
import {
  Container
} from "@chakra-ui/react"


function App() {

    return (
      <Container maxW={"100vw"} p={0}>
        <WithSubnavigation/>
        <MapMaster/>
      </Container>
    )
}
export default App;
