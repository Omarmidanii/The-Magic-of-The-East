import { Box, Button, Collapse, Text, useDisclosure } from "@chakra-ui/react";
import { categories } from "../components/Items/GategoriesSelector";
import GategorySlider from "../components/Items/GategorySlider";
import { items } from "../components/Items/ItemsGrid";
import { useState } from "react";
import resizeWindow from "../services/resizeWindow";
import { RED } from "../constants";
import AddButton from "../components/AddButton";
import CustomDrawer from "../components/Drawer";
import CustomerItemsDrawerHeader from "../components/Customer/CustomerItemsDrawerHeader";
import CustomModal from "../components/Modal";
import EmployerForm from "../components/Employers/EmployerForm";
import GroupForm from "../components/Items/GroupForm";

const GategoryPage = () => {
  const [show, setShow] = useState(false);
  const { width, height } = resizeWindow();

  const handleToggle = () => setShow(!show);

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <div
      style={{
        marginRight: width > 500 ? 60 : 30,
        overflowY: "auto",
        height: height / 1.2,
        paddingTop: 10,
      }}
    >
      <AddButton onOpen={onOpen} label="اضافة سلعة" />

      <CustomModal
        buttonLabel="اضافة مجموعة"
        isOpen={isOpen}
        onClose={onClose}
        color={"white"}
        size={{md:'xl', base:'md'}}
      >
        <Box
          h={400}
          mb={10}
          px={5}
          style={{ scrollbarWidth: "thin" }}
          overflow={"auto"}
        >
          <GroupForm />{" "}
        </Box>
      </CustomModal>

      <Collapse
        startingHeight={760}
        in={show}
        transition={{
          exit: { duration: 3, delay: 0.5 },
          enter: { duration: 3 },
        }}
      >
        {categories.map((value, index) => (
          <Box key={index} borderRight={"4px"} borderColor={RED} paddingX={5}>
            <div style={{ marginTop: index ? 48 : 30 }}>
              {" "}
              <Text fontStyle={"italic"} fontSize={24} mb={-4}>
                {value}:
              </Text>
              <GategorySlider items={items} />
            </div>
          </Box>
        ))}
      </Collapse>
      <Button
        size="sm"
        onClick={handleToggle}
        mt={10}
        mb={20}
        colorScheme="red"
        bgColor={RED}
      >
        Show {show ? "Less" : "More"} categories
      </Button>
    </div>
  );
};

export default GategoryPage;
