import { Box, Collapse, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import CustomDelete from "../Delete";
import useFetchExpenseDetails from "../../hooks/useFetchExpenseDetails";

interface Props {
  name: string;
  month: string;
}

const WarehouseExpensesDetails = ({ name, month }: Props) => {
  let tap =
    name == "expenses" ? 1 : name == "bills" ? 3 : name == "rent" ? 2 : 0; //make sure
  const details = tap
    ? useFetchExpenseDetails(tap, month)
    : { status: 0, data: [], message: "", isFetching: false };

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
        {details.data?.length == 0 && (
          <Collapse in={!details.isFetching}>
            <Box>لا يوجد شيء لعرضه</Box>
          </Collapse>
        )}
        {details.data?.map((item, index) => (
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
            <Text color={"gray.600"}>{item.cost} ل.س</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default WarehouseExpensesDetails;
