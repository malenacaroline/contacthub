"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ContactProvider } from "./ContactContext";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ChakraProvider>
      <ContactProvider>{children}</ContactProvider>
    </ChakraProvider>
  );
}
