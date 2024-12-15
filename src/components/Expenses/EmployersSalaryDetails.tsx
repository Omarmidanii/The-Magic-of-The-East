import {
  Box,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import CustomDelete from "../Delete";
import { sampleData } from "./ExpensesTable";
import { BsExclamationCircle } from "react-icons/bs";
import CustomModal from "../Modal";
import SalaryDetailsModal from "./SalaryDetailsModal";

interface Props {
  month: number;
}

const EmployersSalaryDetails = ({ month }: Props) => {
  let item = sampleData[month].employers.employer;
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box
      mb={16}
      mr={4}
      ml={16}
      borderColor={"blue.500"}
      borderWidth={"1px"}
      borderRadius={10}
    >
      <Table variant="simple" width="100%">
        <Thead>
          <Tr>
            <Th textAlign={"center"}>اسم العامل</Th>
            <Th textAlign={"center"}>الراتب</Th>
            <Th textAlign={"center"}>المكافآت+الخصومات</Th>
          </Tr>
        </Thead>
        <Tbody>
          {item.map((em, Index) => (
            <React.Fragment key={Index}>
              <Tr>
                <Td>
                  <CustomDelete type="" ID={2} endpoint="" />
                  <Text textAlign={"center"} pr={2}>
                    {em.firstname}
                  </Text>
                </Td>
                <Td textAlign={"center"}>{em.salary}</Td>
                <Td textAlign={"center"}>
                  {em.reward}{" "}
                  <Tooltip
                    label={"تفاصيل مكافئات وخصومات " + em.firstname}
                    borderRadius={20}
                    textColor={"gray.200"}
                    bgColor={"gray"}
                    placement="bottom"
                  >
                    <button>
                      <Icon
                        onClick={onOpen}
                        as={BsExclamationCircle}
                        mr={2}
                        mb={-0.5}
                        cursor={"pointer"}
                        color={"gray.500"}
                      />
                    </button>
                  </Tooltip>
                </Td>
              </Tr>
            </React.Fragment>
          ))}
        </Tbody>
      </Table>
      <CustomModal
        buttonLabel="تفاصيل مكافئات وخصومات "
        isOpen={isOpen}
        onClose={onClose}
        color={"white"}
      >
        <SalaryDetailsModal />
      </CustomModal>
    </Box>
  );
};

export default EmployersSalaryDetails;
