import { Box } from "@chakra-ui/react";
import ExpensesTabs from "../components/Expenses/ExpensesTabs";
import resizeWindow from "../services/resizeWindow";

const ExpensesPage = () => {
  const { height } = resizeWindow();
  return (
    <Box overflowY={"auto"} maxH={height - 70}>
      <ExpensesTabs />
    </Box>
  );
};

export default ExpensesPage;
