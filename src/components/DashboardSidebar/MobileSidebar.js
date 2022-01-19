import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  Stack,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import FullNavLink from "./FullNavLink";
// import { RiAdminFill } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { useSidebarAuth } from "@context/sidebarContext";

export default function MobileSidebar() {
  const router = useRouter();
  const { isOpen, onClose } = useSidebarAuth();

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
    //eslint-disable-line
  }, [onClose, router.events]);
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay display={["initial", , "none"]}>
        <DrawerContent py={12} bg="gray.900">
          <Stack spacing={2} fontSize="sm">
            <DrawerCloseButton />
            <FullNavLink
              active={router.pathname === "/"}
              name="Home"
              href="/"
              icon={IoHomeSharp}
            />
          </Stack>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
