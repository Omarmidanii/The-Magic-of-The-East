import { Box } from "@chakra-ui/react";
import ExpensesTable from "../components/Expenses/ExpensesTable";
import ExpensesTabs from "../components/Expenses/ExpensesTabs";
import useExpensesTab from "../stores/ExpensesTabStore";
import resizeWindow from "../services/resizeWindow";

const ExpensesPage = () => {
  const { tab } = useExpensesTab();
  const { height } = resizeWindow();
  return (
    <Box overflowY={"auto"} maxH={height - 70}>
      <ExpensesTabs />
      {localStorage.getItem("ExpensesTab") === "tab1" && <ExpensesTable />}
    </Box>
  );
};

export default ExpensesPage;
