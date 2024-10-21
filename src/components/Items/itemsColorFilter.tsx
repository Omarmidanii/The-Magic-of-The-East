import { Box, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { colorProperties } from "./ItemsFilter";
import useGroupcolorsStore from "../../stores/GroupColorsStore";

interface Props {
  filter: boolean;
  colors: Record<string, colorProperties>;
}

const ItemsColorFilter = ({ colors, filter }: Props) => {
  const [usedColors, setColors] = useState(colors);
  const groupcolors = useGroupcolorsStore();
  return (
    <Box mb={2}>
      {" "}
      {filter ? "اللون :" : <Text mb={2}>الألوان المتوفرة:</Text>}
      {Object.entries(usedColors).map(([name, value], index) => (
        <Icon
          margin={1}
          key={index}
          mb={-2}
          boxSize={5}
          color={value.checked ? "white" : value.base}
          p={1}
          bgColor={value.base}
          borderRadius={20}
          boxShadow={value.checked ? `0 0 5px 1.5px ${value.border}` : ""}
          as={GiCheckMark}
          onClick={() => {
            setColors((prevColors) => ({
              ...prevColors,
              [name]: {
                ...prevColors[name],
                checked: !prevColors[name].checked,
              },
            }));
          }}
        />
      ))}
    </Box>
  );
};

export default ItemsColorFilter;
