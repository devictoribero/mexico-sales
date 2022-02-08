import { Heading } from "@chakra-ui/react";

export function ProductTitle({ children, ...props }) {
  return (
    <Heading size="xs" color="gray.800" lineHeight={1} {...props}>
      {children}
    </Heading>
  );
}
