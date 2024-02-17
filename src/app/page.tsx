import Link from "next/link";
import { Box, Link as LinkUI } from "@chakra-ui/react";
import { Table } from "./components/table";

export default function Home() {
  return (
    <div>
      <Box mt={4}>
        <LinkUI as={Link} href="/addContact" colorScheme="blue">
          Add Contact
        </LinkUI>
        <Table />
      </Box>
    </div>
  );
}
