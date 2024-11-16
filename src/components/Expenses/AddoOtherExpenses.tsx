import { Box, Input, Text } from "@chakra-ui/react";

const AddoOtherExpenses = () => {
  return (
    <div>
      <Box p={5} mt={8}>
        <Text mb={3}>اسم المصروف:</Text>
        <Input mb={5} placeholder="الاسم" />
        <Text mb={2}>القيمة:</Text>
        <Input placeholder="القيمة" type="number" />
      </Box>
    </div>
  );
};

export default AddoOtherExpenses;
