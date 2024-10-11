import { Box, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import { RED } from "../../constants";

const WarehouseExpensesDetails = () => {
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
        <Box
          borderWidth={1}
          borderRadius="lg"
          overflow="hidden"
          p={4}
          boxShadow="md"
          bg={useColorModeValue("white", "gray.500")}
        >
          <Text fontWeight="bold" color={RED}>
            سكر
          </Text>
          <Text color={RED}>3000 ل.س</Text>
        </Box>
        <Box
          borderWidth={1}
          borderRadius="lg"
          overflow="hidden"
          p={4}
          boxShadow="md"
          bg={useColorModeValue("white", "gray.500")}
        >
          <Text fontWeight="bold" color={RED}>
            فطاير
          </Text>
          <Text color={RED}>25000 ل.س</Text>
        </Box>
        <Box
          borderWidth={1}
          borderRadius="lg"
          overflow="hidden"
          p={4}
          boxShadow="md"
          bg={useColorModeValue("white", "gray.500")}
        >
          <Text fontWeight="bold" color={RED}>
            نسكافيه
          </Text>
          <Text color={RED}>2000 ل.س</Text>
        </Box>
        <Box
          borderWidth={1}
          borderRadius="lg"
          overflow="hidden"
          p={4}
          boxShadow="md"
          bg={useColorModeValue("white", "gray.500")}
        >
          <Text fontWeight="bold" color={RED}>
            شاي
          </Text>
          <Text color={RED}>6000 ل.س</Text>
        </Box>
        <Box
          borderWidth={1}
          borderRadius="lg"
          overflow="hidden"
          p={4}
          boxShadow="md"
          bg={useColorModeValue("white", "gray.500")}
        >
          <Text fontWeight="bold" color={RED}>
            قهوة
          </Text>
          <Text color={RED}>9000 ل.س</Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default WarehouseExpensesDetails;
