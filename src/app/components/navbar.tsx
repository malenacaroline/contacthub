import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <NextLink href="/" passHref>
          <Link>
            <b>ContactHub</b>
          </Link>
        </NextLink>
      </Flex>

      <Flex align="center" justify="flex-end">
        <NextLink href="/addContact" passHref>
          <Link mr={4}>Add</Link>
        </NextLink>
        <NextLink href="/editContact" passHref>
          <Link>Edit</Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};