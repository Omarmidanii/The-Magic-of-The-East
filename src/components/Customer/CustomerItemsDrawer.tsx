import { Box, IconButton, useColorMode, useDisclosure } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import customer from "../../entities/customer";
import CustomDrawer from "../Drawer";
import CustomModal from "../Modal";
import CustomerForm from "./CustomerForm";
import CustomerItemIDrawerBody from "./CustomerItemIDrawerBody";
import CustomerItemsDrawerHeader from "./CustomerItemsDrawerHeader";

interface Props {
  customer: customer;
  fun: () => {};
}

const CustomerItemsDrawer = ({ customer, fun }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: IsOpen, onClose: OnClose, onOpen: OnOpen } = useDisclosure();
  console.log(customer);

  const { colorMode } = useColorMode();
  return (
    <Box>
      <IconButton
        icon={<FaArrowLeft />}
        bgColor={colorMode === "dark" ? "black" : "white"}
        onClick={(e) => {
          e.stopPropagation();
          if (onOpen) {
            console.log(isOpen);
            onOpen();
          }
        }}
        aria-label="Open Drawer"
      />
      <CustomDrawer
        isOpen={isOpen}
        onClose={onClose}
        body={<CustomerItemIDrawerBody customer={customer} />}
        header={
          <CustomerItemsDrawerHeader
            id={customer.id || -1}
            fun={() => {
              fun();
              onClose();
            }}
            name={customer.firstname + " " + customer.lastname}
            OnOpen={OnOpen}
          />
        }
      />
      <CustomModal
        buttonLabel="تعديل زبون"
        isOpen={IsOpen}
        onClose={OnClose}
        color={"gray.100"}
      >
        <CustomerForm
          customer={customer}
          onClose={() => {
            fun();
            OnClose();
          }}
        />
      </CustomModal>
    </Box>
  );
};

export default CustomerItemsDrawer;
