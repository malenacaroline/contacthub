import * as React from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Button
} from "@chakra-ui/react";
import { Inputs } from "./form";
import NextLink from "next/link";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export const TableContact = (props: { contacts: Inputs[] }) => {
  console.log("table");
  console.log(props.contacts);
  return (
    <TableContainer
      border="2px"
      borderColor="gray.200"
      borderRadius="lg"
      padding={4}
    >
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.contacts.map((contact, index) => (
            <Tr key={index}>
              <Td>{contact.firstname}</Td>
              <Td>{contact.lastname}</Td>
              <Td>{contact.email}</Td>
              <Td>
                <Flex>
                  <NextLink href={`/contacts/edit?email=${contact.email}`} passHref>
                    <Button colorScheme="teal" mr={4}>
                      <EditIcon />
                    </Button>
                  </NextLink>

                  <NextLink href="/contacts/add" passHref>
                    <Button colorScheme="red">
                      <DeleteIcon/>
                    </Button>
                  </NextLink>

                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
