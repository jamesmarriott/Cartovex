import Link from "next/link";
import {
  Icon,
  LinkBox,
  LinkOverlay,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function FullNavLink({ active, icon, href, name }) {
  const activeColor = "white";
  const activeProps = {
    color: activeColor,
    borderRightColor: active && activeColor,
    bg: "blackAlpha.300",
  };

  return (
    <LinkBox>
      <Stack
        direction="row"
        cursor="pointer"
        px={8}
        py={4}
        spacing={4}
        alignItems="center"
        fontWeight="semibold"
        transition="all .4s ease-in-out"
        borderRightWidth="3px"
        borderRightColor="transparent"
        _hover={activeProps}
        {...(active && activeProps)}
      >
        <Icon as={icon} fontSize="xl" />
        <Link href={href || ""} passHref>
          <LinkOverlay>
            <Text>{name}</Text>
          </LinkOverlay>
        </Link>
        <Spacer />
      </Stack>
    </LinkBox>
  );
}
