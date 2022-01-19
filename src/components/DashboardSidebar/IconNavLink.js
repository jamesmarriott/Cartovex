import Link from "next/link";
import {
  LinkBox,
  LinkOverlay,
  Tooltip,
  Icon,
  IconButton,
} from "@chakra-ui/react";

export default function IconNavLink({ name, active, href, icon }) {
  return (
    <Tooltip hasArrow label={name} placement="right">
      <LinkBox display="flex" justifyContent="center">
        <IconButton
          aria-label={name}
          variant={active ? "solid" : "ghost"}
          boxSize="40px"
          alignSelf="center"
          _focus={{ shadow: "none" }}
          icon={
            <Link href={href || ""} passHref>
              <LinkOverlay>
                <Icon as={icon} fontSize="lg" />
              </LinkOverlay>
            </Link>
          }
        />
      </LinkBox>
    </Tooltip>
  );
}
