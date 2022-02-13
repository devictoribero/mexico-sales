import { Box, Flex, Text } from "@chakra-ui/react";
import { whatsappAskForPlant } from "../../lib/contact";
import { Hyperlink } from "../Hyperlink";
import { ProductPrice } from "../ProductPrice";
import { ProductTitle } from "../ProductTitle";

export function ProductInfo({
  name,
  price,
  quantity,
  informative_text,
  ...props
}) {
  return (
    <Box>
      <Flex alignItems="flex-start" justifyContent={"space-between"} {...props}>
        <Flex flexDirection="column">
          <ProductTitle mr="20px">{name}</ProductTitle>
          {informative_text && <Text fontSize="xs">{informative_text}</Text>}
        </Flex>
        <ProductPrice>{price}</ProductPrice>
      </Flex>
      <Hyperlink fontSize="xs" display="block" href={whatsappAskForPlant(name)}>
        Pedir por whatsapp
      </Hyperlink>
    </Box>
  );
}
