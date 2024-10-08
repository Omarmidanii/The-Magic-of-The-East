import { Box, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import ItemCard from "./ItemCard";

import OIP from "../../assets/OIP.jpg";
import OIP1 from "../../assets/OIP1.jpg";
import OIP2 from "../../assets/OIP2.jpg";
import OIP3 from "../../assets/OIP3.jpeg";
import OIP4 from "../../assets/OIP4.jpeg";
import CustomDrawer from "../Drawer";
import { useState } from "react";
import ItemDetailsDrawer from "./ItemDetailsDrawer";
import CustomerItemsDrawerHeader from "../Customer/CustomerItemsDrawerHeader";

interface Props {
  width: number;
  height: number;
}

export const items = [
  {
    name: "غرفة ريفي بيج",
    discription:
      "isd cnsaldncsal nlasln asjx lasxsajl asl xlajs xaljsxjla xja xlas  xlsakxalx salj xa isd cnsaldncsal nlasln asjx lasxsajl asl xlajsxaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln asjx lasxsajl        asl xlajs xaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln        asjx lasxsajl asl xlajs xaljsxjla xja xlas xlsakxalx salj xa      ",
    images: [OIP, OIP1, OIP2, OIP3, OIP4],
    colors: ["pink", "red.500", "gray"],
    sizes: { الطول: 205, العرض: 100, العمق: 120 },
  },
  {
    name: "غرفة نوم",
    discription:
      "isd cnsaldncsal nlasln asjx lasxsajl asl xlajs xaljsxjla xja xlas  xlsakxalx salj xa isd cnsaldncsal nlasln asjx lasxsajl asl xlajsxaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln asjx lasxsajl        asl xlajs xaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln        asjx lasxsajl asl xlajs xaljsxjla xja xlas xlsakxalx salj xa      ",
    images: [OIP],
    colors: [
      "yellow",
      "blue.500",
      "orange",
      "pink",
      "red.500",
      "gray",
      "green",
    ],
    sizes: { الطول: 205, العرض: 100, العمق: 120 },
  },
  {
    name: "غرفة نوم",
    discription:
      "isd cnsaldncsal nlasln asjx lasxsajl asl xlajs xaljsxjla xja xlas  xlsakxalx salj xa isd cnsaldncsal nlasln asjx lasxsajl asl xlajs        xaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln ajx lasxsajl        asl xlajs xaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlaslnasjx lasxsajl asl xlajs xaljsxjla xja xlas xlsakxalx salj xa      ",
    images: [OIP, OIP1, OIP3, OIP4, OIP2],
    colors: [
      "yellow",
      "blue.500",
      "orange",
      "pink",
      "red.500",
      "gray",
      "green",
    ],
    sizes: { الطول: 205, العرض: 100, العمق: 120 },
  },
  {
    name: "غرفة نوم",
    discription:
      "isd cnsaldncsal nlasln asjx lasxsajl asl xlajs xaljsxjla xja xlas  xlsakxalx salj xa isd cnsaldncsal nlasln asjx lasxsajl asl xlajsxaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln ajx lasxsajl        asl xlajs xaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlaslnasjx lasxsajl asl xlajs xaljsxjla xja xlas xlsakxalx salj xa      ",
    images: [OIP, OIP1],
    colors: [
      "yellow",
      "blue.500",
      "orange",
      "pink",
      "red.500",
      "gray",
      "green",
    ],
    sizes: { الطول: 205, العرض: 100, العمق: 120 },
  },
  {
    name: "غرفة نوم",
    discription:
      " هايisd cnsaldncsal nlasln asjx lasxsajl asl xlajs xaljsxjla xja xlas  xlsakxalx salj xa isd cnsaldncsal nlasln asjx lasxsajl asl xlajsxaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln ajx lasxsajl        asl xlajs xaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlaslnasjx lasxsajl asl xlajs xaljsxjla xja xlas xlsakxalx salj xa      ",
    images: [OIP, OIP1, OIP2],
    colors: [
      "yellow",
      "blue.500",
      "orange",
      "pink",
      "red.500",
      "gray",
      "green",
    ],
    sizes: { الطول: 205, العرض: 100, العمق: 120 },
  },
  {
    name: "غرفة نوم",
    discription:
      "isd cnsaldncsal nlasln asjx lasxsajl asl xlajs xaljsxjla xja xlas  xlsakxalx salj xa isd cnsaldncsal nlasln asjx lasxsajl asl xlajsxaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln ajx lasxsajl        asl xlajs xaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlaslnasjx lasxsajl asl xlajs xaljsxjla xja xlas xlsakxalx salj xa",
    images: [OIP, OIP4, OIP1, OIP2],
    colors: [
      "yellow",
      "blue.500",
      "orange",
      "pink",
      "red.500",
      "gray",
      "green",
    ],
    sizes: { الطول: 205, العرض: 100, العمق: 120 },
  },
];

const ItemsGrid = ({ width, height }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentIem, setCurrentItem] = useState({
    name: "",
    discription: "",
    images: [""],
    colors: [""],
    sizes: { الطول: 0, العرض: 0, العمق: 0 },
  });
  return (
    <Box borderRadius={20} width={width} height={height - 70}>
      <SimpleGrid
        columns={
          width >= 1400
            ? 5
            : width >= 1180
            ? 4
            : width >= 850
            ? 3
            : width >= 560
            ? 2
            : 1
        } //{{  sm: 1, base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {items?.map((info, index) => (
          <Box
            key={index}
            onClick={() => {
              onOpen();
              setCurrentItem(info);
            }}
          >
            <ItemCard images={info.images} name={info.name} />
          </Box>
        ))}
      </SimpleGrid>
      <CustomDrawer
        isOpen={isOpen}
        onClose={onClose}
        body={<ItemDetailsDrawer item={currentIem} />}
        header={
          <CustomerItemsDrawerHeader
            name={"معلومات " +currentIem.name }
            OnOpen={onOpen}
          />
        }
      />
    </Box>
  );
};

export default ItemsGrid;
