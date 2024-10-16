import { Box, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import DataItem from "../../entities/Expenses";
import CustomDelete from "../Delete";

interface Props {
  item: DataItem;
}

const EmployersSalaryDetails = ({ item }: Props) => {
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
            <Th textAlign={"center"}>المكافآت</Th>
          </Tr>
        </Thead>
        <Tbody>
          {item.employers.employer.map((em, Index) => (
            <React.Fragment key={Index}>
              <Tr>
                <Td>
                  <CustomDelete type="" ID={2} endpoint="" />
                  <Text textAlign={"center"} pr={2}>
                    {em.firstname}
                  </Text>
                </Td>
                <Td textAlign={"center"}>{em.salary}</Td>
                <Td textAlign={"center"}>{em.reward}</Td>
              </Tr>
            </React.Fragment>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default EmployersSalaryDetails;
