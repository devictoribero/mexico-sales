import { Flex, Box } from "@chakra-ui/react";

export const LoadingProduct = () => (
  <Flex flexDirection={"column"}>
    <Box
      width="100%"
      backgroundColor="gray.50"
      position="relative"
      height="350px"
    />
    <Box
      mt="10px"
      width="100px"
      backgroundColor="gray.200"
      position="relative"
      height="20px"
    />
    <Box
      mt="5px"
      width="50px"
      backgroundColor="gray.100"
      position="relative"
      height="15px"
    />
  </Flex>
);
