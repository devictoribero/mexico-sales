import { Flex } from "@chakra-ui/react";
import { ProductInfo } from "../ProductInfo";
import { ProductMedia } from "../ProductMedia";

export const Product = ({ name, images, quantity, price }) => (
  <Flex key={name} flexDirection={"column"}>
    <ProductMedia images={images} />
    <ProductInfo mt={2} name={name} price={price} quantity={quantity} />
  </Flex>
);
