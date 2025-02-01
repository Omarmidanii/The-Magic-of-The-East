import { Box, Divider, Icon, Stack, Text } from "@chakra-ui/react";
import ItemsImagesSlider from "./ItemsImagesSlider";
import resizeWindow from "../../services/resizeWindow";
import { GiCheckMark } from "react-icons/gi";
import SizesTable from "./SizesTable";
import colors from "../../services/colors";
import Group from "../../entities/group";

interface Props {
  group: Group | undefined;
}

const ItemBodysDrawer = ({ group }: Props) => {
  const currentPathname = window.location.pathname;
  const { width } = resizeWindow();

  return (
    <div style={{ marginTop: 20 }}>
      <ItemsImagesSlider images={group?.photos || []} />
      <Divider
        mt={10}
        borderColor={"gray"}
        width={width > 767 ? 400 : 200}
        alignSelf={"center"}
        mr={width > 990 ? 28 : width > 767 ? 10 : width > 470 ? 24 : 16}
      />

      <Text mt={2} mb={2} fontSize={22}>
        {" "}
        الوصف:
      </Text>
      <Text color={"gray.500"}>{group?.description}</Text>
      <Text mt={5} mb={3} fontSize={22}>
        {" "}
        الألوان المتوفرة:
      </Text>
      <Box>
        {group?.colors.map((value, index) => (
          <Icon
            mx={1.5}
            key={index}
            boxSize={5}
            color={colors[Number(value)].base}
            p={1}
            bgColor={colors[Number(value)].base}
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
        <SizesTable curItems={group?.items} />
      </Stack>
      {currentPathname.substring(0, 11) == "/dash/items" && (
        <>
          <Text mt={2} mb={2} fontSize={22}>
            {" "}
            اجمالي الشراء:
          </Text>
          <Text mb={10} color={"gray.500"}>{group?.net_price}</Text>
        </>
      )}
    </div>
  );
};

export default ItemBodysDrawer;
