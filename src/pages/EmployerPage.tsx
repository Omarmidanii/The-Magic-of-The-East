import { useDisclosure } from "@chakra-ui/react";
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
        color={"gray.100"}
      >
        <EmployerForm />
      </CustomModal>
    </>
  );
};

export default EmployerPage;
