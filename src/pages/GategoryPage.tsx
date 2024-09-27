import { Button, Collapse, Text } from "@chakra-ui/react";
import { categories } from "../components/Items/GategoriesSelector";
import GategorySlider from "../components/Items/GategorySlider";
import { items } from "../components/Items/ItemsGrid";
import { useState } from "react";
import { Link } from "react-router-dom";

const GategoryPage = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <div style={{ marginRight: 80, overflowY: "auto", height: 620 }}>
      <Collapse
        startingHeight={740}
        in={show}
        transition={{
          exit: { duration: 3, delay: 0.5 },
          enter: { duration: 3 },
        }}
      >
        {categories.map((value, index) => (
          <div key={index} style={{ marginTop: index ? 48 : 20 }}>
            {" "}
            <Text fontStyle={"italic"} fontSize={24} mb={-4}>
              {value}:
            </Text>
            <GategorySlider items={items} />
          </div>
        ))}
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt={5}>
        Show {show ? "Less" : "More"}
      </Button>
    </div>
  );
};

export default GategoryPage;
