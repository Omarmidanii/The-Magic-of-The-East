import { Box, useDisclosure } from "@chakra-ui/react";
import EmployersTabel from "../components/Employers/EmployersTabel";
import AddButton from "../components/AddButton";
import CustomModal from "../components/Modal";
import EmployerForm from "../components/Employers/EmployerForm";

const EmployerPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <AddButton onOpen={onOpen} label="اضافة موظف جديد" />
      <EmployersTabel />
      <CustomModal
        buttonLabel="اضافة موظف"
        isOpen={isOpen}
        onClose={onClose}
        color={"white"}
      >
        <Box
          h={400}
          mb={10}
          px={5}
          style={{ scrollbarWidth: "thin" }}
          overflow={"auto"}
        >
          <EmployerForm onClose={onClose} />{" "}
        </Box>
      </CustomModal>
    </>
  );
};

export default EmployerPage;
