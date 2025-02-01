import { Box, Icon, Text } from "@chakra-ui/react";
import { GiCheckMark } from "react-icons/gi";
import colors from "../../services/colors";
import useGroupcolorsStore from "../../stores/GroupColorsStore";

interface Props {
  filter: boolean;
}

const ItemsColorFilter = ({ filter }: Props) => {
  const groupcolors = useGroupcolorsStore();

  return (
    <Box mb={2}>
      {" "}
      {filter ? "اللون :" : <Text mb={2}>الألوان المتوفرة:</Text>}
      <Box px={5}>
        {colors.map((value, index) => (
          <Icon
            cursor="pointer"
            margin={1}
            key={index}
            mb={0}
            boxSize={5}
            color={
              groupcolors.colors?.includes(index.toString())
                ? "white"
                : value.base
            }
            p={1}
            bgColor={value.base}
            borderRadius={20}
            boxShadow={
              groupcolors.colors?.includes(index.toString())
                ? `0 0 5px 1.5px ${value.border}`
                : ""
            }
            as={GiCheckMark}
            onClick={() => {
              if (groupcolors.colors?.includes(index.toString())) {
                groupcolors.setColors(
                  groupcolors.colors.filter((num) => num !== index.toString())
                );
              } else {
                groupcolors.setColors([
                  ...(groupcolors.colors || []),
                  index.toString(),
                ]);
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ItemsColorFilter;
