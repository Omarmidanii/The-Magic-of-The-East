import { Stack } from "@chakra-ui/react";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

const statisticsCharts = () => {
  return (
    <Stack p={5}>
      <PieChart />
      <LineChart />
    </Stack>
  );
};

export default statisticsCharts;
