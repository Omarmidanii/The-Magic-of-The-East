import { Box, Divider, Show, useDisclosure } from "@chakra-ui/react";
import ExpensesTabs from "../components/Expenses/ExpensesTabs";
import resizeWindow from "../services/resizeWindow";
import AddButton from "../components/AddButton";
import CustomModal from "../components/Modal";
import AddExpenses from "../components/Expenses/AddExpenses";

const ExpensesPage = () => {
  const { height, width } = resizeWindow();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box overflowY={"auto"} maxH={height - 70}>
      {!isOpen && (
        <span
          style={{
            zIndex: 99999,
            display: "inline-block",
            position: "fixed",
            marginLeft: "calc(75% - 100px)",
            marginTop: "1vh",
          }}
        >
          <AddButton onOpen={onOpen} label="اضافة مصروف للصالة" />
        </span>
      )}
      <Show below="lg">
        <Box boxSize={24} />
        <Divider w={width / 2} mb={-2} mr={width / 4} />
      </Show>
      <ExpensesTabs />
      <CustomModal
        buttonLabel="اضافة مصروف للصالة"
        isOpen={isOpen}
        onClose={onClose}
        color={"white"}
      >
        <AddExpenses onClose={onClose} />
      </CustomModal>
    </Box>
  );
};

export default ExpensesPage;
