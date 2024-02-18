"use client";
import NextLink from "next/link";
import { Button, Stack } from "@chakra-ui/react";
import { ContactList } from "@/contacts/components";
import { AddIcon } from "@chakra-ui/icons";
import { ROUTES } from "@/routes";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <Stack spacing={4}>
      <Button
        as={NextLink}
        href={`${pathname}${ROUTES.Add}`}
        alignSelf="start"
        colorScheme="teal"
      >
        <AddIcon mr={2} />
        Add Contact
      </Button>
      <ContactList />
    </Stack>
  );
}
