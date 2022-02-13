import {
  Flex,
  Modal,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { whatsappAskForPlant } from "../../lib/contact";
import { ProductInfo } from "../ProductInfo";
import { ProductMedia } from "../ProductMedia";

export const Product = ({
  name,
  images = [],
  quantity,
  price,
  informative_text,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex key={name} flexDirection={"column"}>
      <ProductMedia onClick={onOpen} images={images} height="350px" />
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
            <ProductMedia onClick={onOpen} images={images} showZoomIn={false} />
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
