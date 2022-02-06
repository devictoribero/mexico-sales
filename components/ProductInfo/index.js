import { Flex } from "@chakra-ui/react";
import { ProductPrice } from "../ProductPrice";
import { ProductTitle } from "../ProductTitle";
import { Quantity } from "../Quantity";

export function ProductInfo({ name, price, quantity, ...props }) {
  return (
    <Flex
      flexWrap="wrap"
      alignItems="center"
      justifyContent={"space-between"}
      {...props}
    >
      <Flex flexWrap="wrap" alignItems="center">
        <ProductTitle>
          {name} <Quantity ml={2}>x{quantity}</Quantity>
        </ProductTitle>
      </Flex>
      <ProductPrice>{price} MXN</ProductPrice>
    </Flex>
  );
}
