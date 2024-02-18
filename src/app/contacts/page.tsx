"use client";
import NextLink from "next/link";
import { Box, Button } from "@chakra-ui/react";
import { TableContact } from "../components/table";
import { Inputs } from "../components/form";
import { AddIcon } from "@chakra-ui/icons";
import { ROUTES } from "../routes";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  let lsContacts: Inputs[] = [];

  if (typeof window !== "undefined") {
    lsContacts = JSON.parse(localStorage.getItem("contacts") || "[]");
  }

  console.log(lsContacts);

  return (
    <div>
      <Box mt={4}>
        <NextLink href={`${pathname}${ROUTES.Add}`} passHref>
          <Button colorScheme="teal" mb={4}>
            <AddIcon mr={2} />
            Add Contact
          </Button>
        </NextLink>
        <TableContact contacts={lsContacts} />
      </Box>
    </div>
  );
}
