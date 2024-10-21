import { useDisclosure } from "@chakra-ui/react";
import AddButton from "../components/AddButton";
import CustomerForm from "../components/Customer/CustomerForm";
import CustomerTable from "../components/Customer/CustomerTable";
import CustomModal from "../components/Modal";

const CustomerPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <AddButton onOpen={onOpen} label="اضافة زبون جديد" />
      <CustomerTable />
      <CustomModal
        buttonLabel="اضافة زبون"
        isOpen={isOpen}
        onClose={onClose}
        color={'white'}
      >
        <CustomerForm onClose={onClose}/>
      </CustomModal>
    </>
  );
};

export default CustomerPage;
