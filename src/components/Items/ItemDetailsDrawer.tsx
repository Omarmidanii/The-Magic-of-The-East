import { Box, Divider, Icon, Stack, Text } from "@chakra-ui/react";
import ItemsImagesSlider from "./ItemsImagesSlider";
import resizeWindow from "../../services/resizeWindow";
import { GiCheckMark } from "react-icons/gi";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { IoResizeSharp } from "react-icons/io5";
import item from "../../entities/item";

interface Props {
  item: item;
}

const ItemDetailsDrawer = ({ item }: Props) => {
  const { width } = resizeWindow();
  const icons = [AiOutlineColumnHeight, AiOutlineColumnWidth, IoResizeSharp];
  return (
    <div>
      <ItemsImagesSlider images={item.images} />
      <Divider
        mt={10}
        borderColor={"gray"}
        width={width > 767 ? 400 : 200}
        alignSelf={"center"}
        mr={width > 990 ? 28 : width > 767 ? 10 : width > 470 ? 24 : 16}
      />
      <Text mt={5} mb={2} fontSize={22}>
        {" "}
        الوصف:
      </Text>
      <Text color={"gray.500"}>{item.discription}</Text>
      <Text mt={5} mb={3} fontSize={22}>
        {" "}
        الألوان المتوفرة:
      </Text>
      <Box>
        {item.colors.map((value, index) => (
          <Icon
            mx={1.5}
            key={index}
            boxSize={5}
            color={value}
            p={1}
            bgColor={value}
            borderRadius={20}
            as={GiCheckMark}
          />
        ))}
      </Box>
      <Stack
        direction={{ md: "row", base: "column" }}
        justifyContent={"space-evenly"}
        mb={20}
        mt={5}
      >
        {Object.entries(item.sizes).map(([name, value], index) => (
          <Box key={index}>
            <Text mt={5} mb={2} fontSize={22}>
              <Icon as={icons[index]} mb={-1} ml={2}/>{name}
            </Text>
            <Text color={"gray.600"} mr={7}>{value}</Text>
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default ItemDetailsDrawer;
