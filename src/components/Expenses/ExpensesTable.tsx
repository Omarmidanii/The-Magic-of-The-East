import {
  Collapse,
  HStack,
  IconButton,
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
import { IoArrowDownCircleOutline } from "react-icons/io5";
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
    <Table
      variant="simple"
      width="100%"
      size={{ base: "sm", md: "md", lg: "lg" }}
    >
      <Thead>
        <Tr>
          <Th>
            <HStack justifyContent={"center"}>
              <BsFillCalendar2MonthFill />
              <Text>الشهر </Text>
            </HStack>
          </Th>
          <Th>
            <HStack justifyContent={"center"}>
              <FaUserTie />
              <Text>اجار العمال </Text>
            </HStack>
          </Th>

          <Th>
            <HStack justifyContent={"center"}>
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
              <Td textAlign={"center"}>{item.month}</Td>
              <Td>
                <HStack justifyContent={"center"}>
                  <Text>{item.employers.totalSalary}</Text>
                  <IconButton
                    _hover={{ bgColor: "yellow.100", color: "gray.700" }}
                    color={"gray.600"}
                    borderRadius={50}
                    cursor="pointer"
                    bg={"none"}
                    onClick={() => handleRowToggle(item.month, "salary")}
                    boxSize={"30px"}
                    as={IoArrowDownCircleOutline}
                    aria-label=""
                  />
                </HStack>
              </Td>
              <Td>
                <HStack justifyContent={"center"}>
                  <Text>{item.expenses}</Text>
                  <IconButton
                    _hover={{ bgColor: "yellow.100", color: "gray.700" }}
                    color={"gray.600"}
                    borderRadius={50}
                    cursor="pointer"
                    bg={"none"}
                    onClick={() => handleRowToggle(item.month, "expenses")}
                    boxSize={"30px"}
                    as={IoArrowDownCircleOutline}
                    aria-label=""
                  />
                </HStack>
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
