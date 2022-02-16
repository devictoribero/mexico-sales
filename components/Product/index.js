import {
  Flex,
  Box,
  Modal,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import styled from "styled-components";
import { whatsappAskForPlant } from "../../lib/contact";
import { ProductInfo } from "../ProductInfo";
import { ProductMedia } from "../ProductMedia";

const StatusOverlay = styled(Box)`
  background-color: white;
  bottom: 0;
  z-index: 1;
  opacity: 0.75;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`;

export const Product = ({
  name,
  images = [],
  quantity,
  price,
  informative_text,
  status,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex key={name} flexDirection={"column"} position="relative">
      {status !== "disponible" && (
        <StatusOverlay>
          <Flex height="100%" alignItems={"center"} justifyContent="center">
            <Text fontWeight="700" fontSize="32px">
              {status}
            </Text>
          </Flex>
        </StatusOverlay>
      )}
      <ProductMedia
        onClick={onOpen}
        images={images}
        height={{ base: "250px", md: "350px" }}
      />
      <ProductInfo
        mt={2}
        name={name}
        price={price}
        quantity={quantity}
        informative_text={informative_text}
      />
      <Modal isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex maxHeight="50vh">
              <ProductMedia
                onClick={onOpen}
                images={images}
                showZoomIn={false}
              />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose} mr={3}>
              Cerrar
            </Button>
            <Button as="a" href={whatsappAskForPlant(name)} colorScheme="blue">
              Pedir por whatsapp
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
