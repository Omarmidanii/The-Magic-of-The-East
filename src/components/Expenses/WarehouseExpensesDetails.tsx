import { Box, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import CustomDelete from "../Delete";
import { sampleData } from "./ExpensesTable";

interface Props {
  name: string;
  month: number;
}

const WarehouseExpensesDetails = ({ name, month }: Props) => {
  let items =
    name == "expenses"
      ? sampleData[month].expensesDetails
      : name == "bills"
      ? sampleData[month].billsDetails
      : sampleData[month].rentDetails;

  return (
    <Box mb={16} mr={16} ml={16}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        textAlign={"center"}
        gap={6}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            borderWidth={1}
            borderRadius="lg"
            overflow="hidden"
            p={4}
            boxShadow="md"
            bg={useColorModeValue("white", "gray.500")}
          >
            <CustomDelete type="" ID={2} endpoint="" />
            <Text fontWeight="bold" color={"gray.700"}>
              {item.name}
            </Text>
            <Text color={"gray.600"}>{item.value} ل.س</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default WarehouseExpensesDetails;
