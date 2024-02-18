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
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ROUTES } from "@/routes";
import { usePathname } from "next/navigation";
import { useContactContext } from "..";

export const ContactList = () => {
  const pathname = usePathname();

  const contactContext = useContactContext();
  if (!contactContext) return;
  const { contacts } = contactContext;

  const deleteContact = (email: string) => {
    localStorage.setItem(
      "contacts",
      JSON.stringify(contacts.filter((contact) => contact.email !== email))
    );
    window.dispatchEvent(new Event('contactStorageEvent'));
  };

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
          {contacts.map((contact, index) => (
            <Tr key={index}>
              <Td>{contact.firstname}</Td>
              <Td>{contact.lastname}</Td>
              <Td>{contact.email}</Td>
              <Td>
                <Flex>
                  <NextLink
                    href={`${pathname}${ROUTES.Edit}?email=${contact.email}`}
                  >
                    <Button colorScheme="teal" mr={4}>
                      <EditIcon />
                    </Button>
                  </NextLink>
                  <Button
                    colorScheme="red"
                    onClick={() => deleteContact(contact.email)}
                  >
                    <DeleteIcon />
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
