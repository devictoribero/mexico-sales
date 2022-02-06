import { Container } from "@chakra-ui/react";
import Head from "next/head";

export function Layout({ title, children }) {
  return (
    <Container
      px={4}
      maxW={{
        base: "container.sm",
        sm: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Container>
  );
}
