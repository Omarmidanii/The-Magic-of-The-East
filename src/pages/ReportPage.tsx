import { Grid, GridItem } from "@chakra-ui/react";
import StatisticsCharts from "../components/Reports/StatisticsCharts";
import Bills from "../components/Reports/Bills";

const ReportPage = () => {
  return (
    <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(5, 1fr)">
      <GridItem colSpan={3} px={5}>
        <Bills />
      </GridItem>
      <GridItem colSpan={2} px={5}>
        <StatisticsCharts />
      </GridItem>
    </Grid>
  );
};

export default ReportPage;
