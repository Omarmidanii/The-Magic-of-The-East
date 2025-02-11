import { Doughnut } from "react-chartjs-2";
import { Box, Stack, Text } from "@chakra-ui/react";
import { RED } from "../../constants";
import { ar } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
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
import { useEffect, useRef, useState } from "react";
import useFetchMonthlyReport from "../../hooks/useFetchMonthlyReport";

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

const PieChart: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isDatePickerOpen, setDatePickerOpen] = useState<boolean>(false);
  const report = useFetchMonthlyReport(
    (selectedDate?.getMonth() || -1) + 1,
    selectedDate?.getFullYear() || 0
  );
  const canvasRef = useRef<ChartJS<"doughnut", number[], string> | null>(null); // اوبجكت للمخطط
  const data = {
    labels: ["المبيع", "الشراء", "المصاريف"],
    datasets: [
      {
        label: "",
        data: [
          report.data?.total_sell_price,
          report.data?.total_net_price,
          report.data?.total_expenses,
        ],
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
    },
  };

  const { width, height } = resizeWindow();

  // تابع لحتى اعرف اذا عم اكبس بقلب الدائرة
  // اول شي بجيب مكان الماوس بالنسبة للدائرة
  // بعدين بجيب مركز الدائرة
  // بعدين بحسب نصف قطر الدائرة و بحسب المسافة بين المركز و مكان الماوس اذا طلع اقل من نصف القطر ف انا بقلب الدائرة
  const handleCanvasClick = (event: MouseEvent) => {
    const canvas = canvasRef.current?.canvas;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect(); // بتجبلي حدود المستطيل تبع المخطط
    const x = event.clientX - rect.left; // عم اطرح يسار المستطيل من اكسات الماوس مشان اعرف شو احداثيات الماوس جوا المخطط
    const y = event.clientY - rect.top; // نفس الشغل تبع الاكسات بس عل الوايات

    // مركز الدائرة و نصف قطرها
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) / 3; // هي عل التجريب

    const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
    if (distance < radius) {
      setDatePickerOpen(true);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current?.canvas; //عم ناخد الاوبجكت تبع المخطط
    if (canvas) {
      canvas.addEventListener("click", handleCanvasClick);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("click", handleCanvasClick);
      }
    };
  }, []);

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
        position="relative"
      >
        <Doughnut ref={canvasRef} data={data} options={options} />
        {isDatePickerOpen && (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex={1}
          >
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => {
                setSelectedDate(date);
                setDatePickerOpen(false);
              }}
              showMonthYearPicker
              dateFormat="MM/yyyy"
              placeholderText="اختر تاريخ"
              isClearable
              locale={ar}
            />
          </Box>
        )}
        {!isDatePickerOpen && (
          <Box
            position="absolute"
            top="57%"
            left="50%"
            transform="translate(-50%, -50%)"
            cursor={"pointer"}
          >
            <Text onClick={() => setDatePickerOpen(true)}>
              {selectedDate
                ? report.data?.total_expenses == 0 &&
                  report.data?.total_net_price == 0 &&
                  report.data?.total_sell_price == 0
                  ? "لا يوجد تفاصيل لهذا الشهر..يرجى اختيار شهر اخر"
                  : `${
                      selectedDate.getMonth() + 1
                    }/${selectedDate.getFullYear()}`
                : "لم يتم اختيار تاريخ"}
            </Text>
          </Box>
        )}
      </Box>
      <Box
        borderRight={"4px"}
        h={"fit-content"}
        borderColor={RED}
        mt={width > 1210 ? 24 : width > 550 ? height / 9 : 10}
        px={4}
        pb={2}
      >
        <Text mb={3}>
          <b>فرق المبيع والشراء:</b> <br />
          {report.isPending ? "يتم الحساب.." : report.data?.earnings}
        </Text>
        <Text>
          <b>مجمل الربح مع المصاريف:</b> <br />
          {report.isPending
            ? "يتم الحساب.."
            : report.data?.earnings_with_expense}
        </Text>
      </Box>
    </Stack>
  );
};

export default PieChart;
