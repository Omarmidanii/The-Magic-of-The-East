import { Box, SimpleGrid } from "@chakra-ui/react";
import ItemCard from "./ItemCard";

import OIP from "../../assets/OIP.jpg";
import OIP1 from "../../assets/OIP1.jpg";
import OIP2 from "../../assets/OIP2.jpg";

interface Props {
  width: number;
  height: number;
}

export const items = [
  { name: "غرفة ريفي بيج", images: [OIP, OIP1, OIP2] },
  { name: "غرفة نوم", images: [OIP, OIP1, OIP2] },
  { name: "غرفة نوم", images: [OIP, OIP1, OIP2] },
  { name: "غرفة نوم", images: [OIP, OIP1, OIP2] },
  { name: "غرفة نوم", images: [OIP, OIP1, OIP2] },
  { name: "غرفة نوم", images: [OIP, OIP1, OIP2] },
];

const ItemsGrid = ({ width, height }: Props) => {
  
  return (
    <Box borderRadius={20} width={width} height={height-70}>
      <SimpleGrid
        columns={width >= 1400 ? 5 :width >= 1180 ? 4 : width >= 850 ? 3 : width >= 560 ? 2 : 1} //{{  sm: 1, base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {items?.map((info, index) => (
          <Box key={index}>
            <ItemCard images={info.images}>{info.name}</ItemCard>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ItemsGrid;
