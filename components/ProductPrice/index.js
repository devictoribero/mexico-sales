import { Text } from "@chakra-ui/react";

export function ProductPrice({ children, ...props }) {
  return (
    <Text fontSize="sm" fontWeight="700" color="gray.500" {...props}>
      {children}
    </Text>
  );
}
