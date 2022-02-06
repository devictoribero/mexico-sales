import { Tag } from "@chakra-ui/react";

export function Quantity({ children, ...props }) {
  return (
    <Tag
      colorScheme="green"
      fontSize="xs"
      fontWeight="700"
      minHeight="15px"
      px={1}
      py={0.5}
      {...props}
    >
      {children}
    </Tag>
  );
}
