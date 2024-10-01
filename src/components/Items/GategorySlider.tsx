import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemCard from "./ItemCard";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import resizeWindow from "../../services/resizeWindow";
interface Props {
  items: { name: string; images: string[] }[];
}

const GategorySlider = ({ items }: Props) => {
  const { width } = resizeWindow();
  return (
    <HStack>
      {items?.map((image, index) => (
        <>
          {index <
            (width > 1400 ? 4 : width > 1080 ? 3 : width > 770 ? 2 : 1) && (
            <Box key={index} boxSize={300} height={320} padding={5}>
              <ItemCard images={image.images}>{image.name}</ItemCard>
            </Box>
          )}
        </>
      ))}{" "}
      <Link to={`/items`}>
        <IconButton
          _hover={{ bgColor: "yellow.100", color: "gray.700" }}
          color={"gray.600"}
          borderRadius={50}
          aria-label=""
          icon={<BsArrowLeftCircle size={50} />}
          bg={""}
          boxSize={12}
          mr={width>447?2:-2}
        />
        <Text mt={2} color={"gray.500"} _hover={{ color: "gray.700" }}>
          see more
        </Text>
      </Link>
    </HStack>
  );
};

export default GategorySlider;
