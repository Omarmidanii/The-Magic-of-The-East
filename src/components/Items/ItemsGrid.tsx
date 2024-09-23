import { Box, SimpleGrid } from "@chakra-ui/react";
import ItemCard from "./ItemCard";

import OIP from "../../assets/OIP.jpg";
import OIP1 from "../../assets/OIP1.jpg";
import OIP2 from "../../assets/OIP2.jpg";

interface Props {
  width: number;
  height: number;
}
const ItemsGrid = ({ width, height }: Props) => {
  const items=[{name:'غرفة نوم', images:[OIP, OIP1, OIP2 ]}, {name:'غرفة نوم', images:[OIP, OIP1, OIP2 ]}, {name:'غرفة نوم', images:[OIP, OIP1, OIP2 ]}, {name:'غرفة نوم', images:[OIP, OIP1, OIP2 ]}, {name:'غرفة نوم', images:[OIP, OIP1, OIP2 ]}, {name:'غرفة نوم', images:[OIP, OIP1, OIP2 ]}]
  return <Box borderRadius={20} width={width} height={height}>
  <SimpleGrid
        columns={width>=1280?4:width>=992?3:width>=768?2:1}//{{  sm: 1, base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {items?.map((info, index) => (
          <div key={index}>
            <ItemCard images={info.images}>
              {info.name}
            </ItemCard>
          </div>
        ))}
      </SimpleGrid></Box>;
};

export default ItemsGrid;
