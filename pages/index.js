import { Box, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { Product } from "../components/Product";
import { useGoogleSheet } from "../hooks/useGoogleSheet";
import { contactTel, telHref, whatsappHref } from "../lib/contact";

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

const Hyperlink = ({ children, ...props }) => (
  <Link isExternal color="blue.500" textDecoration="underline" {...props}>
    {children}
  </Link>
);

export default function Home() {
  const products = useGoogleSheet();

  return (
    <Layout title="Venta de plantas de Gabi y Victor">
      <Box as="header" mt={10}>
        <Heading size="xl">Venta de plantas de Gabi y Victor</Heading>
        <Text fontSize="lg" mt={6}>
          Todas las cosas han crecido con el amor incondicional de mi Gabriela y
          Victor. Vendemos las cosas porque nos vamos a vivir a otro pais.
        </Text>
        <Text fontSize="lg" mt={2} mb={12}>
          Envieme fotos de los productos que le interesen
          <Hyperlink href={whatsappHref()} ml="5px">
            por whatsapp
          </Hyperlink>{" "}
          {/* o
          <Hyperlink href={telHref()} ml="5px">
            llameme al {contactTel}
          </Hyperlink> */}
          .
        </Text>
      </Box>

      <Box as="main">
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}
          columnGap={{ base: 2, md: 4 }}
          rowGap={6}
        >
          {products?.map((product) => (
            <Product
              key={product.name}
              name={product.name}
              images={product?.images}
              quantity={product.quantity}
              price={product.price}
              informative_text={product.informative_text}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  );
}
