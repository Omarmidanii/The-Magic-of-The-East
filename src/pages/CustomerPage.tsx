import { Button, Divider, useDisclosure } from "@chakra-ui/react";
import CustomerTable from "../components/Customer/CustomerTable";
import CustomModal from "../components/Modal";
import CustomerForm from "../components/Customer/CustomerForm";
import { MdAdd } from "react-icons/md";

const CustomerPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleAdd = () => {
    console.log(22);
    if (onOpen) {
      onOpen();
    }
  };

  return (
    <>
      <Button leftIcon={<MdAdd />} m={5} mt={6} mr={8} borderRadius={25} colorScheme="green" onClick={handleAdd}>
        اضافة زبون جديد
      </Button>
      <CustomerTable />
      <CustomModal
        buttonLabel="اضافة زبون"
        isOpen={isOpen}
        onClose={onClose}
        color={'gray.100'}
      >
        <CustomerForm />
      </CustomModal>
    </>
  );
};

export default CustomerPage;
