"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ContactProvider } from "@/contacts/context";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ChakraProvider>
      <ContactProvider>{children}</ContactProvider>
    </ChakraProvider>
  );
}
