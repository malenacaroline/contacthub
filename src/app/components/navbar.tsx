import { Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      padding={4}
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <NextLink href="/" passHref>
          <Link as="span">
            <Text fontSize="2xl" fontWeight="bold">
              ContactHub
            </Text>
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};
