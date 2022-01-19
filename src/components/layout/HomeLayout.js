import { Container, Image} from "@chakra-ui/react";
import HomeHeader from "../headers/HomeHeader"
import WithSubnavigation from "../nav/Nav"

export default function HomeLayout({ children }) {
  return (
    
      <Container maxW={"100vw"} p={0}>
        <WithSubnavigation/>
      <Image alt="Hero Image" fit="cover" position="absolute"  align="center" w="100%" h="100%" opacity="10%"
        src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
        <HomeHeader />
        {children}
      </Container>
  );
}