import { Box, Button, Img, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { DynamicRender } from "../LoadingProduct/DynamicRender";

const ButtonPrevious = (props) => (
  <IconButton {...props} colorScheme={"blackAlpha"}>
    <ArrowBackIcon />
  </IconButton>
);

const ButtonNext = (props) => (
  <IconButton {...props} colorScheme={"blackAlpha"}>
    <ArrowForwardIcon />
  </IconButton>
);

export function ProductMedia({
  onClick,
  images,
  height = "auto",
  showZoomIn = true,
}) {
  const hasManyImages = images.length > 1;
  const [imageIndexSelected, setImageIndexSelected] = useState(0);

  if (!images?.length || images.length === 0) {
    return (
      <Box
        alignItems="center"
        background="gray.50"
        borderRadius="10px"
        color="#b5b5b5"
        display="flex"
        fontSize="24px"
        fontWeight="600"
        height="100px"
        justifyContent="center"
        maxHeight="100px"
        textTransform="uppercase"
        width="100%"
      >
        Pedir foto
      </Box>
    );
  }

  const showPreviousButton = hasManyImages && imageIndexSelected > 0;
  const handleOnButtonPreviousClick = (e) => {
    e.stopPropagation();
    setImageIndexSelected((old) => old - 1);
  };

  const showNextButton =
    hasManyImages && imageIndexSelected < images.length - 1;
  const handleOnNextPreviousClick = (e) => {
    e.stopPropagation();
    setImageIndexSelected((old) => old + 1);
  };

  return (
    <Box
      width="100%"
      backgroundColor="gray.50"
      position="relative"
      height={height}
      onClick={onClick}
    >
      {showZoomIn && (
        <Button
          size="sm"
          position="absolute"
          right={2}
          bottom={2}
          onClick={onClick}
        >
          Ampliar
        </Button>
      )}
      {showPreviousButton && (
        <Box position="absolute" left={2} top="45%">
          <ButtonPrevious size="sm" onClick={handleOnButtonPreviousClick} />
        </Box>
      )}
      <DynamicRender>
        <Img
          borderRadius="10px"
          width="auto"
          height={height}
          objectFit={"cover"}
          maxHeight="100%"
          maxWidth="100%"
          ml="auto"
          mr="auto"
          src={images[imageIndexSelected]}
          _hover={{
            cursor: showZoomIn ? "pointer" : "default",
          }}
        />
      </DynamicRender>
      {showNextButton && (
        <Box position="absolute" right={2} top="45%">
          <ButtonNext size="sm" onClick={handleOnNextPreviousClick} />
        </Box>
      )}
    </Box>
  );
}
