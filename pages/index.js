import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { Product } from "../components/Product";

const products = {
  plants: [
    {
      name: "Sansevieria",
      quantity: 2,
      price: 233,
      images: [
        "images/plants/plant-1.jpeg",
        "images/plants/plant-2.jpeg",
        "images/plants/plant-3.jpeg",
      ],
    },
    {
      category: "plants",
      name: "Sansevieria",
      quantity: 2,
      price: 233,
      images: ["images/plants/plant-1.jpeg"],
    },
    {
      category: "plants",
      name: "Sansevieria",
      quantity: 2,
      price: 233,
      images: [
        "images/plants/plant-1.jpeg",
        "images/plants/plant-2.jpeg",
        "images/plants/plant-3.jpeg",
      ],
    },
    {
      category: "plants",
      name: "Sansevieria",
      quantity: 2,
      price: 233,
      images: [
        "images/plants/plant-1.jpeg",
        "images/plants/plant-2.jpeg",
        "images/plants/plant-3.jpeg",
      ],
    },
    {
      category: "plants",
      name: "Sansevieria",
      quantity: 2,
      price: 233,
      images: [
        "images/plants/plant-1.jpeg",
        "images/plants/plant-2.jpeg",
        "images/plants/plant-3.jpeg",
      ],
    },
    {
      category: "plants",
      name: "Sansevieria",
      quantity: 2,
      price: 233,
      images: [
        "images/plants/plant-1.jpeg",
        "images/plants/plant-2.jpeg",
        "images/plants/plant-3.jpeg",
      ],
    },
    {
      category: "plants",
      name: "Sansevieria",
      quantity: 2,
      price: 233,
      images: [
        "images/plants/plant-1.jpeg",
        "images/plants/plant-2.jpeg",
        "images/plants/plant-3.jpeg",
      ],
    },
    {
      category: "plants",
      name: "Sansevieria",
      quantity: 2,
      price: 233,
      images: [
        "images/plants/plant-1.jpeg",
        "images/plants/plant-2.jpeg",
        "images/plants/plant-3.jpeg",
      ],
    },
    {
      category: "plants",
      name: "Sansevieria",
      quantity: 2,
      price: 233,
      images: [
        "images/plants/plant-1.jpeg",
        "images/plants/plant-2.jpeg",
        "images/plants/plant-3.jpeg",
      ],
    },
    {
      category: "plants",
      name: "Sansevieria",
      quantity: 2,
      price: 233,
      images: [
        "images/plants/plant-1.jpeg",
        "images/plants/plant-2.jpeg",
        "images/plants/plant-3.jpeg",
      ],
    },
    {
      category: "plants",
      name: "Sansevieria",
      quantity: 2,
      price: 233,
      images: [
        "images/plants/plant-1.jpeg",
        "images/plants/plant-2.jpeg",
        "images/plants/plant-3.jpeg",
      ],
    },
    {
      category: "plants",
      name: "Sansevieria",
      quantity: 2,
      price: 233,
      images: [
        "images/plants/plant-1.jpeg",
        "images/plants/plant-2.jpeg",
        "images/plants/plant-3.jpeg",
      ],
    },
    {
      category: "plants",
      name: "Sansevieria",
      quantity: 2,
      price: 233,
      images: [
        "images/plants/plant-1.jpeg",
        "images/plants/plant-2.jpeg",
        "images/plants/plant-3.jpeg",
      ],
    },
    {
      category: "plants",
      name: "Sansevieria",
      quantity: 2,
      price: 233,
      images: [
        "images/plants/plant-1.jpeg",
        "images/plants/plant-2.jpeg",
        "images/plants/plant-3.jpeg",
      ],
    },
  ],
};

export default function Home() {
  return (
    <Layout title="Venta de plantas de Gabi y Victor">
      <Box as="header" mt={10}>
        <Heading size="xl">Venta de plantas de Gabi y Victor</Heading>
        <Text fontSize="lg" mt={6} mb={12}>
          Todas las plantas han crecido con nuestro amor. Tomar una captura de
          la planta que os gusta y hacerselo saber a Gabriela
        </Text>
      </Box>

      <Box as="main">
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}
          columnGap={{ base: 2, md: 4 }}
          rowGap={6}
        >
          {products.plants.map((product) => (
            <Product
              key={product.name}
              name={product.name}
              images={product.images}
              quantity={product.quantity}
              price={product.price}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  );
}
