import { Box, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import colors from "../../services/colors";
import useGroupcolorsStore from "../../stores/GroupColorsStore";

interface Props {
  filter: boolean;
  checkedColors: number[];
}

const ItemsColorFilter = ({ checkedColors, filter }: Props) => {
  const [usedColors, setColors] = useState(checkedColors);
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
            color={usedColors.includes(index) ? "white" : value.base}
            p={1}
            bgColor={value.base}
            borderRadius={20}
            boxShadow={
              usedColors.includes(index) ? `0 0 5px 1.5px ${value.border}` : ""
            }
            as={GiCheckMark}
            onClick={() => {
              if (usedColors.includes(index)) {
                setColors(usedColors.filter((num) => num !== index));
              } else {
                setColors([...usedColors, index]);
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ItemsColorFilter;
