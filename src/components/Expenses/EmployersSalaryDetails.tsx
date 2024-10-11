import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import DataItem from "../../entities/Expenses";

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
            <Th>اسم العامل</Th>
            <Th>الراتب</Th>
            <Th>المكافآت</Th>
          </Tr>
        </Thead>
        <Tbody>
          {item.employers.employer.map((em, Index) => (
            <React.Fragment key={Index}>
              <Tr>
                <Td>{em.firstname}</Td>
                <Td>{em.salary}</Td>
                <Td>{em.reward}</Td>
              </Tr>
            </React.Fragment>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default EmployersSalaryDetails;
