import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default function Theme({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
