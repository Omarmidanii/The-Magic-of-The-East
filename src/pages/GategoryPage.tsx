import { Box, Button, Collapse, Text, useDisclosure } from "@chakra-ui/react";
import { categories } from "../components/Items/GategoriesSelector";
import GategorySlider from "../components/Items/GategorySlider";
import { useState } from "react";
import resizeWindow from "../services/resizeWindow";
import { RED } from "../constants";
import AddButton from "../components/AddButton";
import CustomModal from "../components/Modal";
import GroupForm from "../components/Items/GroupForm";
import useFetchAllClassGroups from "../hooks/useFetchAllClassGroups";
import useGroupcolorsStore from "../stores/GroupColorsStore";
import useGroupItemsStore from "../stores/GroupitemsStore";
import useGroupImagesStore from "../stores/GroupImagesStore";

const GategoryPage = () => {
  const [show, setShow] = useState(false);
  const { width, height } = resizeWindow();

  const handleToggle = () => setShow(!show);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const currentPathname = window.location.pathname;

  const classGroups = useFetchAllClassGroups();

  const { resetImages } = useGroupImagesStore();
  const { setItems } = useGroupItemsStore();
  const { setColors } = useGroupcolorsStore();

  return (
    <div
      style={{
        marginRight: width > 500 ? 60 : 30,
        overflowY: "auto",
        height:
          currentPathname == "/dash/categories" || currentPathname == "/dash"
            ? height / 1.2
            : "auto",
        paddingTop: 10,
      }}
    >
      {currentPathname == "/dash/categories" || currentPathname == "/dash" ? (
        <AddButton
          onOpen={() => {
            resetImages();
            setItems([]);
            setColors([]);
            onOpen();
          }}
          label="اضافة سلعة"
        />
      ) : (
        <div style={{ marginTop: 150 }}></div>
      )}

      <CustomModal
        buttonLabel="اضافة مجموعة"
        isOpen={isOpen}
        onClose={onClose}
        color={"white"}
        size={{ md: "xl", base: "md" }}
      >
        <Box
          h={400}
          mb={10}
          px={5}
          style={{ scrollbarWidth: "thin" }}
          overflow={"auto"}
        >
          <GroupForm onSuccess={onClose} />{" "}
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
          <Box
            key={index}
            borderRight={"4px"}
            borderColor={RED}
            paddingX={5}
            mb={index == 9 ? 20 : 'auto'}
          >
            <div style={{ marginTop: index ? 48 : 30 }}>
              {" "}
              <Text fontStyle={"italic"} fontSize={24} mb={-4}>
                {value.arName}:
              </Text>
              <GategorySlider
                items={classGroups.data ? classGroups.data[index].groups : []}
                id={index}
              />
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
