import { Box, Stack } from "@chakra-ui/react";
import StatisticsCharts from "../components/Reports/StatisticsCharts";
import Bills from "../components/Reports/Bills";
import resizeWindow from "../services/resizeWindow";

const ReportPage = () => {
  const { height } = resizeWindow();
  return (
    <Stack
      direction={{ lg: "row", base: "column" }}
      h={height - 70}
      overflow={{ lg: "hidden", base: "auto" }}
    >
      <Box w={{ lg: "60%", base: "100%" }} px={5}>
        <Bills />
      </Box>
      <Box w={{ lg: "40%", base: "100%" }} h={"100%"} px={5}>
        <StatisticsCharts />
      </Box>
    </Stack>
  );
};

export default ReportPage;
