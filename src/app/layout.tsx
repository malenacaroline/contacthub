import type { Metadata } from "next";
import { Providers } from "./providers";
import { Container } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "ContactHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Container maxW="4xl">{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
