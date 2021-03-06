import {
  Button,
  Flex,
  Box,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { Product } from "../components/Product";
import { LoadingProduct } from "../components/LoadingProduct";
import { useGoogleSheet } from "../hooks/useGoogleSheet";
import { whatsappHref } from "../lib/contact";

const Hyperlink = ({ children, ...props }) => (
  <Link isExternal color="blue.500" textDecoration="underline" {...props}>
    {children}
  </Link>
);
const emptyProducts = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 113, 14, 15, 16, 17, 18, 19,
];

export default function Home() {
  const { products, categories, selectedCategory, selectCategory } =
    useGoogleSheet();

  return (
    <Layout title="Venta de artículos para la casa, cocina, mascotas, deporte, etc.">
      <Box as="header" mt={10}>
        <Heading size="xl">Venta de artículos de Gabi y Victor</Heading>
        <Text fontSize="lg" mt={6}>
          Todos nuestros artículos han recibido el amor de Victor y mío.
        </Text>
        <Text fontSize="lg" mt={2} mb={12}>
          <Hyperlink href={whatsappHref()} mr="5px">
            Envíame un WhatsApp
          </Hyperlink>
          con la foto del artículo o la planta que te interese tener en casa 🐈‍⬛
          🌱 🐈.
        </Text>
      </Box>

      <Box as="main">
        <Flex flexDirection="row" flexWrap="wrap" mb="24px">
          <Button
            size="md"
            colorScheme={!selectedCategory ? "green" : "gray"}
            onClick={() => selectCategory(null)}
            mr="4px"
            mb="4px"
          >
            Todas las categorias
          </Button>
          {categories?.map((c) => (
            <Button
              key={c}
              colorScheme={selectedCategory === c ? "green" : "gray"}
              size="md"
              onClick={() => selectCategory(c)}
              mr="4px"
              mb="4px"
            >
              {c}
            </Button>
          ))}
        </Flex>

        <SimpleGrid
          columns={{ base: 2, lg: 3, xl: 4 }}
          columnGap={{ base: 2, md: 4 }}
          rowGap={6}
        >
          {!products
            ? emptyProducts.map((product, index) => (
                <LoadingProduct key={`${product.name}_${index}`} />
              ))
            : products?.map((product, index) => (
                <Product
                  key={`${product.name}_${index}`}
                  name={product.name}
                  images={product?.images}
                  quantity={product.quantity}
                  price={product.price}
                  informative_text={product.informative_text}
                  status={product.status}
                />
              ))}
        </SimpleGrid>
      </Box>
    </Layout>
  );
}
