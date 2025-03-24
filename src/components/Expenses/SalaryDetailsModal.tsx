import {
  HStack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import CustomDelete from "../Delete";
import useFetchAdditionals from "../../hooks/useFetchAdditionals";

const type: Record<string, string> = { reward: "مكافئة", deduction: "خصم" };

interface Props {
  month: string;
  empId: number;
  empName: string;
}

const SalaryDetailsModal = ({ month, empId, empName }: Props) => {
  const data = useFetchAdditionals(empId, month);
  return (
    <Stack px={10} pb={10}>
      <Text mt={3}>الاسم: {empName}</Text>
      <HStack justifyContent={"space-between"}>
        <Text> مجموع الخصومات: {data.data?.total_deductions}</Text>{" "}
        <Text> مجموع الخصومات: {data.data?.total_rewards}</Text>
      </HStack>
      <Box
        maxH={350}
        overflow={"auto"}
        mx={-5}
        mt={8}
        sx={{ scrollbarWidth: "thin" }}
      >
        <Table variant="simple" width="100%">
          <Thead>
            <Tr>
              <Th pl={-1}></Th>
              <Th pr={-1} textAlign={"center"}>
                التاريخ
              </Th>
              <Th textAlign={"center"}>النوع</Th>
              <Th textAlign={"center"}>القيمة</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.data?.details.map((em, Index) => (
              <Tr key={Index}>
                <Td pl={-1}>
                  <CustomDelete
                  refetch={data.refetch}
                    type="smallButton"
                    ID={em.id}
                    endpoint="additionals"
                  />
                </Td>
                <Td pr={-1}>
                  <Text textAlign={"center"} pr={2}>
                    {em.date}
                  </Text>
                </Td>
                <Td
                  textAlign={"center"}
                  textColor={type[em.type] == "خصم" ? "red.600" : "green.600"}
                >
                  {type[em.type]}
                </Td>
                <Td textAlign={"center"}>{em.amount} </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Stack>
  );
};

export default SalaryDetailsModal;
