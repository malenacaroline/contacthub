import { Box } from "@chakra-ui/react";
import Form from "../components/form";

export default function AddContact() {
  return (
    <Box pt={4}>
      <Form isAddMode/>
    </Box>
  );
}
