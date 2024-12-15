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

const item = [
  { date: "20/11/2024", type: "خصم", value: 2000 },
  { date: "20/5/2024", type: "مكافئة", value: 5000 },
  { date: "20/8/2024", type: "مكافئة", value: 8000 },
  { date: "20/10/2024", type: "خصم", value: 1000 },
  { date: "20/3/2024", type: "خصم", value: 2000 },
  { date: "2/11/2024", type: "خصم", value: 2000 },
];

const SalaryDetailsModal = () => {
  return (
    <Stack px={10} pb={10}>
      <Text mt={3}>الاسم: هاي</Text>
      <HStack justifyContent={"space-between"}>
        <Text> مجموع الخصومات: 1000</Text> <Text> مجموع الخصومات: 2000</Text>
      </HStack>
      <Box
        h={350}
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
            {item.map((em, Index) => (
              <Tr key={Index}>
                <Td pl={-1}>
                  <CustomDelete type="smallButton" ID={2} endpoint="" />
                </Td>
                <Td pr={-1}>
                  <Text textAlign={"center"} pr={2}>
                    {em.date}
                  </Text>
                </Td>
                <Td
                  textAlign={"center"}
                  textColor={em.type == "خصم" ? "red.600" : "green.600"}
                >
                  {em.type}
                </Td>
                <Td textAlign={"center"}>{em.value} </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Stack>
  );
};

export default SalaryDetailsModal;
