import Link from "next/link";
import { Box, Link as LinkUI } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Box mt={4}>
        <LinkUI as={Link} href="/addContact" colorScheme="blue">
          Add Contact
        </LinkUI>
      </Box>
    </div>
  );
}
