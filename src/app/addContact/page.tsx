"use client";
import { Box, Button } from "@chakra-ui/react";
import Form from "../components/form";
import { useContactContext } from "../ContactContext";

export default function AddContact() {
  const contactContext = useContactContext();

  console.log(contactContext);

  return (
    <Box pt={4}>
      <Button onClick={() => contactContext?.setContact("Hello")}>Click me</Button>
      <Form isAddMode/>
    </Box>
  );
}
