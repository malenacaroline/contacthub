"use client";
import NextLink from "next/link";
import { Box, Button } from "@chakra-ui/react";
import { ContactList } from "@/contacts/components";
import { AddIcon } from "@chakra-ui/icons";
import { ROUTES } from "@/routes";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <Box>
      <NextLink href={`${pathname}${ROUTES.Add}`}>
        <Button colorScheme="teal" mb={4}>
          <AddIcon mr={2} />
          Add Contact
        </Button>
      </NextLink>
      <ContactList />
    </Box>
  );
}
