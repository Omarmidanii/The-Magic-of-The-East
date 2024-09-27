import { Box, HStack, IconButton, Stack } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemCard from "./ItemCard";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
interface Props {
  items: { name: string; images: string[] }[];
}

const GategorySlider = ({ items }: Props) => {
  return (
    <HStack>
      {items?.map((image, index) => (
        <>
          {index < 3 && (
            <Box key={index} boxSize={300} padding={5}>
              <ItemCard images={image.images}>{image.name}</ItemCard>
            </Box>
          )}
        </>
      ))}
      <Stack alignItems={"center"} mr={5}>
        {" "}
        show more ...
        <Link to={`/items`}>
          <IconButton
            borderRadius={50}
            aria-label=""
            icon={<BsArrowLeftCircle size={200} />}
            bg={""}
            boxSize={20}
          />
        </Link>
      </Stack>
    </HStack>
  );
};

export default GategorySlider;
