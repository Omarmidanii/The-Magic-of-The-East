import { Button } from "@chakra-ui/react";
import ItemsPage from "./ItemsPage";
import { Link } from "react-router-dom";

const ChooseBillGroups = () => {
  document.dir = "rtl";

  return (
    <div>
      <ItemsPage />
      <span
        style={{
          zIndex: 99999,
          display: "inline-block",
          position: "fixed",
          top: "90%", // Adjust the top position
          left: "90%", // Center horizontally
          transform: "translateX(-50%)", // Center horizontally
        }}
      >
        <Link to={'/dash/reports'}>
          <Button colorScheme="green">انتهيت من الاختيار</Button>
        </Link>
      </span>
    </div>
  );
};

export default ChooseBillGroups;
