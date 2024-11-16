import {
  Collapse,
  HStack,
  Icon,
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
import DataItem from "../../entities/Expenses";
import EmployersSalaryDetails from "./EmployersSalaryDetails";
import WarehouseExpensesDetails from "./WarehouseExpensesDetails";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";
interface ExpandedRows {
  [key: string]: "salary" | "expenses" | "bills" | "rent" | null;
}

interface Props {
  headers: {
    icon: IconType;
    name: string;
    enName: "salary" | "expenses" | "bills" | "rent";
  }[];
}

export const sampleData: DataItem[] = [
  {
    month: "2024/08/21",
    employers: {
      totalSalary: 5700,
      employer: [
        { firstname: "omar", salary: "1000", reward: 200 },
        { firstname: "Ghina", salary: "2000", reward: 500 },
      ],
    },
    expenses: 45000,
    expensesDetails: [
      { name: "فطاير", value: 1000 },
      { name: "فطاير", value: 1000 },
      { name: "فطاير", value: 1000 },
    ],
    bills: 5000,
    billsDetails: [
      { name: "كهربا", value: 2000 },
      { name: "ماء", value: 2000 },
    ],
    rent: 7000,
    rentDetails: [
      { name: "الصالة الثانية", value: 2000000 },
      { name: "الصالة الاولى", value: 2000000 },
    ],
  },
  {
    month: "2024/07/21",
    employers: {
      totalSalary: 5700,
      employer: [
        { firstname: "omar", salary: "2000", reward: 200 },
        { firstname: "Ghina", salary: "3000", reward: 500 },
      ],
    },
    expenses: 2000,
    expensesDetails: [
      { name: "فطاير", value: 1000 },
      { name: "فطاير", value: 1000 },
      { name: "فطاير", value: 1000 },
    ],
    bills: 5000,
    billsDetails: [
      { name: "كهربا", value: 2000 },
      { name: "ماء", value: 2000 },
    ],
    rent: 7000,
    rentDetails: [
      { name: "الصالة الثانية", value: 2000 },
      { name: "الصالة الاولى", value: 2000 },
    ],
  },
  {
    month: "2024/09/21",
    employers: {
      totalSalary: 5700,
      employer: [
        { firstname: "omar", salary: "2000", reward: 200 },
        { firstname: "Ghina", salary: "3000", reward: 500 },
      ],
    },
    expenses: 2000,
    expensesDetails: [
      { name: "فطاير", value: 1000 },
      { name: "فطاير", value: 1000 },
      { name: "فطاير", value: 1000 },
    ],
    bills: 5000,
    billsDetails: [
      { name: "كهربا", value: 2000 },
      { name: "ماء", value: 2000 },
    ],
    rent: 7000,
    rentDetails: [
      { name: "الصالة الثانية", value: 2000 },
      { name: "الصالة الاولى", value: 2000 },
    ],
  },
];

const ExpensesTable = ({ headers }: Props) => {
  const [expandedRows, setExpandedRows] = useState<ExpandedRows>({});

  const handleRowToggle = (
    month: string,
    type: "salary" | "expenses" | "bills" | "rent"
  ) => {
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
          {headers.map((val, ind) => (
            <Th key={ind}>
              <HStack justifyContent={"center"}>
                <Icon as={val.icon} />
                <Text>{val.name} </Text>
              </HStack>
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {sampleData.map((item, index) => (
          <React.Fragment key={index}>
            <Tr>
              <Td textAlign={"center"}>{item.month}</Td>
              {headers.map((_, index) => (
                <Td>
                  <HStack justifyContent={"center"}>
                    <Text>
                      {headers[index].enName == "salary"
                        ? item.employers.totalSalary
                        : headers[index].enName == "rent"
                        ? item.rent
                        : headers[1].enName == "expenses"
                        ? item.expenses
                        : item.bills}
                    </Text>
                    <IconButton
                      _hover={{ bgColor: "yellow.100", color: "gray.700" }}
                      color={"gray.600"}
                      borderRadius={50}
                      cursor="pointer"
                      bg={"none"}
                      onClick={() =>
                        handleRowToggle(item.month, headers[index].enName)
                      }
                      boxSize={"30px"}
                      as={IoArrowDownCircleOutline}
                      aria-label=""
                    />
                  </HStack>
                </Td>
              ))}
            </Tr>
            <Tr>
              <Td colSpan={3}>
                <Collapse in={expandedRows[item.month] === "salary"}>
                  <EmployersSalaryDetails month={index} />
                </Collapse>
                <Collapse
                  in={
                    expandedRows[item.month] != "salary" &&
                    expandedRows[item.month] != null
                  }
                >
                  <WarehouseExpensesDetails
                    name={expandedRows[item.month] || ""}
                    month={index}
                  />
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
