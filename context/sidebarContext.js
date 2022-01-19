import { createContext, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

const SidebarContext = createContext(null);
export const useSidebarAuth = () => useContext(SidebarContext);

export default function SidebarContextProvider({ children }) {
  const sidebarState = useDisclosure();

  return (
    <SidebarContext.Provider value={sidebarState}>
      {children}
    </SidebarContext.Provider>
  );
}
