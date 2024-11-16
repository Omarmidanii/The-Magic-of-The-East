import { Box, HStack, Input, Select, Text } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../Employers/EmployersTabel";

const AddEmplyoeeExpense = () => {
  const [value, setvalue] = useState(1);



  return (
    <Box p={5}>
      <Text mb={3} mt={8}>
        الموظف:
      </Text>
      <Select
        sx={{
          direction: "ltr",
          textAlign: "right",
        }}
        placeholder="اختر الموظف"
        color={"gray.600"}
        maxHeight={"100px"}
      >
        {data.map((value, index) => (
          <option value={index}>
            {value.firstname + " " + value.lastname}
          </option>
        ))}
        {data.map((value, index) => (
          <option value={index}>
            {value.firstname + " " + value.lastname}
          </option>
        ))}
        {data.map((value, index) => (
          <option value={index}>
            {value.firstname + " " + value.lastname}
          </option>
        ))}
        {data.map((value, index) => (
          <option value={index}>
            {value.firstname + " " + value.lastname}
          </option>
        ))}
      </Select>

      

      <HStack mt={6} mb={2}>
        <Box
          boxSize={"fit-content"}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          bg={value == 1 ? "green.600" : "white"}
          color={value == 1 ? "white" : "black"}
          borderColor={value == 1 ? "teal.600" : "gray.200"}
          _focus={{
            boxShadow: "outline",
          }}
          px={3}
          py={2}
          onClick={() => setvalue(1)}
        >
          مكافئة
        </Box>
        <Box
          boxSize={"fit-content"}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          bg={value == 2 ? "red.600" : "white"}
          color={value == 2 ? "white" : "black"}
          borderColor={value == 2 ? "red.600" : "gray.200"}
          _focus={{
            boxShadow: "outline",
          }}
          px={3}
          py={2}
          ml={5}
          onClick={() => setvalue(2)}
        >
          خصم
        </Box>
        <Input placeholder="القيمة" type="number" />
      </HStack>
    </Box>
  );
};

export default AddEmplyoeeExpense;
