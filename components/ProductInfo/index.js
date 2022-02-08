import { Box, Flex, Text } from "@chakra-ui/react";
import { whatsappHref } from "../../lib/contact";
import { Hyperlink } from "../Hyperlink";
import { ProductPrice } from "../ProductPrice";
import { ProductTitle } from "../ProductTitle";

const productContactText =
  'Hola Gabriela! He visto los disitntos productos de la web y me ha gustado el "{productName}". Aun lo tienes?';
export function ProductInfo({
  name,
  price,
  quantity,
  informative_text,
  ...props
}) {
  const dynamicContactText = productContactText.replace("{productName}", name);
  return (
    <Box>
      <Flex alignItems="flex-start" justifyContent={"space-between"} {...props}>
        <Flex flexDirection="column">
          <ProductTitle mr="20px">{name}</ProductTitle>
          {informative_text && <Text fontSize="xs">{informative_text}</Text>}
        </Flex>
        <ProductPrice>{price}</ProductPrice>
      </Flex>
      <Hyperlink
        fontSize="xs"
        display="block"
        href={whatsappHref(dynamicContactText)}
      >
        Pedir por whatsapp
      </Hyperlink>
    </Box>
  );
}
