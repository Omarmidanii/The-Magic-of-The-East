import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import resizeWindow from "../../services/resizeWindow";
import { Card } from "../../hooks/useFetchAllClassGroups";
interface Props {
  items: Card[];
  id: number;
}

const GategorySlider = ({ items, id }: Props) => {
  const { width } = resizeWindow();
  const currentPathname = window.location.pathname;

  return (
    <HStack>
      {items?.map((image, index) => (
        <div key={index}>
          {index <
            (width > 1400 ? 4 : width > 1080 ? 3 : width > 770 ? 2 : 1) && (
            <Box boxSize={300} height={320} padding={5}>
              <ItemCard images={image.photos} name={image.name} badge={image.state} />
            </Box>
          )}
        </div>
      ))}{" "}
      {items?.length && (
        <Link
          to={
            currentPathname == "/dash/categories" || currentPathname == "/dash"
              ? `/dash/items/${id+1}`
              : `/items/${id+1}`
          }
        >
          <IconButton
            _hover={{ bgColor: "gray.100", color: "gray.700" }}
            color={"gray.600"}
            borderRadius={50}
            aria-label=""
            icon={<BsArrowLeftCircle size={50} />}
            bg={""}
            boxSize={12}
            mr={width > 447 ? 2 : -2}
          />
          <Text mt={2} color={"gray.500"} _hover={{ color: "gray.700" }}>
            see more
          </Text>
        </Link>
      )}
    </HStack>
  );
};

export default GategorySlider;
