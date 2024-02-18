import type { Metadata } from "next";
import { Providers } from "./providers";
import { Container } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "ContactHub",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <Container maxW="4xl" mt={4}>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
