"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Text,
  Button,
  Center,
  FormLabel,
  Input,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useContactContext, ContactType, useContactsCRUD } from "@/contacts";
import { ROUTES } from "@/routes";
import { useEffect } from "react";

export function AddEditContact() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<ContactType>();

  const router = useRouter();

  const searchParams = useSearchParams();
  const emailContact = searchParams.get("email");
  const isEdit = Boolean(emailContact);

  const contactContext = useContactContext();
  if (!contactContext) return;
  const { contacts } = contactContext;

  const { addContact, editContact } = useContactsCRUD();

  useEffect(() => {
    if (!isEdit) return;
    const editContact = contacts.find(
      (contact) => contact.email === emailContact
    );
    if (!editContact) return;
    setValue("email", editContact.email);
    setValue("firstname", editContact.firstname);
    setValue("lastname", editContact.lastname);
  }, [isEdit]);

  const validateEmail = (value: string) => {
    if (isEdit) return true;
    const emailExists = contacts.some((contact) => contact.email === value);
    if (emailExists) return "Email already exists";
    return true;
  };

  const onSubmit: SubmitHandler<ContactType> = (newContact) => {
    if (isEdit) editContact(newContact);
    else addContact(newContact);
    router.push(ROUTES.Contacts);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center>
        <Text as="h1" fontSize="3xl" fontWeight="bold" color="teal.500">
          {isEdit ? "Edit User" : "Add User"}
        </Text>
      </Center>
      <FormControl isInvalid={Boolean(errors.email)} pt={4} isDisabled={isEdit}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "This is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
            validate: validateEmail,
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.firstname)} pt={4}>
        <FormLabel htmlFor="firstname">First Name</FormLabel>
        <Input
          id="firstname"
          placeholder="Firstname"
          {...register("firstname", {
            required: "This is required",
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 25, message: "Maximum length should be 25" },
          })}
        />
        <FormErrorMessage>
          {errors.firstname && errors.firstname.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.lastname)} pt={4}>
        <FormLabel htmlFor="lastname">Last Name</FormLabel>
        <Input
          id="lastname"
          placeholder="Lastname"
          {...register("lastname", {
            required: "This is required",
            minLength: {
              value: 2,
              message: "Minimum length should be 2",
            },
            maxLength: { value: 30, message: "Maximum length should be 30" },
          })}
        />
        <FormErrorMessage>
          {errors.lastname && errors.lastname.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        width="100%"
        colorScheme="teal"
        isLoading={isSubmitting}
        type="submit"
        mt={4}
      >
        {isEdit ? "Save Changes" : "Add User"}
      </Button>
    </form>
  );
}
