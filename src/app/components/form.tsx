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
  Icon,
} from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import { useContactContext } from "../ContactContext";

type Inputs = {
  email: string;
  firstname: string;
  lastname: string;
};

export default function Form(props: { isAddMode?: boolean }) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const contactContext = useContactContext();

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    console.log("onSubmit called");
    contactContext?.setContact(values);
    console.log(contactContext);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center>
        <Text as="h1" fontSize="3xl" fontWeight="bold" color="teal.500">
          {props.isAddMode ? "Add User" : "Edit User"}
        </Text>
      </Center>
      <FormControl isInvalid={Boolean(errors.email)} pt={4}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          placeholder="Email"
          {...register("email", {
            required: "This is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
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
        {props.isAddMode ? "Add User" : "Save Changes"}
      </Button>
    </form>
  );
}
