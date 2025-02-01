import { Box, HStack, Input, Text } from "@chakra-ui/react";
import EmplyeesSelector from "./EmplyeesSelector";
import useAddEmployeeExpense from "../../stores/AddEmployeeExpense";

const AddEmplyoeeExpense = () => {
  const { setIsReward, isReward, setCost, cost } = useAddEmployeeExpense();

  return (
    <Box p={5}>
      <Text mb={3} mt={5}>
        الموظف:
      </Text>
      <EmplyeesSelector />

      <HStack mt={6}>
        <Box
          boxSize={"fit-content"}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          bg={isReward == true ? "green.600" : "white"}
          color={isReward == true ? "white" : "black"}
          borderColor={isReward == true ? "teal.600" : "gray.200"}
          _focus={{
            boxShadow: "outline",
          }}
          px={3}
          py={2}
          onClick={() => setIsReward(true)}
        >
          مكافئة
        </Box>
        <Box
          boxSize={"fit-content"}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          bg={isReward == false ? "red.600" : "white"}
          color={isReward == false ? "white" : "black"}
          borderColor={isReward == false ? "red.600" : "gray.200"}
          _focus={{
            boxShadow: "outline",
          }}
          px={3}
          py={2}
          ml={5}
          onClick={() => setIsReward(false)}
        >
          خصم
        </Box>
        <Input
          placeholder="القيمة"
          type="number"
          value={cost}
          onChange={(e) => {
            if (e.target.value != "0" || cost.length != 0)
              setCost(e.target.value);
          }}
        />
      </HStack>
    </Box>
  );
};

export default AddEmplyoeeExpense;
