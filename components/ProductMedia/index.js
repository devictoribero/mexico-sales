import { Box, Img, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

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

export function ProductMedia({ images }) {
  const hasManyImages = images.length > 1;
  const [imageIndexSelected, setImageIndexSelected] = useState(0);

  if (!images?.length || images.length === 0) {
    return (
      <Box
        borderRadius="10px"
        width="100%"
        height="350px"
        maxHeight="350px"
        background="gray.50"
      />
    );
  }

  const showPreviousButton = hasManyImages && imageIndexSelected > 0;
  const handleOnButtonPreviousClick = () => {
    setImageIndexSelected((old) => old - 1);
  };

  const showNextButton =
    hasManyImages && imageIndexSelected < images.length - 1;
  const handleOnNextPreviousClick = () => {
    setImageIndexSelected((old) => old + 1);
  };

  return (
    <Box width="100%" backgroundColor="gray.50" position="relative">
      {showPreviousButton && (
        <Box position="absolute" left={2} top="45%">
          <ButtonPrevious size="sm" onClick={handleOnButtonPreviousClick} />
        </Box>
      )}
      <Img
        borderRadius="10px"
        width="100%"
        height="350px"
        objectFit={"cover"}
        maxHeight="350px"
        src={images[imageIndexSelected]}
      />
      {showNextButton && (
        <Box position="absolute" right={2} top="45%">
          <ButtonNext size="sm" onClick={handleOnNextPreviousClick} />
        </Box>
      )}
    </Box>
  );
}
