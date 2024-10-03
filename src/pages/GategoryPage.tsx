import { Box, Button, Collapse, Text } from "@chakra-ui/react";
import { categories } from "../components/Items/GategoriesSelector";
import GategorySlider from "../components/Items/GategorySlider";
import { items } from "../components/Items/ItemsGrid";
import { useState } from "react";
import resizeWindow from "../services/resizeWindow";
import { RED } from "../constants";

const GategoryPage = () => {
  const [show, setShow] = useState(false);
  const { width, height } = resizeWindow();

  const handleToggle = () => setShow(!show);
  return (
    <div style={{ marginRight: width>500?60:30, overflowY: "auto", height: height/1.2 }}>
      <Collapse
        startingHeight={760}
        in={show}
        transition={{
          exit: { duration: 3, delay: 0.5 },
          enter: { duration: 3 },
        }}
      >
        {categories.map((value, index) => (
          <Box borderRight={'4px'} borderColor={RED} paddingX={5}><div key={index} style={{ marginTop: index ? 48 : 30 }}>
            {" "}
            <Text fontStyle={"italic"} fontSize={24} mb={-4}>
              {value}:
            </Text>
            <GategorySlider items={items} />
          </div></Box>
        ))}
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt={10} mb={20} colorScheme="red" bgColor={RED}>
        Show {show ? "Less" : "More"} categories
      </Button>
    </div>
  );
};

export default GategoryPage;
