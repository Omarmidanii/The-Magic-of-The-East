import { Line } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
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

const LineChart = () => {
  const dataLine = {
    labels: [
      "يناير ",
      "فبراير",
      "مارس  ",
      "أبريل ",
      "مايو  ",
      "يونيو ",
      "يوليو ",
      "أغسطس ",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ],
    datasets: [
      {
        label: "",
        data: [
          550000, 225000, 310000, 516516, 546513, 785484, 467215, 614632,
          514862, 346321, 686214, 416324,
        ],
        borderRadius: 10,
        borderColor: "#88DDDD",
        tension: 0.3,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "الأرباح والخسائر على مدار السنة",
        font: {
          size: 20,
        },
      },
      centerText: true,
    },
  };
  return (
    <Box w={"100%"} h={400} p={{ base: 2, sm: 10 }} overflowX={"auto"}>
      <Line data={dataLine} options={options} />
    </Box>
  );
};

export default LineChart;
