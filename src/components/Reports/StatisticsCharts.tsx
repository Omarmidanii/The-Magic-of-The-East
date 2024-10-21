import { Stack } from "@chakra-ui/react";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

const statisticsCharts = () => {
  return (
    <Stack h={'100%'} p={5} mb={{base:32, sm:0}} mt={{base:16, sm:0}}>
      <PieChart />
      <LineChart />
    </Stack>
  );
};

export default statisticsCharts;
