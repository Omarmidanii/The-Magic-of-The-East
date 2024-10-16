import { Doughnut } from "react-chartjs-2";
import { Plugin } from "chart.js";
import { Box, HStack, Text } from "@chakra-ui/react";
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
  return (
    <HStack h={280} mt={5} mr={5}>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      <Box borderRight={"4px"} borderColor={RED} mt={10} px={4} pb={2}>
        <Text mb={3}>
          <b>فرق المبيع والشراء:</b> 2156115
        </Text>
        <Text>
          <b>مجمل الربح مع المصاريف:</b> 2156115
        </Text>
      </Box>
    </HStack>
  );
};

export default PieChart;
