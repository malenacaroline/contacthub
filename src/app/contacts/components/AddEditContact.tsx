"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useContactContext, ContactType } from "@/contacts";

export function AddEditContact() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<ContactType>();

  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email");
  const isEdit = Boolean(emailParam);

  const contactContext = useContactContext();

  let getContact: ContactType | undefined;
  let lsContacts: ContactType[] = [];

  useEffect(() => {
    if (typeof window !== "undefined") {
      lsContacts = JSON.parse(localStorage.getItem("contacts") || "[]");
      getContact = lsContacts.find((item) => item["email"] === emailParam);
      if (getContact) {
        setValue("email", getContact.email);
        setValue("firstname", getContact.firstname);
        setValue("lastname", getContact.lastname);
      }
    }
  }, [emailParam]);

  const validateEmail = (value: string) => {
    lsContacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    console.log("validateEmail called");
    console.log(value);
    console.log(lsContacts);
    const emailExists = lsContacts.some((contact) => contact.email === value);
    console.log(emailExists);
    if (!getContact && emailExists) {
      return "Email already exists";
    }
    return true;
  };

  const onSubmit: SubmitHandler<ContactType> = (values) => {
    console.log("onSubmit called");
    contactContext?.setContact(values);
    console.log(contactContext);

    if (lsContacts) {
      lsContacts.push(values);
      localStorage.setItem("contacts", JSON.stringify(lsContacts));
    } else {
      localStorage.setItem("contacts", JSON.stringify(values));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center>
        <Text as="h1" fontSize="3xl" fontWeight="bold" color="teal.500">
          {isEdit ? "Edit User" : "Add User"}
        </Text>
      </Center>
      <FormControl isInvalid={Boolean(errors.email)} pt={4}>
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
