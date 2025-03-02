import { Box, HStack, Input, Text } from "@chakra-ui/react";
import EmplyeesSelector from "./EmplyeesSelector";

interface Props{
  setEmployee: (v: number) => void;
  setamount: (v: number) => void;
  settype: (v: string) => void;
  cost:number;
  isReward:string;
}

const AddEmplyoeeExpense = ({setEmployee, setamount, settype, isReward, cost}:Props) => {

  return (
    <Box p={5}>
      <Text mb={3} mt={5}>
        الموظف:
      </Text>
      <EmplyeesSelector setEmp={setEmployee} />

      <HStack mt={6}>
        <Box
          boxSize={"fit-content"}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          bg={isReward == "1" ? "green.600" : "white"}
          color={isReward == "1" ? "white" : "black"}
          borderColor={isReward == "1" ? "teal.600" : "gray.200"}
          _focus={{
            boxShadow: "outline",
          }}
          px={3}
          py={2}
          onClick={() => settype('1')}
        >
          مكافئة
        </Box>
        <Box
          boxSize={"fit-content"}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          bg={isReward == "2" ? "red.600" : "white"}
          color={isReward == "2" ? "white" : "black"}
          borderColor={isReward == "2" ? "red.600" : "gray.200"}
          _focus={{
            boxShadow: "outline",
          }}
          px={3}
          py={2}
          ml={5}
          onClick={() => settype('2')}
        >
          خصم
        </Box>
        <Input
          placeholder="القيمة"
          type="number"
          value={cost}
          onChange={(e) => {
            if (e.target.value != "0" || cost != 0)
              setamount(Number(e.target.value));
          }}
        />
      </HStack>
    </Box>
  );
};

export default AddEmplyoeeExpense;
