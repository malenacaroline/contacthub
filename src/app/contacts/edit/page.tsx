"use client";
import { Box } from "@chakra-ui/react";
import Form from "../../components/form";
import { useContactContext } from "../../ContactContext";

export default function EditContact() {
  const contactContext = useContactContext();

  console.log(contactContext);
  return (
    <Box pt={4}>
      <Form />
    </Box>
  );
}
