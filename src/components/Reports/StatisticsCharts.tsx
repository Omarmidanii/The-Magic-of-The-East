import { Stack } from "@chakra-ui/react";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

const statisticsCharts = () => {
  return (
    <Stack h={"150%"} p={5} mb={{ base: 32, md: 0 }} mt={{ base: 16, md: 0 }}>
      <PieChart />
      <LineChart />
    </Stack>
  );
};

export default statisticsCharts;
