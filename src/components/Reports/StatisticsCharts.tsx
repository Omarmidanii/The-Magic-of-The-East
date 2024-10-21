import { Stack } from "@chakra-ui/react";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import resizeWindow from "../../services/resizeWindow";

const statisticsCharts = () => {
  const { height } = resizeWindow();
  return (
    <Stack
      h={height - 70}
      p={5}
      mb={{ base: 32, md: 0 }}
      mt={{ base: 16, md: 0 }}
      overflowY={{ base: "auto", md: "hidden" }}
    >
      <PieChart />
      <LineChart />
    </Stack>
  );
};

export default statisticsCharts;
