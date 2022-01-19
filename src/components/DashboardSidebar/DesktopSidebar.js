import { useRouter } from "next/router";
import { Stack } from "@chakra-ui/react";
import FullNavLink from "./FullNavLink";
import IconNavLink from "./IconNavLink";
import { useSidebarAuth } from "@context/sidebarContext";
import { IoHomeSharp } from "react-icons/io5";

export default function Sidebar() {
  const router = useRouter();
  const { isOpen } = useSidebarAuth();
  const NavLink = isOpen ? IconNavLink : FullNavLink;

  return (
    <Stack
      w={isOpen ? "60px" : "300px"}
      transition="width .4s ease-in-out"
      py={8}
      shadow="md"
      minH="full"
      h="90vh"
      spacing={2}
      fontSize="sm"
      display={["none", null, "initial"]}
      overflowX={isOpen ? "initial" : "clip"}
      pos="sticky"
      top="10vh"
      bg="gray.900"
    >
      <NavLink
        active={router.pathname === "/"}
        name="Home"
        href="/"
        icon={IoHomeSharp}
      />
    </Stack>
  );
}
