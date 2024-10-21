import { Doughnut } from "react-chartjs-2";
import { Plugin } from "chart.js";
import { Box, Stack, Text } from "@chakra-ui/react";
import { RED } from "../../constants";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import resizeWindow from "../../services/resizeWindow";

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const PieChart = () => {
  const centerTextPlugin: Plugin<"doughnut"> = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { ctx, width, height } = chart;
      ctx.restore();
      const fontSize = (height / 300).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = "middle";

      const text = ["مجمل الارباح", "25000000"];
      const lineHeight = 25;

      text.forEach((line, index) => {
        const textX = Math.round((width - ctx.measureText(line).width) / 1.25);
        const textY = height / 1.6 - (text.length / 2 - index) * lineHeight;
        ctx.fillText(line, textX, textY);
      });
      ctx.save();
    },
  };

  const data = {
    labels: ["المبيع", "الشراء", "المصاريف"],
    datasets: [
      {
        label: "",
        data: [550000, 125000, 310000],
        backgroundColor: ["#55CC77", "#DD4455", "#FFD266"],
        borderWidth: 6,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "الأرباح والخسائر",
        font: {
          size: 20,
        },
      },
      centerText: true,
    },
  };

  const { width, height } = resizeWindow();

  return (
    <Stack
      direction={
        width > 1210
          ? "row"
          : width > 992
          ? "column"
          : width > 550
          ? "row"
          : "column"
      }
    >
      <Box
        w={
          width > 992
            ? (20 * width) / 100
            : width > 550
            ? (40 * width) / 100
            : (80 * width) / 100
        }
      >
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      </Box>
      <Box
        borderRight={"4px"}
        h={"fit-content"}
        borderColor={RED}
        mt={width > 1210 ? 24 : width > 550 && width < 992 ? height / 9 : 10}
        px={4}
        pb={2}
      >
        <Text mb={3}>
          <b>فرق المبيع والشراء:</b> 2156115
        </Text>
        <Text>
          <b>مجمل الربح مع المصاريف:</b> 2156115
        </Text>
      </Box>
    </Stack>
  );
};

export default PieChart;
