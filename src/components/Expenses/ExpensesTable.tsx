import {
  Collapse,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillCalendar2MonthFill } from "react-icons/bs";
import { FaDollarSign, FaUserTie } from "react-icons/fa";
import DataItem from "../../entities/Expenses";
import EmployersSalaryDetails from "./EmployersSalaryDetails";
import WarehouseExpensesDetails from "./WarehouseExpensesDetails";
interface ExpandedRows {
  [key: string]: "salary" | "expenses" | null;
}
const ExpensesTable = () => {
  const sampleData: DataItem[] = [
    {
      month: "2024/08/21",
      employers: {
        totalSalary: 5700,
        employer: [
          { firstname: "omar", salary: 2000, reward: 200 },
          { firstname: "Ghina", salary: 3000, reward: 500 },
        ],
      },
      expenses: 45000,
    },
    {
      month: "2024/07/21",
      employers: {
        totalSalary: 5700,
        employer: [
          { firstname: "omar", salary: 2000, reward: 200 },
          { firstname: "Ghina", salary: 3000, reward: 500 },
        ],
      },
      expenses: 2000,
    },
    {
      month: "2024/09/21",
      employers: {
        totalSalary: 5700,
        employer: [
          { firstname: "omar", salary: 2000, reward: 200 },
          { firstname: "Ghina", salary: 3000, reward: 500 },
        ],
      },
      expenses: 2000,
    },
  ];
  const [expandedRows, setExpandedRows] = useState<ExpandedRows>({});

  const handleRowToggle = (month: string, type: "salary" | "expenses") => {
    setExpandedRows((prev) => ({
      ...prev,
      [month]: prev[month] === type ? null : type,
    }));
  };

  return (
    <Table variant="simple" width="100%">
      <Thead>
        <Tr>
          <Th>
            <HStack>
              <BsFillCalendar2MonthFill />
              <Text>الشهر </Text>
            </HStack>
          </Th>
          <Th>
            <HStack>
              <FaUserTie />
              <Text>اجار العمال </Text>
            </HStack>
          </Th>

          <Th>
            <HStack>
              <FaDollarSign />
              <Text> مصاريف الصالات </Text>
            </HStack>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {sampleData.map((item) => (
          <React.Fragment key={item.month}>
            <Tr>
              <Td>{item.month}</Td>
              <Td
                onClick={() => handleRowToggle(item.month, "salary")}
                cursor="pointer"
              >
                {item.employers.totalSalary}
              </Td>
              <Td
                onClick={() => handleRowToggle(item.month, "expenses")}
                cursor="pointer"
              >
                {item.expenses}
              </Td>
            </Tr>
            <Tr>
              <Td colSpan={3}>
                <Collapse in={expandedRows[item.month] === "salary"}>
                  <EmployersSalaryDetails item={item} />
                </Collapse>
                <Collapse in={expandedRows[item.month] === "expenses"}>
                  <WarehouseExpensesDetails />
                </Collapse>
              </Td>
            </Tr>
          </React.Fragment>
        ))}
      </Tbody>
    </Table>
  );
};

export default ExpensesTable;
