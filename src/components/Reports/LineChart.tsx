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
import { Months } from "../../constants";
import useFetchLastYearEarnings from "../../hooks/usegetLastYearEarnings";
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
  const currentDate = new Date();
  const monthsArray: string[] = [];

  for (let i = 0; i < 12; i++) {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - i,
      1
    );
    const monthName = Object.keys(Months).find(
      (key) => Months[key] === date.getMonth() + 1
    );
    if (monthName) {
      monthsArray.unshift(monthName);
    }
  }
  const Earnings = useFetchLastYearEarnings();
  const $data = Earnings.data?.slice().reverse();
  const dataLine = {
    labels: monthsArray,
    datasets: [
      {
        label: "",
        data: $data,
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
    <Box w={"100%"} h={400} p={{ base: 2, sm: 10 }}>
      <Line data={dataLine} options={options} />
    </Box>
  );
};

export default LineChart;
